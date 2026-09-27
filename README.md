# Yonatan Firde — Portfolio Website

My personal portfolio: a Computer Science student and aspiring backend developer, showcasing full-stack projects alongside data analysis work in **SQL, Python, and Tableau**.

## About the Website

A single-page site based on the open-source [Simple](https://www.devportfoliotemplates.com/portfolio-templates/simple) /
[Simple Dark](https://www.devportfoliotemplates.com/portfolio-templates/simple-dark) portfolio templates by
[devportfoliotemplates](https://github.com/devportfoliotemplates/devportfoliotemplates) (MIT License). The two templates'
Tailwind designs were merged into one static page with a real light/dark toggle, rebuilt as plain HTML + compiled Tailwind
CSS (no Next.js/build step needed to deploy — just static files, same as before), with:
- Dark / light mode toggle (persisted per visitor, respects OS preference by default)
- Scroll-reveal animations on skills and project cards, via `IntersectionObserver`
- Four featured projects: a RAG API, a full-stack booking system, and two data analysis projects
- A "View Resume" link to `resume.pdf` and a "Get in Touch" mailto button
- GitHub, LinkedIn, and Kaggle social links

## Projects Featured

1. **[PDF Q&A Assistant](https://github.com/Yonatan-Awlachew/doc-qa-assistant)** — Retrieval-Augmented Generation API (FastAPI, Groq, Gemini embeddings)
2. **[Cinema Ticket Booking System](https://github.com/Yonatan-Awlachew/CinemaTicketSystem)** — ASP.NET Core 9 Web API + React 19, JWT auth, MySQL
3. **[Data Mining Project](https://github.com/Yonatan-Awlachew/DataMining-Project)** — Italy's agricultural economy, 1980–2023
4. **[Data Cleaning & Visualization](https://github.com/Yonatan-Awlachew/Global-Superstore-Data_Cleaning_and_Visualization-Project)** — Global Superstore dataset (SQL, Python, Tableau)

## Live Demo
🔗 **[Visit My Portfolio](https://yonatan-awlachew.github.io/YonatanFirdePortfolio.github.io/)**

## Local Development

Static site — no build step needed just to view it:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

`assets/css/styles.css` is a **compiled, purged Tailwind CSS file** — it only contains the utility classes actually used in `index.html`. If you add a new Tailwind class to the HTML, it won't render until you recompile:

```bash
npm install
npm run build:css      # one-off rebuild
npm run watch:css      # rebuild on every save while editing
```

## Connect with Me
- Email: yonatanawlachew1@gmail.com
- LinkedIn: [@Yonatan Firde](https://www.linkedin.com/in/yonatan-awlachew-firde-78ab4b236)
- GitHub: [@Yonatan-Awlachew](https://github.com/Yonatan-Awlachew)
