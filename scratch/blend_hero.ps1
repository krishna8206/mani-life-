Add-Type -AssemblyName System.Drawing

$cleanBgPath = "$PSScriptRoot\..\public\images\mani-hero-clean-bg.jpg"
$productPath = "$PSScriptRoot\..\public\images\mani-hero-product-display.jpg"
$outputPath = "$PSScriptRoot\..\public\images\mani-hero-master-backdrop.jpg"

$bgBitmap = [System.Drawing.Bitmap]::FromFile($cleanBgPath)
$prodBitmap = [System.Drawing.Bitmap]::FromFile($productPath)

$targetW = 1920
$targetH = 1080

$canvas = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($canvas)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# 1. Draw base clean background scaled to full canvas (fills 1920x1080 with travertine wall & shadows)
$g.DrawImage($bgBitmap, 0, 0, $targetW, $targetH)

# 2. Scale product bitmap with generous 220px headroom and 40px right padding
# Height is 820px (so from y=200 to y=1020). Top 200px is 100% clean sunlit wall!
$prodH = 820
$prodW = [int]($prodH * (1024.0 / 853.0)) # ~984px
$prodX = $targetW - $prodW - 40
$prodY = 200 # 200px headroom from top

$scaledProd = New-Object System.Drawing.Bitmap($prodW, $prodH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gp = [System.Drawing.Graphics]::FromImage($scaledProd)
$gp.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gp.DrawImage($prodBitmap, 0, 0, $prodW, $prodH)
$gp.Dispose()

# 3. Draw solid portion of scaled product
$fadeWidth = 240
$solidSrcX = $fadeWidth
$solidSrcW = $prodW - $fadeWidth
$solidDestX = $prodX + $fadeWidth

if ($solidSrcW -gt 0) {
    $srcRect = New-Object System.Drawing.Rectangle($solidSrcX, 0, $solidSrcW, $prodH)
    $destRect = New-Object System.Drawing.Rectangle($solidDestX, $prodY, $solidSrcW, $prodH)
    $g.DrawImage($scaledProd, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
}

# 4. Blend the fade strip smoothly
for ($y = 0; $y -lt $prodH; $y += 2) {
    $destY = $prodY + $y
    if ($destY -lt $targetH) {
        for ($x = 0; $x -lt $fadeWidth; $x += 2) {
            $destX = $prodX + $x
            if ($destX -ge 0 -and $destX -lt $targetW) {
                $pColor = $scaledProd.GetPixel($x, $y)
                $bColor = $canvas.GetPixel($destX, $destY)

                $t = [double]$x / [double]$fadeWidth
                $alpha = $t * $t * (3.0 - 2.0 * $t)

                $r = [int](($pColor.R * $alpha) + ($bColor.R * (1.0 - $alpha)))
                $g_c = [int](($pColor.G * $alpha) + ($bColor.G * (1.0 - $alpha)))
                $b = [int](($pColor.B * $alpha) + ($bColor.B * (1.0 - $alpha)))

                $color = [System.Drawing.Color]::FromArgb(255, $r, $g_c, $b)
                $canvas.SetPixel($destX, $destY, $color)
                if ($destX + 1 -lt $targetW) { $canvas.SetPixel($destX + 1, $destY, $color) }
                if ($destY + 1 -lt $targetH) {
                    $canvas.SetPixel($destX, $destY + 1, $color)
                    if ($destX + 1 -lt $targetW) { $canvas.SetPixel($destX + 1, $destY + 1, $color) }
                }
            }
        }
    }
}

$scaledProd.Dispose()
$g.Dispose()
$bgBitmap.Dispose()
$prodBitmap.Dispose()

# Save high-quality JPEG
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)
$canvas.Save($outputPath, $jpegCodec, $encoderParams)
$canvas.Dispose()

Write-Output "Successfully blended master backdrop with 200px headroom and 40px right margin to $outputPath"
