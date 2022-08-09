//let idadeDependente = 15

//aninhado

/*if(idadeDependente >= 13 ){
    if(idadeDependente >= 18){
        console.log("O seu dependente já pode ter o ct de c próprio");
    } else{
        console.log("O seu dependente já pode ter o ct de c vinculado ao seu");
    }
} else{
    console.log("Consulte outras possi. do labenk");
};

//md lógico

if(idadeDependente >= 13 && idadeDependente <= 17){
    console.log("O seu dependente já pode ter o ct de c vinculado ao seu")
};

//md ternário

idadeDependente === 13 ? console.log("A idade do dependente é 13 e já pode ter um ct") : console.log("Consulte outras possib. do labenk.");
*/

//swich case

/*let cartoes = Number(prompt("Escolha o cartão que deseja solicitar:\n 1-Fácil \n 2-Brack \n 3-Platinum \n 4-Master gold"));

switch(cartoes) {
    case 1:
        console.log("Cartão fácil");
        break
    case 2:
        console.log("Cartão Black");
        break
    case 3:
        console.log("Cartão Platinum");
        break
    case 4:
        console.log("Cartão Master Gold");
        break
    default:
        console.log("escolha umas das opções disponíveis");
};
*/

//Atividade:

let number = Number(prompt("Escolha um número"));

if(number%2==0){
    if(number%3==0){
        console.log(`O ${number} é divisível por 2 epor 3`)
    }else{
        console.log(`O ${number} é divisível por 2`)
    }
}else{
    console.log('Não são divisiveis por 2.');
};

if(number%2==0 && number%3==0){
    
    console.log(`O ${number} será sortiado`);

switch(number){
    case 6:
        console.log(`Você acertou um dos números premiados: ${number}`)
        break;
    case 12:
        console.log(`Você acertou um dos números premiados: ${number}`)
            break;
    case 18:
        console.log(`Você acertou um dos números premiados: ${number}`)
        break;
    case 24:
        console.log(`Você acertou um dos números premiados: ${number}`)
        break;
    case 30:
        console.log(`Você acertou um dos números premiados: ${number}`)
        break;
    default:
        console.log(`O número é menor que 6 ou maior que 30...`);
}
};

