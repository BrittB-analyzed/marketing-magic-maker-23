<?php
// Hostinger-compatible lead endpoint.
// Requires the environment variable RESEND_API_KEY (your Resend API key, re_...).
// Optional: LEAD_FROM_EMAIL, e.g. "B. Analyzed <info@b-analyzed.com>"

header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

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

$apiKey = getenv('RESEND_API_KEY') ?: ($_SERVER['RESEND_API_KEY'] ?? '');
if (!$apiKey) {
    error_log('send-lead.php: RESEND_API_KEY is not set');
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'E-mailkoppeling is niet geconfigureerd.']);
    exit;
}

$from = getenv('LEAD_FROM_EMAIL') ?: ($_SERVER['LEAD_FROM_EMAIL'] ?? 'B. Analyzed <info@b-analyzed.com>');

$stage = $get('stage', 20) === 'complete' ? 'Volledig ingevuld' : 'Stap 1 (nog niet afgerond)';
$rows = [
    ['Website', $website],
    ['E-mail', $email],
    ['Naam', $get('name', 120)],
    ['Telefoon', $get('phone', 60)],
    ['Focus', $get('focus', 60)],
    ['Formulier', $get('source', 120)],
    ['Status', $stage],
];

$html = '<h2>Nieuwe scanaanvraag via b-analyzed.com</h2><table cellpadding="6" style="border-collapse:collapse">';
foreach ($rows as $row) {
    if ($row[1] === '') { continue; }
    $k = htmlspecialchars($row[0], ENT_QUOTES, 'UTF-8');
    $v = htmlspecialchars($row[1], ENT_QUOTES, 'UTF-8');
    $html .= '<tr><td style="border:1px solid #e5e5e5"><strong>' . $k . '</strong></td>'
           . '<td style="border:1px solid #e5e5e5">' . $v . '</td></tr>';
}
$html .= '</table>';

$payload = json_encode([
    'from'     => $from,
    'to'       => ['info@b-analyzed.com'],
    'reply_to' => $email,
    'subject'  => 'Nieuwe SEO & GEO-scan aanvraag — ' . $website,
    'html'     => $html,
], JSON_UNESCAPED_UNICODE);

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 20,
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $apiKey,
    ],
    CURLOPT_POSTFIELDS     => $payload,
]);
$response = curl_exec($ch);
$status   = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
$curlErr  = curl_error($ch);
curl_close($ch);

if ($response === false || $status < 200 || $status >= 300) {
    error_log('send-lead.php: Resend failed [' . $status . '] ' . ($curlErr ?: (string) $response));
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Verzenden mislukt. Probeer het later opnieuw.']);
    exit;
}

echo json_encode(['ok' => true]);
