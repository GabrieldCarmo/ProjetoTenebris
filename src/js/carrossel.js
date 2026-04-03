const sobre = document.querySelector(".sobre");
const titulo = document.getElementById("h1-pagina-principal");
const descricao = document.getElementById("p-pagina-principal");
const botao = document.getElementById("btn-pagina-principal");

const conteudos = [
    {
        titulo: 'Bem-vindo ao <span>Tenebris</span>',
        descricao: 'Tenebris é o site ideal para você que é o fã número um das maiores franquias de terror do cinema. Explore o gênero cinematográfico e descubra seus maiores medos do universo do terror psicológico. Selecionamos o melhor dos classicos sobrenaturais, suspense e psicológicos com informações devidamente analisadas com avaliações da comunidade.',
        botao: 'Explorar Catálogo',
        imagem: 'url("./src/assets/pp1.jpg")'
    },
    {
        titulo: 'Quer descobrir mais sobre o terror?',
        descricao: 'É um amante dos filmes e franquias do terror? Junte-se ao clube Tenebris e comente sobre os seus filmes favoritos!',
        botao: 'Criar uma conta',
        imagem: 'url("./src/assets/pp2.jpg")'
    },
    {
        titulo: 'Destaques do terror em premiações',
        descricao: 'Descubra quais foram os filmes de terror mais premiados e sua relevância para o cinema mundial!',
        botao: 'Saiba Mais',
        imagem: 'url("./src/assets/pp3.jpg")'
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
        index++;
        if (index >= conteudos.length) index = 0;

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