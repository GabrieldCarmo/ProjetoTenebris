const menuBtn = document.getElementById("menu-hamburguer");

if (menuBtn) {

    const menuBox = document.createElement("div");
    menuBox.classList.add("menu-box");

    // Detecta se está dentro de /src/pages
    const isPages = window.location.pathname.includes("/src/pages/");

    menuBox.innerHTML = isPages ? `
            <ul>
                <li><a href="../../index.html">inicio</a></li>
                <li><a href="./alien.html">Alien</a></li>
                <li><a href="./chamado.html">Chamado</a></li>
                <li><a href="./panico.html">Pânico</a></li>
                <li><a href="./sobrenos.html">Sobre Nós</a></li>
            </ul>
        ` : `
            <ul>
                <li><a href="./index.html">inicio</a></li>
                <li><a href="./src/pages/alien.html">Alien</a></li>
                <li><a href="./src/pages/chamado.html">Chamado</a></li>
                <li><a href="./src/pages/panico.html">Pânico</a></li>
                <li><a href="./src/pages/sobrenos.html">Sobre Nós</a></li>
            </ul>
        `;

    document.body.appendChild(menuBox);

    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        menuBox.classList.toggle("ativo");
    });

    document.addEventListener("click", (e) => {
        if (!menuBox.contains(e.target) && e.target !== menuBtn) {
            menuBox.classList.remove("ativo");
        }
    });
}

const quadros = document.querySelectorAll(".quadro");

const btnAvancar = document.getElementById("avancar");
const btnVoltar = document.getElementById("voltar");

let indexAtual = 1;

function atualizarCarousel() {

    quadros.forEach(q => q.classList.remove("ativo"));

    quadros[indexAtual].classList.add("ativo");

}

btnAvancar.addEventListener("click", () => {

    if (indexAtual < quadros.length - 1) {
        indexAtual++;
    }

    atualizarCarousel();
});

btnVoltar.addEventListener("click", () => {

    if (indexAtual > 0) {
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