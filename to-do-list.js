const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefas = [];

function main(){
    console.log("\n\nBEM VINDO A SUA LISTA DE TAREFA PELO NODE.JS\n\n");
    menu();
}

function menu(){
    console.log("\n\n(1) Vizualizar tarefas.");
    console.log("\n(2) Criar Tarefa.");
    console.log("\n(3) Sair.");
    readline.question("\nO que você deseja?:", (usuariofazer) => {
        switch(usuariofazer){
            case '1':
                vizualizartarefa();
            break;
            case '2':
                criartarefa();
            break;
            case '3':
                readline.close();
            break;
            default:
                console.log("\nInsira uma opção válida");
                menu();
        }
    });
}

function criartarefa(){
    readline.question("\n\nQual será o nome da sua TAREFA?:", (tarefa) => {
        tarefas.push(tarefa);
        console.log("\nA sua tarefa:", tarefa," foi adicionada");
        menu();
    });
}

function vizualizartarefa(){
    console.log("\n\nSUAS TAREFAS:");
    tarefas.forEach((tarefas, index) => {
        console.log(`\n${index + 1}. ${tarefas}`)
    });
    readline.question("\n\n(1) Concluir tarefa.\n(2) Retornar pro MENU.\n(3) Sair.", (opcao) => {
        switch(opcao){
            case '1':
                concluirtarefa();
            break;
            case '2':
                menu();
            break;
            case '3':
                readline.close();
            break;
            default:
                console.log("Insira uma opçaõ correta");
            break;
        }
    })
    menu();
}

function concluirtarefa(){
    readline.question("Qual tarefa você concluiu (insira o o número)?:", (concluir) => {
        const index = parseInt(concluir) - 1;
        if(index >= 0 && index < tarefas.length){
            console.log(`A tarefa "${tarefas[index]}" foi concluída.`);
            tarefas.splice(index, 1);
        }else{
            console.log("Insira o número da tarefa");
            concluirtarefa();
        }
        vizualizartarefa();
    });
}

main();