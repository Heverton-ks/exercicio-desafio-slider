## Bem-vindo(a) ao meu perfil

 <div>
   <img height="180em" src="https://github-readme-stats.vercel.app/api?username=heverton-ks&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"/>
   <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=heverton-ks&layout=compact&langs_count=6&theme=tokyonight"/>
</div>
    
<div style="display: inline_block"><br>
    <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
    <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
    <img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
</div>
 
<br>

## Sobre

Este é um exercício que realizei no meu curso de desenvolvimento front-end. 
Apesar de ter construído o site de forma a atender os requisitos do enunciado, algumas melhorias preciam ser realizadas, assim sendo decidi subir o código para um repositório e atualiza-lo.

### Exercício proposto 

Crie um carrossel (slider) de imagens

  * O slider possui uma seta a esquerda e outra
    a direita que servem pra passar ou voltar a
    imagem.

  * Quando for a primeira imagem, a seta da
    esquerda deve ficar com uma opacidade e
    sem clique.

  * Quando for a última imagem, a seta da
    direita deve ficar com uma opacidade e sem
    clique.


### Desenvolvimento

O primeiro problema notado após a construção do site, foi que era usado uma única caixa com informações. Nela, apenas o título e a cor do link "Saiba Mais" eram alterados ao passar os slides, matendo sempre o mesmo texto e o mesmo link. Dessa forma se fossem inseridos dados reais esse código não iria servir.

Para corrigir o problema, criei no arquivo html uma caixa para cada página e organizei-as utilizando o css de forma que ficassem sobrepostas. Ao passar os slides a opacidade delas alterava para ficar visível apenas a caixa correspondente a cada tela. Porém o link clicável do "Saiba Mais" permanecia sendo o da última tela, afinal ele é quem estava realmente "na frente" de todas as outras, mesmo quando não estava visível. 

Resolvi esse outro problema utilizando o "position", o "z-index" e uma função no javascript. Assim, pude alterar a ordem da caixa mais a "frente" e cada tela ficou com a sua própria caixa, ou seja, com o seu próprio link, título e texto, tornando o código realmente funcional como deveria ser.

Por fim, outras otimizações menores também foram feitas, mas as mais importantes foram citadas acima. 

### Considerações Finais

Analisando o resultado, vejo que eu poderia ter trabalhado mais com as funções no javascript, criando funções bem objetivas para cada "ação", o que poderia facilitar a adição de conteúdos futuros. Entretanto, os objetivos de conhecimento e prática com esse exercício já foram alcançados e trazer essa adição das funções, visto que após finalizar o código, tive acesso a um outro que funcionava dessa forma, significaria reescrever boa parte do código que eu mesmo me esforcei para desenvolver por um que não foi. Assim sendo, prefiro manter o código atual, que funciona muito bem, que foi feito com meu esforço e levar todo o aprendizado para um próximo código.


## Animação demonstrativa do site

<img alt="animacao do site" src="src/gif.gif">
