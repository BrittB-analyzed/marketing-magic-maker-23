<?php
// Hostinger-compatible lead endpoint.
//
// Static hosting has no server runtime for this app, so this file forwards the
// submission to the Lovable deployment, which holds the Resend credentials.
// Optional: set RESEND_API_KEY (a real re_... key) in the hosting environment to
// send directly through Resend instead of forwarding.

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') { http_response_code(204); exit; }

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Change this only if the Lovable project URL changes.
const LOVABLE_LEAD_ENDPOINT = 'https://project--ce7b695a-c956-44db-93e5-b9a20665a527.lovable.app/api/public/lead';

$raw = file_get_contents('php://input');
$in = json_decode($raw, true);
if (!is_array($in)) { $in = $_POST; }

$get = function ($key, $max = 200) use ($in) {
    $v = isset($in[$key]) ? trim((string) $in[$key]) : '';
    return mb_substr($v, 0, $max);
};

// Honeypot: silently accept.
if ($get('honeypot') !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

$website = $get('website');
$email   = $get('email');

if (mb_strlen($website) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Vul een geldige website en e-mailadres in.']);
    exit;
}

$fields = [
    'website' => $website,
    'email'   => $email,
    'name'    => $get('name', 120),
    'phone'   => $get('phone', 60),
    'focus'   => $get('focus', 60),
    'source'  => $get('source', 120),
    'stage'   => $get('stage', 20) === 'complete' ? 'complete' : 'partial',
];

$post = function ($url, $headers, $payload) {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 20,
        CURLOPT_HTTPHEADER     => $headers,
        CURLOPT_POSTFIELDS     => $payload,
    ]);
    $body   = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    $err    = curl_error($ch);
    curl_close($ch);
    return [$body, $status, $err];
};

$apiKey = getenv('RESEND_API_KEY') ?: ($_SERVER['RESEND_API_KEY'] ?? '');

// Preferred path when a real Resend API key is available on this host.
if (strpos($apiKey, 're_') === 0) {
    $from = getenv('LEAD_FROM_EMAIL') ?: ($_SERVER['LEAD_FROM_EMAIL'] ?? 'B. Analyzed <info@b-analyzed.com>');

    $labels = [
        'website' => 'Website', 'email' => 'E-mail', 'name' => 'Naam',
        'phone' => 'Telefoon', 'focus' => 'Focus', 'source' => 'Formulier',
    ];
    $html = '<h2>Nieuwe scanaanvraag via b-analyzed.com</h2><table cellpadding="6" style="border-collapse:collapse">';
    foreach ($labels as $key => $label) {
        if ($fields[$key] === '') { continue; }
        $html .= '<tr><td style="border:1px solid #e5e5e5"><strong>' . htmlspecialchars($label, ENT_QUOTES, 'UTF-8') . '</strong></td>'
               . '<td style="border:1px solid #e5e5e5">' . htmlspecialchars($fields[$key], ENT_QUOTES, 'UTF-8') . '</td></tr>';
    }
    $status = $fields['stage'] === 'complete' ? 'Volledig ingevuld' : 'Stap 1 (nog niet afgerond)';
    $html .= '<tr><td style="border:1px solid #e5e5e5"><strong>Status</strong></td><td style="border:1px solid #e5e5e5">' . $status . '</td></tr></table>';

    [$body, $code, $err] = $post('https://api.resend.com/emails', [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $apiKey,
    ], json_encode([
        'from' => $from,
        'to' => ['info@b-analyzed.com'],
        'reply_to' => $email,
        'subject' => 'Nieuwe SEO & GEO-scan aanvraag — ' . $website,
        'html' => $html,
    ], JSON_UNESCAPED_UNICODE));

    if ($code >= 200 && $code < 300) { echo json_encode(['ok' => true]); exit; }
    error_log('send-lead.php: Resend failed [' . $code . '] ' . ($err ?: (string) $body));
}

// Fallback: forward to the Lovable deployment.
[$body, $code, $err] = $post(LOVABLE_LEAD_ENDPOINT, ['Content-Type: application/json'], json_encode($fields, JSON_UNESCAPED_UNICODE));

if ($code >= 200 && $code < 300 && is_string($body) && strpos(ltrim($body), '{') === 0) {
    echo $body;
    exit;
}

error_log('send-lead.php: forward failed [' . $code . '] ' . ($err ?: (string) $body));
http_response_code(502);
echo json_encode(['ok' => false, 'error' => 'Verzenden mislukt. Probeer het later opnieuw.']);
