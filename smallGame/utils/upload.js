const fs =  require('fs')
const path =  require('path');

module.exports =function (file) {
  const reader = fs.createReadStream(file.path);
  let timestamp = new Date().getTime();
  let filePath = path.join(__dirname, '../uploads') + `/${timestamp}`+'.jpeg';
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  return `${timestamp}`+'.jpeg';
}
