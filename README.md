# Dark Mode Professional Portfolio

Portfolio profissional desenvolvido com HTML5, CSS3 e JavaScript vanilla.

## 🎨 Design

Template **Dark Mode Professional** - Moderno e sofisticado com:
- Tema escuro (#1a1a1a) com acentos em azul suave (#5b9bd5)
- Tipografia elegante (Cormorant Garamond + Source Sans Pro)
- Layout responsivo e mobile-first
- Animações suaves e interativas
- Glassmorphism e efeitos de hover

## 📁 Estrutura do Projeto

```
felipedsf.github.io/
├── index.html              # Página principal
├── css/
│   ├── style.css          # Estilos principais
│   └── responsive.css     # Media queries e responsividade
├── js/
│   └── main.js            # Interatividade e animações
├── images/
│   ├── profile.jpg        # Foto de perfil
│   └── projects/          # Imagens dos projetos
│       ├── project1.jpg
│       ├── project2.jpg
│       └── project3.jpg
└── README.md
```

## 🚀 Funcionalidades

### Navegação
- Menu fixo com efeito de scroll
- Menu hambúrguer responsivo para mobile
- Smooth scroll para seções
- Indicador de seção ativa

### Seções
1. **Hero** - Introdução com foto de perfil e CTAs
2. **Sobre** - Biografia e habilidades com barras de progresso animadas
3. **Trabalhos** - Grid de projetos com overlay hover
4. **Experiência** - Timeline profissional
5. **Contato** - Formulário e links de contato
6. **Footer** - Links sociais e copyright

### Interatividade
- Animações on scroll (Intersection Observer)
- Barras de habilidade animadas
- Overlay em cards de projetos
- Formulário de contato funcional
- Efeitos hover em todos os elementos interativos

## 🎯 Personalização

### Cores
Edite as variáveis CSS em `css/style.css`:

```css
:root {
  --color-bg: #1a1a1a;           /* Fundo principal */
  --color-accent: #5b9bd5;       /* Cor de destaque */
  --color-text: #ffffff;         /* Texto principal */
  /* ... */
}
```

### Conteúdo
1. **Informações pessoais**: Edite diretamente no `index.html`
2. **Foto de perfil**: Substitua `images/profile.jpg`
3. **Projetos**: Adicione imagens em `images/projects/`
4. **Links sociais**: Atualize os links no footer e seção de contato

### Fontes
As fontes são carregadas do Google Fonts:
- **Cormorant Garamond** (headings)
- **Source Sans Pro** (body)

Para mudar, edite o link no `<head>` do HTML.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 767px
- **Tablet**: 768px - 1023px
- **Desktop**: > 1024px

## ♿ Acessibilidade

- Marcação semântica HTML5
- Atributos ARIA onde necessário
- Suporte para `prefers-reduced-motion`
- Suporte para `prefers-contrast: high`
- Navegação por teclado otimizada
- Alt text em todas as imagens

## 🌐 Deploy no GitHub Pages

1. Certifique-se de que o repositório está público
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione a branch `main` e pasta `/root`
4. Clique em **Save**
5. Aguarde alguns minutos e acesse: `https://felipedsf.github.io`

## 📝 Próximos Passos

### Adicionar Imagens
Você precisa adicionar suas próprias imagens de projetos:
- `images/projects/project1.jpg`
- `images/projects/project2.jpg`
- `images/projects/project3.jpg`

### Personalizar Conteúdo
1. Atualize seu nome, título e bio
2. Adicione suas experiências profissionais
3. Liste suas habilidades reais
4. Adicione seus projetos com links
5. Atualize informações de contato

### Opcional: Integração de Formulário
O formulário atualmente mostra apenas uma mensagem de sucesso. Para enviar emails reais, integre com:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript (ES6+)
- Google Fonts
- Intersection Observer API

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

---

**Desenvolvido com ❤️ por Felipe Faria**
