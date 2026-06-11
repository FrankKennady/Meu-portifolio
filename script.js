document.querySelectorAll('.btn-scroll').forEach(button => {
    button.addEventListener('click', function() {
        // Pega o valor do atributo data-target (ex: 'projects' ou 'contact')
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Rola suavemente até o elemento
            targetElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// --- CLIQUE DO WHATSAPP ---
// Mudamos para apenas uma função simples, sem o .forEach, já que é um botão único
const botaoWhatsapp = document.getElementById("btn-whatsapp");

if (botaoWhatsapp) { // Uma boa prática para evitar erros caso o botão não exista na tela
    botaoWhatsapp.addEventListener("click", () => {
        const alvoId = botaoWhatsapp.getAttribute("data-target");

        // 1. Verifica se é o caso especial do WhatsApp
        if (alvoId === "contact-whatsapp") {
            window.open("https://wa.me/5573981110968", "_blank");
        } else {
            const elemento = document.getElementById(alvoId);

            // Verifica se o elemento realmente existe na página antes de rolar
            if (elemento) {
                elemento.scrollIntoView({ behavior: "smooth" });
            } else {
                console.warn("Alvo do scroll não encontrado: " + alvoId);
            }
        }
    });
}

// --- CLIQUE DO GITHUB ---
const botaoGithub = document.getElementById("btn-github");
if (botaoGithub) {
    botaoGithub.addEventListener("click", function () {
        window.open("https://github.com/FrankKennady", "_blank");
    });
}

// --- CLIQUE DO LINKEDIN (Corrigido para "btn-linkedin") ---
const botaoLinkedin = document.getElementById("btn-linkedin");
if (botaoLinkedin) {
    botaoLinkedin.addEventListener("click", function () {
        window.open("https://www.linkedin.com/in/frank-kennady-284685256/?skipRedirect=true", "_blank");
    });
}

// --- CLIQUE DO INSTAGRAM ---
const botaoInstagram = document.getElementById("btn-instagram");
if (botaoInstagram) {
    botaoInstagram.addEventListener("click", function () {
        window.open("https://www.instagram.com/frank_kennady?igsh=MWFvd3lmcmhpMGxvZw==", "_blank");
    });
}

// --- CLIQUE DO EMAIL ---
const botaoEmail = document.getElementById("btn-email");
if (botaoEmail) {
    botaoEmail.addEventListener("click", function () {
        window.open("mailto:devfrankkennady@gmail.com", "_blank");
    });
}

// PARTE DOS PROJETOS
const myprojects = [
    {
        titulo: "Os Guerreios Z",
        sintese: "Página moderna apresentando os personagens do Dragon Ball Z",
        github: "🚀 Github",
        linkgithub: "https://github.com/FrankKennady/Dragon-Ball-Os-Guerreiros-Z.git",
        deploy: "🌐 Ver",
        linkdeploy: "https://frankkennady.github.io/Dragon-Ball-Os-Guerreiros-Z/",
        capa: "./assets/projetoDragonBall.png"
    },
    {
        titulo: "Universo Marvel",
        sintese: "Inspirada nas grandes aplicações de streaming, totalmente focada no universo Marvel",
        github: "🚀 Github",
        linkgithub: "https://github.com/FrankKennady/Projeto-HeroisFlix",
        deploy: "🌐 Ver",
        linkdeploy: "https://frankkennady.github.io/Projeto-HeroisFlix/",
        capa: "./assets/heroiFlix.png"
    },
    {
        titulo: "Pizzaria",
        sintese: "Página moderna apresentando um cardapio de uma pizzaria, com design responsivo e interativo",
        github: "🚀 Github",
        linkgithub: "https://github.com/FrankKennady/Projeto-Pizzaria.git",
        deploy: "🌐 Ver",
        linkdeploy: "https://frankkennady.github.io/Projeto-Pizzaria/",
        capa: "./assets/pizzaria.png"
    },
    {
        titulo: "Cardapio Licor da Santa",
        sintese: "cardapio de licores, com design responsivo e interativo. publicação totalmente liberada pela a cliente",
        github: "🚀 Github",
        linkgithub: "https://github.com/FrankKennady/Projeto-Pizzaria.git",
        deploy: "🌐 Ver",
        linkdeploy: "https://frankkennady.github.io/LICOR-DA-SANTA/",
        capa: "./assets/licor-da-santa.png"
    }
];


// --- RENDERIZAÇÃO DINÂMICA DO FRONT-END ---
const main = document.querySelector(".container-projects");

function exibirproject(projects) {
    if (!main) return; // Evita que dê erro se o container não existir na página atual
    
    // Corrigido o fechamento da tag da imagem abaixo ("${projects.titulo}")
    main.innerHTML = projects.map(project => `
        <div class="container-projects-box">
            <img src="${project.capa}" alt="${project.titulo}" />
            <div class="project-info">
                <h3>${project.titulo}</h3>
                <p>${project.sintese}</p>
                <a href="${project.linkgithub}" target="_blank" class="btn-acessar"> ${project.github}</a>
                <a href="${project.linkdeploy}" target="_blank" class="btn-acessar"> ${project.deploy}</a>
            </div>
        </div>
    `).join("");
}

// Chamada inicial
exibirproject(myprojects);