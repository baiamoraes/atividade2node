async function numeroChave() {
    const valor = 16; // número chave para a promessa ser cumprida
  
    try {
      const verifica = async () => {
        switch (valor) {
          case 15:
            return "Número chave aceito";
  
          default:
            return "Número chave errado";
        }
      };
  
      const resultado = await verifica();
      console.log(resultado);
    } catch (error) {
      console.error("Erro", error.message);
    }
  }
  
  numeroChave();
  