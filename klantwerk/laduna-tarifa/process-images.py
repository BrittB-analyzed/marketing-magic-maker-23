# Zet foto's in photos/ om naar responsive WebP (640/1024/1600) + OG-afbeeldingen. Run: python process-images.py
from pathlib import Path
from PIL import Image, ImageOps
import pillow_heif; pillow_heif.register_heif_opener()
root = Path(__file__).parent
out = root / 'src/assets/img'; out.mkdir(parents=True, exist_ok=True)
for f in sorted((root / 'photos').iterdir()):
    im = ImageOps.exif_transpose(Image.open(f)).convert('RGB')
    for w in (640, 1024, 1600):
        if w > im.width and w != 640: continue
        r = im.copy(); r.thumbnail((w, 10_000), Image.LANCZOS)
        r.save(out / f'{f.stem}-{w}.webp', 'WEBP', quality=72, method=6)
    og = ImageOps.fit(im, (1200, 630), Image.LANCZOS, centering=(0.5, 0.45))
    og.save(out / f'{f.stem}-og.jpg', 'JPEG', quality=80, optimize=True, progressive=True)
    print(f.stem, im.size)
