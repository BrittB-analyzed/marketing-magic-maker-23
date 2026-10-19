const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, PageBreak, Tab, TabStopType,
  TableLayoutType, HeightRule
} = require('docx');
const fs = require('fs');

const ANTRACIET = '3C3C3B';  // covervlak + tabelkoppen
const ROOD_DIEP = 'C81433';  // primair merkrood / status kritiek
const ROOD_LICHT = 'E03E33';
const NAVY = ANTRACIET;      // covervlak (was merkrood, nu antraciet)
const BLUE = ANTRACIET;
const LIGHTBLUE = 'D6D8DD';
const GREEN = '1F8A5B';      // .pass uit de brandsheet
const AMBER = 'B07000';      // .warn uit de brandsheet
const RED = ROOD_DIEP;       // .dont uit de brandsheet
const ROW_ALT = 'F4F4F5';    // mist
const BORDER = 'E2E2E4';     // lijn
const DARK = ANTRACIET;
const SECTION_BG = 'F4F4F5';
const GREEN_BG = 'F4F4F5';
const GRAY = '8A8A8D';
const INK = ANTRACIET;
const COVER_MUTED = 'A0A0A4';

const DISPLAY = 'Poppins';
const BODY = 'Inter';
const MONO = 'IBM Plex Mono';

const CW = 9360; // content width
const DATE_NL = '6 augustus 2026';
const DOMAIN = 'b-analyzed.com';

// ---------- helpers ----------
const noBorders = {
  top: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  bottom: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  left: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
};
const thinBorders = {
  top: { style: BorderStyle.SINGLE, size: 4, color: BORDER },
  bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER },
  left: { style: BorderStyle.SINGLE, size: 4, color: BORDER },
  right: { style: BorderStyle.SINGLE, size: 4, color: BORDER },
};

function navySpacer(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(new Paragraph({
      shading: { type: ShadingType.CLEAR, fill: NAVY, color: 'auto' },
      spacing: { before: 0, after: 0, line: 240, lineRule: 'exact' },
      children: [new TextRun({ text: ' ', font: BODY, size: 22, color: NAVY })],
    }));
  }
  return out;
}

function navyText(text, opts = {}) {
  return new Paragraph({
    shading: { type: ShadingType.CLEAR, fill: NAVY, color: 'auto' },
    alignment: AlignmentType.CENTER,
    spacing: { before: opts.before || 0, after: opts.after || 0 },
    children: [new TextRun({
      text,
      font: opts.font || BODY,
      size: opts.size || 22,
      bold: opts.bold || false,
      italics: opts.italics || false,
      color: opts.color || 'FFFFFF',
    })],
  });
}

function scoreColor(score) {
  if (score >= 8) return GREEN;
  if (score >= 5) return AMBER;
  return RED;
}

function coverScoreCell(label, score, status) {
  const fill = scoreColor(score);
  return new TableCell({
    width: { size: 4080, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, fill: 'FFFFFF', color: 'auto' },
    borders: noBorders,
    margins: { top: 300, bottom: 300, left: 100, right: 100 },
    verticalAlign: VerticalAlign.CENTER,
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 },
        children: [new TextRun({ text: label, font: DISPLAY, size: 20, bold: true, color: ANTRACIET })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 },
        children: [new TextRun({ text: String(score), font: DISPLAY, size: 72, bold: true, color: fill })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: status, font: BODY, size: 18, italics: true, color: GRAY })],
      }),
    ],
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 200 },
    children: [new TextRun({ text, font: DISPLAY, size: 48, bold: true, color: ROOD_DIEP })],
  });
}
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    keepNext: true,
    spacing: { before: 300, after: 140 },
    children: [new TextRun({ text, font: DISPLAY, size: 36, bold: true, color: ANTRACIET })],
  });
}
function sub(text) {
  return new Paragraph({
    keepNext: true,
    spacing: { before: 0, after: 200 },
    children: [new TextRun({ text, font: BODY, size: 22, italics: true, color: GRAY })],
  });
}
function body(text, opts = {}) {
  return new Paragraph({
    spacing: { before: opts.before || 0, after: opts.after === undefined ? 160 : opts.after },
    children: [new TextRun({ text, font: BODY, size: 22, color: DARK, bold: opts.bold || false })],
  });
}
function bullet(text) {
  return new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { after: 80 },
    children: [new TextRun({ text, font: BODY, size: 22, color: DARK })],
  });
}

function cell(text, widthDxa, opts = {}) {
  return new TableCell({
    width: { size: widthDxa, type: WidthType.DXA },
    shading: opts.fill ? { type: ShadingType.CLEAR, fill: opts.fill, color: 'auto' } : undefined,
    borders: opts.borders || thinBorders,
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({
      alignment: opts.align || AlignmentType.LEFT,
      children: [new TextRun({
        text,
        font: opts.font || BODY,
        size: opts.size || 20,
        bold: opts.bold || false,
        color: opts.color || DARK,
      })],
    })],
  });
}

function headerRow(labels, widths) {
  return new TableRow({
        cantSplit: true,
    tableHeader: true,
    children: labels.map((l, i) => cell(l, widths[i], { fill: INK, color: 'FFFFFF', bold: true, font: DISPLAY })),
  });
}

const STATUS_FILL = { 'Goed': GREEN, 'Aandacht': AMBER, 'Ontbreekt': RED, 'Te verifiëren': GRAY };

// Signal | Finding | Status  table
function signalTable(rows) {
  const widths = [2350, 5210, 1800];
  return new Table({
    width: { size: CW, type: WidthType.DXA },
    columnWidths: widths,
    layout: TableLayoutType.FIXED,
    rows: [
      headerRow(['Signaal', 'Bevinding', 'Status'], widths),
      ...rows.map((r, idx) => new TableRow({
        cantSplit: true,
        children: [
          cell(r[0], widths[0], { fill: idx % 2 ? ROW_ALT : undefined, bold: true }),
          cell(r[1], widths[1], { fill: idx % 2 ? ROW_ALT : undefined }),
          cell(r[2], widths[2], { fill: STATUS_FILL[r[2]] || GRAY, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
        ],
      })),
    ],
  });
}
// ---------- cover ----------
function whiteSpacer(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(new Paragraph({
      spacing: { before: 0, after: 0, line: 240, lineRule: 'exact' },
      children: [new TextRun({ text: ' ', font: BODY, size: 22 })],
    }));
  }
  return out;
}

function coverLine(text, opts = {}) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: opts.before || 0, after: opts.after || 0 },
    border: opts.rule ? { bottom: { style: BorderStyle.SINGLE, size: 12, color: ROOD_DIEP, space: 10 } } : undefined,
    indent: opts.rule ? { left: 3200, right: 3200 } : undefined,
    children: [new TextRun({
      text,
      font: opts.font || BODY,
      size: opts.size || 22,
      bold: opts.bold || false,
      italics: opts.italics || false,
      color: opts.color || ANTRACIET,
    })],
  });
}

// ---------- extra helpers (La Duna rapporten) ----------
function coverCard(label, value, sublabel, color) {
  return new TableCell({
    width: { size: 3120, type: WidthType.DXA },
    borders: { top: { style: BorderStyle.SINGLE, size: 6, color: BORDER }, bottom: { style: BorderStyle.SINGLE, size: 6, color: BORDER }, left: { style: BorderStyle.SINGLE, size: 6, color: BORDER }, right: { style: BorderStyle.SINGLE, size: 6, color: BORDER } },
    margins: { top: 300, bottom: 300, left: 120, right: 120 },
    verticalAlign: VerticalAlign.CENTER,
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: label, font: MONO, size: 17, bold: true, color: GRAY })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: String(value), font: DISPLAY, size: 72, bold: true, color })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: sublabel, font: BODY, size: 18, italics: true, color: GRAY })] }),
    ],
  });
}
function cover({ subject, docType, variant, cards, dateLabel }) {
  const out = [
    ...whiteSpacer(12),
    coverLine(subject, { size: 60, bold: true, font: DISPLAY, after: 60 }),
    coverLine('', { size: 2, rule: true, after: 260 }),
    coverLine(docType, { size: 30, font: DISPLAY, color: '6E6E71', after: 300 }),
    coverLine(variant, { size: 28, bold: true, font: MONO, after: 520 }),
  ];
  if (cards) out.push(new Table({ width: { size: CW, type: WidthType.DXA }, columnWidths: [3120, 3120, 3120], layout: TableLayoutType.FIXED,
    rows: [new TableRow({ cantSplit: true, children: cards.map((c) => coverCard(...c)) })] }));
  out.push(...whiteSpacer(cards ? 11 : 20),
    coverLine(dateLabel, { size: 16, font: MONO, color: GRAY, after: 80 }),
    coverLine('B. ANALYZED MARKETING', { size: 16, font: MONO, bold: true, color: ROOD_DIEP }));
  return out;
}
function box(text) {
  return new Table({ width: { size: CW, type: WidthType.DXA }, columnWidths: [CW], layout: TableLayoutType.FIXED,
    rows: [new TableRow({ cantSplit: true, children: [new TableCell({ width: { size: CW, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: SECTION_BG, color: 'auto' }, borders: noBorders,
      margins: { top: 240, bottom: 240, left: 240, right: 240 },
      children: (Array.isArray(text) ? text : [text]).map((t, i, a) => new Paragraph({ spacing: { after: i < a.length - 1 ? 120 : 0 }, children: [new TextRun({ text: t, font: BODY, size: 22, color: DARK })] })) })] })] });
}
// generieke tabel: rows = array van arrays met strings of {text, fill, color, bold, align}
function table(headers, widths, rows, opts = {}) {
  const size = opts.size || 20;
  return new Table({ width: { size: CW, type: WidthType.DXA }, columnWidths: widths, layout: TableLayoutType.FIXED,
    rows: [
      new TableRow({ cantSplit: true, tableHeader: true, children: headers.map((l, i) => cell(l, widths[i], { fill: INK, color: 'FFFFFF', bold: true, font: DISPLAY, size, align: i >= (opts.centerFrom ?? 99) ? AlignmentType.CENTER : AlignmentType.LEFT })) }),
      ...rows.map((r, ri) => new TableRow({ cantSplit: true, children: r.map((c, i) => {
        const o = typeof c === 'object' && c !== null ? c : { text: c };
        return cell(String(o.text ?? ''), widths[i], { size, fill: o.fill || (ri % 2 ? ROW_ALT : undefined), color: o.color, bold: o.bold || (i === 0 && opts.boldFirst),
          align: o.align || (i >= (opts.centerFrom ?? 99) ? AlignmentType.CENTER : AlignmentType.LEFT) });
      }) })),
    ] });
}
function spacer() { return new Paragraph({ spacing: { after: 120 }, children: [] }); }
function makeDoc({ subject, headerTitle, coverChildren, bodyChildren }) {
  const page = { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440, header: 720, footer: 720 } };
  return new Document({
    styles: { default: { document: { run: { font: BODY, size: 21, color: ANTRACIET } } } },
    numbering: { config: [{ reference: 'bullets', levels: [{ level: 0, format: 'bullet', text: '\u2022', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 460, hanging: 260 } } } }] }] },
    sections: [
      { properties: { page }, children: coverChildren },
      { properties: { page },
        headers: { default: new Header({ children: [new Paragraph({ tabStops: [{ type: TabStopType.RIGHT, position: CW }], border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: ROOD_DIEP, space: 6 } },
          children: [new TextRun({ text: subject, font: MONO, size: 17, bold: true, color: ROOD_DIEP }), new TextRun({ children: [new Tab(), headerTitle], font: MONO, size: 16, color: GRAY })] })] }) },
        footers: { default: new Footer({ children: [new Paragraph({ tabStops: [{ type: TabStopType.RIGHT, position: CW }], border: { top: { style: BorderStyle.SINGLE, size: 6, color: BORDER, space: 6 } },
          children: [new TextRun({ text: 'B. ANALYZED MARKETING', font: MONO, size: 16, bold: true, color: ROOD_DIEP }), new TextRun({ children: [new Tab(), PageNumber.CURRENT], font: MONO, size: 16, color: GRAY })] })] }) },
        children: bodyChildren },
    ],
  });
}
module.exports = { Packer, Paragraph, TextRun, PageBreak, AlignmentType, h1, h2, sub, body, bullet, box, table, spacer, cover, makeDoc,
  GREEN, AMBER, RED, GRAY, ROOD_LICHT, ROW_ALT, fs };
