const fs = require('fs');
const { execSync } = require('child_process');

const targets = [
  { name: 'shunji', file: 'public/assets/test_crops/shunji_area.png', out: 'src/assets/team/shunji.png', cx: 295, cy: 300, r: 160 },
  { name: 'michael-adams', file: 'public/assets/test_crops/michael-adams_area.png', out: 'src/assets/team/michael-adams.png', cx: 300, cy: 308, r: 165 },
  { name: 'torsten-thiele', file: 'public/assets/test_crops/torsten-thiele_area.png', out: 'src/assets/team/torsten-thiele.png', cx: 300, cy: 303, r: 160 },
  { name: 'mirabelle-adams', file: 'public/assets/test_crops/mirabelle-adams_area.png', out: 'src/assets/team/mirabelle-adams.png', cx: 308, cy: 322, r: 165 },
  { name: 'peter-yu', file: 'public/assets/test_crops/peter-yu_area.png', out: 'src/assets/team/peter-yu.png', cx: 306, cy: 292, r: 160 },
];

targets.forEach(t => {
  const cropSize = t.r * 2;
  const cropX = t.cx - t.r;
  const cropY = t.cy - t.r;

  const maskFile = `/tmp/${t.name}_mask.png`;
  execSync(`convert -size ${cropSize}x${cropSize} xc:none -fill white -draw "circle ${t.r},${t.r} ${t.r},0" ${maskFile}`);

  const squareCrop = `/tmp/${t.name}_square.png`;
  execSync(`convert ${t.file} -crop ${cropSize}x${cropSize}+${cropX}+${cropY} +repage ${squareCrop}`);

  // Composite mask as alpha channel and output high-res 400x400
  execSync(`convert ${squareCrop} ${maskFile} -alpha off -compose CopyOpacity -composite -resize 400x400 ${t.out}`);
  console.log(`Saved pristine ${t.name} to ${t.out}`);
});
