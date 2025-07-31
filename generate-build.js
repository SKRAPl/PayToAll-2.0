const fs = require('fs');
const path = require('path');

// Генерация timestamp'а
const buildInfo = {
  buildId: Date.now().toString(),
};

// Записываем в build.json рядом с index.html
const outputPath = path.join(__dirname, 'build.json');
fs.writeFileSync(outputPath, JSON.stringify(buildInfo, null, 2));

console.log(`✅ build.json создан: ${buildInfo.buildId}`);
