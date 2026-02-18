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

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
