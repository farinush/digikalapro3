
# 🛒 Digikala Homepage Clone — Vanilla JavaScript

An early practice project: a static clone of Digikala's homepage built with **plain HTML, CSS, and modular vanilla JavaScript** (no framework), using `fetch` calls and direct DOM manipulation for every interactive section.

>  Live Demo: [digikalapro3.vercel.app](https://digikalapro3.vercel.app/)

---

##  Overview

Before moving to React, this project was where I practiced structuring vanilla JavaScript for a large, multi-section page: every homepage widget (top menu, category dropdowns, slider, "amazing offers", brand sections, footer, etc.) is handled by its own module under `public/js/menu/`, each exporting one or more `fetchX()` functions that populate the DOM.

This repo represents an earlier stage of my learning — I'm keeping it public as a marker of that progress rather than as a polished portfolio piece (see [`digikalaReact`](https://github.com/farinush/digikalaReact) for the React version of the same idea, built with components and Redux).

##  Features

-  ~20 independent JS modules, one per homepage section (`slider.js`, `story.js`, `montakhab.js`, `khandaniha.js`, `subfooter.js`, etc.)
-  A large multi-level dropdown mega-menu, built and toggled entirely with DOM APIs (`bottommenu.js`)
-  Responsive layout with custom CSS (`public/css/*.css`)
-  Carousels via a locally-vendored **Swiper** build

##  Honest Notes on This Project

- The **Axios** and **Swiper** libraries are committed directly into the repository (`/axios`, `/swiper` folders) instead of being installed via `npm` and `.gitignore`d — a pattern I've since moved away from in my later, React-based projects, which all use a proper `package.json` + bundler setup.
- Each homepage section is manipulated directly via `document.querySelector` / DOM APIs rather than a component model, which was useful for learning core JavaScript and the DOM, but doesn't scale the way React components do — which is exactly why my next version of this same idea (`digikalaReact`) moved to React.

##  Tech Stack

| Category | Tools |
|---|---|
| Core | HTML5, CSS3, JavaScript (ES Modules) |
| HTTP | Axios (vendored) |
| Carousel | Swiper (vendored) |
| Mock data | Local JSON served via a small dev server |

##  Project Structure

```
public/
├── js/
│   ├── main.js          # Entry point — imports & calls every section's fetch function
│   └── menu/             # One module per homepage section
├── css/
└── svg/
index.html
form.html
```

## 🚀 Getting Started

```bash
git clone https://github.com/farinush/digikalapro3.git
cd digikalapro3
# Open index.html directly, or serve the folder with any static server, e.g.:
npx serve .
```

##  Where This Project Goes From Here

I'm actively deciding whether to keep this repository public going forward — it fairly represents an earlier stage of my learning, but the [`digikalaReact`](https://github.com/farinush/digikalaReact) project covers the same idea with a much stronger, component-based implementation. If you're evaluating my current frontend ability, that's the one to look at.

## 📄 License

This project was built for learning purposes — it is a UI clone built for practice and is not affiliated with or endorsed by Digikala.
