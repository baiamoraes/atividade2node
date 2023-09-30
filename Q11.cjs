const fs = require('fs').promises;
const path = require('path');

async function Sub(caminho) {
  try {
    const items = await fs.readdir(caminho);
    const subdirectories = [];

    await Promise.all(
      items.map(async (item) => {
        const itemPath = path.join(caminho, item);
        const stats = await fs.stat(itemPath);

        if (stats.isDirectory()) {
          subdirectories.push(item);
        }
      })
    );

    return subdirectories;
  } catch (err) {
    throw err;
  }
}

Sub('./files')
  .then((subdirectories) => {
    console.log('Subdiretórios:', subdirectories);
  })
  .catch((err) => {
    console.error('Erro ao obter subdiretórios:', err);
  });
