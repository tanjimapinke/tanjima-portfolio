# tanjima-portfolio

Personal portfolio of Tanjima Abbas Pinke — CSE student, AI/ML and research enthusiast.
Built with React + Vite, deployed to GitHub Pages.

Live: https://tanjimapinke.github.io/tanjima-portfolio/

## Before you run it

Two files must sit inside `public/`:

```
public/cv.pdf        <- your existing CV
public/tanjima.png   <- your existing profile photo
```

Move them there from the project root if they are not already inside `public/`.
Filenames are case-sensitive on GitHub Pages, so keep them exactly as written above.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173/tanjima-portfolio/).

## Build

```bash
npm run build
npm run preview
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/tanjimapinke/tanjima-portfolio.git
git push -u origin main
```

## Turn on GitHub Pages

In the repository: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

## Editing content

All text lives in `src/data/`:

| File | Contents |
| --- | --- |
| `profile.js` | Name, contact, about text, career direction, achievements, hobbies |
| `education.js` | Degree, CGPA, coursework |
| `skills.js` | Skill groups |
| `projects.js` | Featured work and academic projects |
| `research.js` | Research entries and interests |

To show a repository button on a featured project, add a `repo: 'https://github.com/...'`
key to that project in `src/data/projects.js`. Without it, no button is rendered.
