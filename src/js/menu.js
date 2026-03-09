const menuBtn = document.getElementById("menu-hamburguer");

const menuBox = document.createElement("div");
menuBox.classList.add("menu-box");

menuBox.innerHTML = `
    <ul>
        <li><a href="/index.html">inicio</a></li>
        <li><a href="/src/pages/alien.html">Alien</a></li>
        <li><a href="/src/pages/chamado.html">Chamado</a></li>
        <li><a href="/src/pages/panico.html">Pânico</a></li>
        <li><a href="/src/pages/sobrenos.html">Sobre Nós</a></li>
    </ul>
`;

document.body.appendChild(menuBox);

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // impede conflito com o click global
    menuBox.classList.toggle("ativo");
});

document.addEventListener("click", (e) => {
    if (!menuBox.contains(e.target) && e.target !== menuBtn) {
        menuBox.classList.remove("ativo");
    }
});

const quadros = document.querySelectorAll(".quadro");

const btnAvancar = document.getElementById("avancar");
const btnVoltar = document.getElementById("voltar");

let indexAtual = 1;

function atualizarCarousel(){

    quadros.forEach(q => q.classList.remove("ativo"));

    quadros[indexAtual].classList.add("ativo");

}

btnAvancar.addEventListener("click", () => {

    if(indexAtual < quadros.length - 1){
        indexAtual++;
    }

    atualizarCarousel();
});

btnVoltar.addEventListener("click", () => {

    if(indexAtual > 0){
        indexAtual--;
    }

    atualizarCarousel();
});

atualizarCarousel();
