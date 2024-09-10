const saibaMais = document.querySelector(".link");

const btnSetaDireita = document.querySelector(".seta-direita");

const btnSetaEsquerda = document.querySelector(".seta-esquerda");
    btnSetaEsquerda.classList.add("opacidade");

let tituloBox = document.querySelector(".titulo");
        tituloBox.innerHTML =`Titulo imagem 1`;

const imagemFundo = document.querySelector("body");
console.log(imagemFundo)
imagemFundo.classList.add("fundo1");

    btnSetaDireita.addEventListener('click', () => {
		
        if(saibaMais.classList.contains('vermelho')){
            saibaMais.classList.remove("vermelho");
            saibaMais.classList.add("amarelo");
            btnSetaEsquerda.classList.remove("opacidade")
            tituloBox.innerHTML =`Titulo imagem 2`;
            imagemFundo.classList.add("fundo2");
        } else if(saibaMais.classList.contains('amarelo')){
            saibaMais.classList.remove("amarelo");
            saibaMais.classList.add("marrom");
            tituloBox.innerHTML =`Titulo imagem 3`;
            imagemFundo.classList.add("fundo3");
        } else if(saibaMais.classList.contains('marrom')){
            saibaMais.classList.remove("marrom");
            saibaMais.classList.add("azul");
            btnSetaDireita.classList.add("opacidade");
            tituloBox.innerHTML =`Titulo imagem 4`;
            imagemFundo.classList.add("fundo4");
        }
    });

    btnSetaEsquerda.addEventListener('click', () => {
            
        if(saibaMais.classList.contains('azul')){
            saibaMais.classList.remove("azul");
            saibaMais.classList.add("marrom");
            btnSetaDireita.classList.remove("opacidade")
            tituloBox.innerHTML =`Titulo imagem 3`;
            imagemFundo.classList.remove("fundo4");
            imagemFundo.classList.add("fundo3");
        } else if(saibaMais.classList.contains('marrom')){
            saibaMais.classList.remove("marrom");
            saibaMais.classList.add("amarelo");
            tituloBox.innerHTML =`Titulo imagem 2`;
            imagemFundo.classList.remove("fundo3");
            imagemFundo.classList.add("fundo2");
        } else if(saibaMais.classList.contains('amarelo')){
            saibaMais.classList.remove("amarelo");
            saibaMais.classList.add("vermelho");
            btnSetaEsquerda.classList.add("opacidade");
            tituloBox.innerHTML =`Titulo imagem 1`;
            imagemFundo.classList.remove("fundo2");
            imagemFundo.classList.add("fundo1");
        } 
    });

   
