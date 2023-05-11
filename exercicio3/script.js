const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(novaFrase)
console.log("A frase inclui a palavra verde?", novaFrase.includes("verde"))
console.log("A frase inclui a palavra laranja?", novaFrase.includes("laranja"))