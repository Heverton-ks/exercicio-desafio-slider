const saibaMais = document.querySelector(".link");

const btnSetaDireita = document.querySelector(".seta-direita");

const btnSetaEsquerda = document.querySelector(".seta-esquerda");
    btnSetaEsquerda.classList.add("opacidade");

const imagemFundo = document.querySelector("body");
imagemFundo.classList.add("fundo1");

    btnSetaDireita.addEventListener('click', () => {
		
        if(saibaMais.classList.contains('vermelho')){
            saibaMais.classList.remove("vermelho");
            saibaMais.classList.add("amarelo");
            btnSetaEsquerda.classList.remove("opacidade")
            imagemFundo.classList.add("fundo2");
        } else if(saibaMais.classList.contains('amarelo')){
            saibaMais.classList.remove("amarelo");
            saibaMais.classList.add("marrom");
            imagemFundo.classList.add("fundo3");
        } else if(saibaMais.classList.contains('marrom')){
            saibaMais.classList.remove("marrom");
            saibaMais.classList.add("azul");
            btnSetaDireita.classList.add("opacidade");
            imagemFundo.classList.add("fundo4");
        }
    });

    btnSetaEsquerda.addEventListener('click', () => {
            
        if(saibaMais.classList.contains('azul')){
            saibaMais.classList.remove("azul");
            saibaMais.classList.add("marrom");
            btnSetaDireita.classList.remove("opacidade")
            imagemFundo.classList.remove("fundo4");
            imagemFundo.classList.add("fundo3");
        } else if(saibaMais.classList.contains('marrom')){
            saibaMais.classList.remove("marrom");
            saibaMais.classList.add("amarelo");
            imagemFundo.classList.remove("fundo3");
            imagemFundo.classList.add("fundo2");
        } else if(saibaMais.classList.contains('amarelo')){
            saibaMais.classList.remove("amarelo");
            saibaMais.classList.add("vermelho");
            btnSetaEsquerda.classList.add("opacidade");
            imagemFundo.classList.remove("fundo2");
            imagemFundo.classList.add("fundo1");
        } 
    });

   
