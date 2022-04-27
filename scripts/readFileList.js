const { resolve } = require('path');
const { existsSync, lstatSync, readdirSync } = require('fs');

function readFileList(path) {
  const fileList = [];
  const dirPath = resolve(`./docs/${path}/`);
  const isDir = existsSync(dirPath) && lstatSync(dirPath).isDirectory();
  if (!isDir) {
    return fileList;
  }
  const files = readdirSync(dirPath);
  files.forEach((item) => {
    if (item !== 'README.md' && item !== '.DS_St') {
      let currentFile = item.slice(0, -3)
      // fileList.push([
      //   `/${path}/${currentFile}`,
      //   currentFile
      // ]);
      fileList.push({
        text: currentFile,
        link: `/${path}/${currentFile}.md`,
      });
    }
  });
  return fileList.reverse();
}

module.exports = readFileList;
