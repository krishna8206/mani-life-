Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\..\public\images\mani-hero-reference.jpg")
$c1 = $img.GetPixel(30, 30)
$c2 = $img.GetPixel(30, 200)
$c3 = $img.GetPixel(250, 150)
$c4 = $img.GetPixel(400, 200)
$c5 = $img.GetPixel(30, 540)
$img.Dispose()
Write-Output "Ref TopLeft (30,30): Hex: #$($c1.R.ToString('X2'))$($c1.G.ToString('X2'))$($c1.B.ToString('X2'))"
Write-Output "Ref MidLeft (30,200): Hex: #$($c2.R.ToString('X2'))$($c2.G.ToString('X2'))$($c2.B.ToString('X2'))"
Write-Output "Ref CenterLeft (250,150): Hex: #$($c3.R.ToString('X2'))$($c3.G.ToString('X2'))$($c3.B.ToString('X2'))"
Write-Output "Ref NearProduct (400,200): Hex: #$($c4.R.ToString('X2'))$($c4.G.ToString('X2'))$($c4.B.ToString('X2'))"
Write-Output "Ref BottomLeft (30,540): Hex: #$($c5.R.ToString('X2'))$($c5.G.ToString('X2'))$($c5.B.ToString('X2'))"
