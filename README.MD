# 🚀 GS WebDev & Front-End

Bem-vindo ao repositório **GS**! 🎉 Aqui reunimos seus três mini-projetos de **Web Development** e **Front-End Design**, usando **HTML5**, **CSS3** e **JavaScript** puros — com importações para estilização, animações e interatividade.

---

## 👥 Equipe

| Nome                               | GitHub                                                |
| ---------------------------------- | ----------------------------------------------------- |
| Leandro Afonso Silva Santos Júnior | [TLean07](https://github.com/TLean07)                 |
| Luigi Escudero Grigoletto          | [Lueg2007](https://github.com/Lueg2007)               |
| Guilherme Barone Milani            | [GuilhermeBM3012](https://github.com/GuilhermeBM3012) |

---

## 🔗 Links Úteis

* 🌐 **Repositório GitHub:** [https://github.com/TLean07/GS.git](https://github.com/TLean07/GS.git)
* 🔗 **Vercel:** [https://gs-two-ruddy.vercel.app/](https://gs-two-ruddy.vercel.app/)
* 📄 **Demo Pages:** abra `index.html` no Live Server do VS Code

---

## 📦 Imports & Estilização

Para dar um **up** visual, adicione estas importações no `<head>` do seu HTML:

```html
<!-- Reset e Normalize -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />

<!-- Font Awesome para ícones -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />

<!-- Animate.css para animações fáceis -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

<!-- AOS (Animate On Scroll) -->
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>

<!-- Hover.css para efeitos hover modernos -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.2/css/hover-min.css" />

<!-- Swiper.js para slides interativos -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<!-- Typed.js para digitação animada -->
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
```

Em seu `main.css`, importe variáveis e defina estilos globais:

```css
@import url('./variables.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.2/css/hover-min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
```

E inicie AOS no final de `script.js`:

```js
AOS.init({ duration: 800, once: true });
new Typed('#typed', { strings: ['Interatividade ✨', 'Animações 🚀', 'Experiência 😊'], typeSpeed: 60, backSpeed: 30, loop: true });
```

---

## ▶️ Como Rodar

1. Clone o repositório:

   ```bash
   git clone https://github.com/TLean07/GS.git
   ```
2. Entre na pasta e abra `index.html` de cada mini-projeto com Live Server.

---

## 🛡️ Tecnologias Utilizadas

* **HTML5** sem frameworks
* **CSS3** (Flexbox, Grid, variáveis, animações)
* **JavaScript** Vanilla (ES6+)
* **Bibliotecas:** Animate.css, AOS, Hover.css, Typed.js, Swiper.js
