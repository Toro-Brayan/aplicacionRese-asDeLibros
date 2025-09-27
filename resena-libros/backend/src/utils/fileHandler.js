const fs = require('fs');
const path = require('path');

function readJSON(file) {
  const filePath = path.join(__dirname, '../data', file);
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function writeJSON(file, data) {
  const filePath = path.join(__dirname, '../data', file);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readJSON, writeJSON };
