const menuBtn = document.getElementById("menu-hamburguer");

const menuBox = document.createElement("div");
menuBox.classList.add("menu-box");

menuBox.innerHTML = `
    <ul>
        <li><a href="/ProjetoTenebris/index.html">inicio</a></li>
        <li><a href="/ProjetoTenebris/src/pages/alien.html">Alien</a></li>
        <li><a href="/ProjetoTenebris/src/pages/chamado.html">Chamado</a></li>
        <li><a href="/ProjetoTenebris/src/pages/panico.html">Pânico</a></li>
        <li><a href="/ProjetoTenebris/src/pages/sobrenos.html">Sobre Nós</a></li>
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


document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("linha-tempo");
    const quadros = document.querySelectorAll(".quadro");

    const btnAvancar = document.getElementById("avancar");
    const btnVoltar = document.getElementById("voltar");

    let indexAtual = 0;

    function atualizarCarousel() {
        const card = quadros[indexAtual];

        const containerWidth = container.offsetWidth;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;

        const scrollPos = cardLeft - (containerWidth / 2) + (cardWidth / 2);

        container.scrollTo({
            left: scrollPos,
            behavior: "smooth"
        });

        quadros.forEach(q => q.classList.remove("ativo"));
        card.classList.add("ativo");
    }

    btnAvancar.addEventListener("click", () => {
        indexAtual = (indexAtual + 1) % quadros.length;
        atualizarCarousel();
    });

    btnVoltar.addEventListener("click", () => {
        indexAtual = (indexAtual - 1 + quadros.length) % quadros.length;
        atualizarCarousel();
    });

    atualizarCarousel();

});