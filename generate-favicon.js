const fs = require('fs');
const path = require('path');
const jpeg = require('jpeg-js');
const { PNG } = require('pngjs');

const inputPath = path.join(__dirname, 'src', 'assets', 'flavorStory.jpeg');
const outputPath = path.join(__dirname, 'src', 'assets', 'favicon.ico');
const size = 128;

if (!fs.existsSync(inputPath)) {
  console.error('Input image not found:', inputPath);
  process.exit(1);
}

function resizeNearest(src, srcWidth, srcHeight, dstWidth, dstHeight) {
  const dst = Buffer.alloc(dstWidth * dstHeight * 4);
  for (let y = 0; y < dstHeight; y += 1) {
    const srcY = Math.min(srcHeight - 1, Math.floor((y * srcHeight) / dstHeight));
    for (let x = 0; x < dstWidth; x += 1) {
      const srcX = Math.min(srcWidth - 1, Math.floor((x * srcWidth) / dstWidth));
      const srcIdx = (srcY * srcWidth + srcX) * 4;
      const dstIdx = (y * dstWidth + x) * 4;
      dst[dstIdx] = src[srcIdx];
      dst[dstIdx + 1] = src[srcIdx + 1];
      dst[dstIdx + 2] = src[srcIdx + 2];
      dst[dstIdx + 3] = src[srcIdx + 3];
    }
  }
  return dst;
}

function buildIco(pngBuffer, width, height) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(width === 256 ? 0 : width, 0);
  entry.writeUInt8(height === 256 ? 0 : height, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(6 + 16, 12);

  return Buffer.concat([header, entry, pngBuffer]);
}

const jpegBuffer = fs.readFileSync(inputPath);
const decoded = jpeg.decode(jpegBuffer, { useTArray: true });
const rgba = decoded.width === size && decoded.height === size
  ? decoded.data
  : resizeNearest(decoded.data, decoded.width, decoded.height, size, size);

const png = new PNG({ width: size, height: size });
png.data = rgba;
const pngBuffer = PNG.sync.write(png);
const icoBuffer = buildIco(pngBuffer, size, size);
fs.writeFileSync(outputPath, icoBuffer);
console.log('Created favicon at', outputPath);
