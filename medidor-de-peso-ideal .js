const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function main(){
    console.log("Seja bem vindo ao seu MEDIDOR DE IMC.");
    console.log("\nAqui iremos medir se você está no peso IDEAL");
    readline.question("\n\nQual é o seu nome?:", (usuario) => {
        pesouser((peso) => {
            alturauser((altura) => {
                let alturax2 = altura * altura;
                let imc = peso / alturax2;

                console.log("Olá", usuario,"seu IMC é:", imc);
                readline.close();
            })  
        })
    })
}

function pesouser(callback){
    readline.question("Qual é seu peso em KG?:", (peso) => {
        callback(parseFloat(peso));
    })
}

function alturauser(callback){
    readline.question("Qual é sua altura em Metros?:", (altura) => {
        callback(parseFloat(altura));
    })
}

main();