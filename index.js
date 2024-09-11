const saibaMais = document.querySelector(".link");

const btnSetaDireita = document.querySelector(".seta-direita");

const btnSetaEsquerda = document.querySelector(".seta-esquerda");
    btnSetaEsquerda.classList.add("opacidade");

const imagemFundo = document.querySelector("body");
imagemFundo.classList.add("fundo1");

    btnSetaDireita.addEventListener('click', () => {
		
        if(imagemFundo.classList.contains('fundo1')){
            btnSetaEsquerda.classList.remove("opacidade")
            imagemFundo.classList.remove("fundo1");
            imagemFundo.classList.add("fundo2");
        } else if(imagemFundo.classList.contains('fundo2')){ 
            imagemFundo.classList.remove("fundo2");
            imagemFundo.classList.add("fundo3");
        } else if(imagemFundo.classList.contains('fundo3')){

            btnSetaDireita.classList.add("opacidade");
            imagemFundo.classList.remove("fundo3");
            imagemFundo.classList.add("fundo4");
        }
    });

    btnSetaEsquerda.addEventListener('click', () => {
            
        if(imagemFundo.classList.contains('fundo4')){
            btnSetaDireita.classList.remove("opacidade")
            imagemFundo.classList.remove("fundo4");
            imagemFundo.classList.add("fundo3");
        } else if(imagemFundo.classList.contains('fundo3')){

            imagemFundo.classList.remove("fundo3");
            imagemFundo.classList.add("fundo2");
        } else if(imagemFundo.classList.contains('fundo2')){
            btnSetaEsquerda.classList.add("opacidade");
            imagemFundo.classList.remove("fundo2");
            imagemFundo.classList.add("fundo1");
        } 
    });

   
