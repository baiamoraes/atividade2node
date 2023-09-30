function verificaTempo(tempo) {
    return new Promise((resolve, rejeita) => {
      setTimeout(() => {
        rejeita(new Error(`A Promise foi rejeitada após ${tempo}ms.`));
      }, tempo);
    });
  }
  
  const tempoEspera = 2000; 
  
  verificaTempo(tempoEspera)
    .then(() => {
      console.log("A Promise foi resolvida.");
    })
    .catch((error) => {
      console.error(error.message); 
    });
  