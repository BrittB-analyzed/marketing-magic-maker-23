param([string]$in)
$w = New-Object -ComObject Word.Application; $w.Visible = $false
$full = (Resolve-Path $in).Path; $pdf = [IO.Path]::ChangeExtension($full, '.pdf')
$d = $w.Documents.Open($full, $false, $true); $d.SaveAs([ref]$pdf, [ref]17); $d.Close($false); $w.Quit(); $pdf
