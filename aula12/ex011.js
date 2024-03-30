var idade = 22
console.log (`Você tem ${idade} anos.`)/*console.log = para ser exibido no node.js. document.write = mostra no html*/
if (idade < 16) {
    console.log ('Não vota!!!')
} else if (idade < 18 || idade > 65) {
        console.log ('Voto opcional!!!')
 }else {
    console.log ('Voto obrigatório!!!')
 }
