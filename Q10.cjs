const fs = require('fs');

function readdirPromise(caminho) {
  return new Promise((resolve, reject) => {
    fs.readdir(caminho, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}
readdirPromise('./files')
  .then((files) => {
    console.log('Conteúdo do diretório:', files);
  })
  .catch((err) => {
    console.error('Erro ao ler o diretório:', err);
  });
