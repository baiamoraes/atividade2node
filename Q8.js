const axios = require('axios');

async function API() {
  const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/3",
  ];

  for (const url of urls) {
    try {
      const response = await axios.get(url);
      console.log("API na ${url} bem-sucedida!");
    } catch (error) {
      console.error("Erro na chamada de API para ${url}: ${error.message}");
    }
  }
}

API();