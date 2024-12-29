const fs = require('fs');
const path = require('path');

const folderPath = './images';
const outputJsonPath = 'gemstones.json';

fs.readdir(folderPath, (err, items) => {
  if (err) {
    return console.error('Error reading directory:', err);
  }

  // Filter out directories and remove extensions
  const filenamesWithoutExt = items
    .filter(item => fs.statSync(path.join(folderPath, item)).isFile())
    .map(item => path.parse(item).name); // path.parse(file).name => basename without extension

  // Save result to JSON
  fs.writeFileSync(
    outputJsonPath,
    JSON.stringify(filenamesWithoutExt, null, 2),
    'utf8'
  );

  console.log(`Saved filenames (without extensions) to ${outputJsonPath}`);
});
