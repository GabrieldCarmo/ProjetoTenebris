document.addEventListener("DOMContentLoaded", () => {

    const sobre = document.querySelector(".sobre");
    const titulo = document.getElementById("h1-pagina-principal");
    const descricao = document.getElementById("p-pagina-principal");
    const botao = document.getElementById("btn-pagina-principal");

    const conteudos = [
        {
            titulo: 'Bem-vindo ao <span>Tenebris</span>',
            descricao: 'Tenebris é o site ideal para você que é o fã número um das maiores franquias de terror do cinema.',
            botao: 'Explorar Catálogo',
            imagem: 'url("./src/assets/pp1.jpg")',
            link: '#destaques'
        },
        {
            titulo: 'Quer descobrir mais sobre o terror?',
            descricao: 'Junte-se ao clube Tenebris e comente sobre os seus filmes favoritos!',
            botao: 'Entrar no Clube',
            imagem: 'url("./src/assets/pp2.jpg")',
            link: 'login'
        },
        {
            titulo: 'Destaques do terror em premiações',
            descricao: 'Leia no blog os bastidores dos filmes mais premiados.',
            botao: 'Saiba Mais',
            imagem: 'url("./src/assets/pp3.jpg")',
            link: '#container-blog'
        }
    ];

    let index = 0;

    function aplicarConteudo() {
        titulo.innerHTML = conteudos[index].titulo;
        descricao.textContent = conteudos[index].descricao;
        botao.textContent = conteudos[index].botao;
        sobre.style.backgroundImage = conteudos[index].imagem;
    }

    function trocarConteudo() {
        sobre.classList.add("fade-out");

        setTimeout(() => {
            index = (index + 1) % conteudos.length;

            aplicarConteudo();

            sobre.classList.remove("fade-out");
            sobre.classList.add("fade-in");

            setTimeout(() => {
                sobre.classList.remove("fade-in");
            }, 600);

        }, 600);
    }

    setInterval(trocarConteudo, 4000);

    aplicarConteudo();

    botao.addEventListener("click", () => {
        const destino = conteudos[index].link;

        if (destino === "login") {
            if (typeof abrirLogin === "function") {
                abrirLogin();
            }
            return;
        }

        if (destino.startsWith("#")) {
            const elemento = document.querySelector(destino);

            if (elemento) {
                elemento.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        } else {
            window.location.href = destino;
        }
    });

});