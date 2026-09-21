# 💻 Portfólio — Frank Kennady

Portfólio pessoal em **React + Vite**, com animações (Framer Motion), estilização com
**styled-components** e apresentação dos sistemas full stack **KS Gestão** e **KS Agenda**.

## 🚀 Como rodar

```bash
yarn install
yarn dev       # ambiente de desenvolvimento (http://localhost:5173)
yarn build     # gera a versão de produção em /dist
yarn preview   # serve a build de produção localmente
```

## 🛠️ Stack

- **React 19** + **Vite**
- **styled-components** (CSS-in-JS)
- **Framer Motion** (animações e scroll reveal)
- **lucide-react** (ícones)

## 📁 Estrutura

Cada componente e seção segue o padrão `index.jsx` + `styles.js` em pastas separadas,
seguindo o mesmo padrão usado no KS Gestão / KS Agenda:

```
src/
├── main.jsx
├── App.jsx
├── styles/
│   ├── theme.js            # cores, fontes, sombras
│   └── GlobalStyle.js       # reset e estilos globais
├── data/
│   ├── projects.js          # dados dos projetos (edite aqui para add/remover)
│   └── skills.js             # stack técnica e estatísticas
├── hooks/
│   ├── useActiveSection.js  # scroll-spy do menu
│   └── useCountUp.js         # contadores animados
├── components/
│   ├── Navbar/               # index.jsx + styles.js
│   ├── Background/           # blobs + grid animados
│   ├── ScrollProgress/       # barra de progresso do scroll
│   ├── ScrollTopButton/
│   ├── SectionHeading/
│   ├── Reveal/                # wrapper de animação ao entrar na viewport
│   ├── BrowserMockup/         # moldura de "janela de navegador"
│   ├── KsGestaoPreview/       # prévia animada da UI do KS Gestão
│   └── KsAgendaPreview/       # prévia animada da UI do KS Agenda
└── sections/
    ├── Hero/       (aba Início)
    ├── About/      (aba Sobre)
    ├── Projects/   (aba Projetos)
    ├── Contact/    (aba Contato)
    └── Footer/
```

## ✏️ Editar conteúdo

- **Projetos**: `src/data/projects.js`
- **Skills / estatísticas**: `src/data/skills.js`
- **Cores e tema**: `src/styles/theme.js`
- **Currículo em PDF**: `public/assets/curriculo-frank-kennady.pdf`

## 📦 Deploy

Build estático padrão (Vercel, Netlify, GitHub Pages):

```bash
yarn build
```

O resultado fica em `dist/`, pronto para publicar.
