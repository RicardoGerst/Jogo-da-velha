const casas = document.getElementsByTagName('input');
const b_reiniciar = document.getElementById('reiniciar');
const label_jogador = document.getElementById('jogador'); 

var jogador = '_'; //Define o jogador atual (_ = jogador indefinido; X = jogador X, O = jogador O)
var vencedor = '_'; //Define se há um vencedor ou não (_ = indefinido; X = jogador X, O = jogador O) 


for(var i=0;i<9;i++) {
    casas[i].addEventListener('click', (event) => {
        //se a casa estiver vazia e ninguém tiver vencido a partida
        if( (event.target.value=='_') && (vencedor=='_')) {
            event.target.value=jogador; //preenche a casa com X ou O
            event.target.style.color='black'; //torna o valor da casa visível

            trocarJogador(); //função que troca a vez do jogador, a ser definida depois

            vencedor = vitoria(); //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.

            //se o vencedor existe, imprime
            if(vencedor!='_') {
                label_jogador.innerText=`${vencedor} venceu!`;
            
            }
        }
    });
}

b_reiniciar.addEventListener('click', (event) => {
    for(var i=0;i<9;i++) {
        casas[i].value='_'; //Limpa todas as casas
        casas[i].style.color='white'; //Torna o valor _ invisível
        casas[i].style.backgroundColor='white'; //Torna o fundo branco
    }

    vencedor = '_'; //Reseta o vencedor

});

var trocarJogador = function() {
    if(jogador=='X') {
        jogador='O';
        label_jogador.innerText='O';
        label_jogador.style.color='#F00';
    
    }else{
        jogador='X';
        label_jogador.innerText='X';
        label_jogador.style.color='#00F';
    }
}

var vitoria = function() {
    if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) {

        return casas[0].value;

    }else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) {

        return casas[3].value;

    }else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {

        return casas[6].value;

    }else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {

        return casas[0].value;

    }else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {

        return casas[1].value;

    }else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {

        return casas[2].value;
    }else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {

        return casas[0].value;

    }else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
        
        return casas[2].value;
    }

    return '_';
}