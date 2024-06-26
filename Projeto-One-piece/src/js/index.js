/*Objetivo 1 - quando clicar no botao do personagem na lista, marcar o botão como selecionado 
<ul class="botoes">
      
      <li>
        <button class="botao"> */

//Objetivo 1 - quando clicar no botao do personagem na lista, marcar o botão como selecionado. 

//querySelectorAll serve para buscar no HTML pelo seletor dele nesse caso a classe botoes, dentro dele tem a classe botao com isso ele busca todos os botao dentro do botoes.

// passo 1 - pegar os botoes no JS pra poder verificar quando o usuário clicar em cima de um deles.
const botoes = document.querySelectorAll('.botao');

//OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem.
// Passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele.

const personagens = document.querySelectorAll(".personagem");

//Passo 2 - Adicionar a classe selecionado, no botão que o usuário clicou.

//Passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele.

// forEach serve para percorrer uma lista cada elemento individual, com isso o addEventListener vai funcionar pois se eu não colocar ele da um erro pois ele só pega um elemento e o botoes é uma lista de elementos. Após com o classList.add eu posso fazer o JS colocar a class selecionado nos outros elementos da lista. 
botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();
    desselecionarPersonagem();

    botao.classList.add("selecionado");
    personagens[indice].classList.add("selecionado")
  })
})


//passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.
function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

//Passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele. 
function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

