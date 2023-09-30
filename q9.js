async function delay(tempo){
    console.log('Olá')
    await new Promise(resolve => setTimeout(resolve,tempo))
    console.log("Depois de 2 segundos")
}

delay(2000)