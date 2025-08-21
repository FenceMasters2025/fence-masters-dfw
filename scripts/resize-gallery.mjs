import fs from "fs";
import path from "path";
import sharp from "sharp";

const srcDir = "public/gallery/originals";
const outDir = "public/gallery";
const sizes = [400, 800, 1200, 1600]; // widths in px
const quality = 72; // webp quality (good balance)

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f =>
  /\.(jpe?g|png)$/i.test(f)
);

for (const file of files) {
  const base = path.parse(file).name;
  for (const w of sizes) {
    const outPath = path.join(outDir, `${base}-${w}.webp`);
    // Skip if already exists
    if (fs.existsSync(outPath)) continue;
    await sharp(path.join(srcDir, file))
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality, effort: 4 })
      .toFile(outPath);
    console.log("wrote", outPath);
  }
}
console.log("✓ all done");