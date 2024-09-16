const btnSetaDireita = document.querySelector(".seta-direita");

const btnSetaEsquerda = document.querySelector(".seta-esquerda");
btnSetaEsquerda.classList.add("opacidade");

const imagemFundo = document.querySelector("body");
imagemFundo.classList.add("fundo1");

const mostrarCaixa = document.querySelectorAll(".caixa");

btnSetaDireita.addEventListener('click', () => {

    if (imagemFundo.classList.contains('fundo1')) {
        btnSetaEsquerda.classList.remove("opacidade")
        imagemFundo.classList.remove("fundo1");
        imagemFundo.classList.add("fundo2");
        mostrarCaixa[0].classList.remove("mostrar");
        mostrarCaixa[1].classList.add("mostrar");
    } else if (imagemFundo.classList.contains('fundo2')) {
        imagemFundo.classList.remove("fundo2");
        imagemFundo.classList.add("fundo3");
        mostrarCaixa[1].classList.remove("mostrar");
        mostrarCaixa[2].classList.add("mostrar");
    } else if (imagemFundo.classList.contains('fundo3')) {
        btnSetaDireita.classList.add("opacidade");
        imagemFundo.classList.remove("fundo3");
        imagemFundo.classList.add("fundo4");
        mostrarCaixa[2].classList.remove("mostrar");
        mostrarCaixa[3].classList.add("mostrar");
    }
});

btnSetaEsquerda.addEventListener('click', () => {

    if (imagemFundo.classList.contains('fundo4')) {
        btnSetaDireita.classList.remove("opacidade")
        imagemFundo.classList.remove("fundo4");
        imagemFundo.classList.add("fundo3");
        mostrarCaixa[3].classList.remove("mostrar");
        mostrarCaixa[2].classList.add("mostrar");
    } else if (imagemFundo.classList.contains('fundo3')) {
        imagemFundo.classList.remove("fundo3");
        imagemFundo.classList.add("fundo2");
        mostrarCaixa[2].classList.remove("mostrar");
        mostrarCaixa[1].classList.add("mostrar");
    } else if (imagemFundo.classList.contains('fundo2')) {
        btnSetaEsquerda.classList.add("opacidade");
        imagemFundo.classList.remove("fundo2");
        imagemFundo.classList.add("fundo1");
        mostrarCaixa[1].classList.remove("mostrar");
        mostrarCaixa[0].classList.add("mostrar");
    }
});


