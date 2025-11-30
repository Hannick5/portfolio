# Portfolio — Hannick Abdul Kuthoos

One-page portfolio React/Vite (thème terminal sombre).

## Démo

[https://votre-utilisateur.github.io/portfolio/](https://votre-utilisateur.github.io/portfolio/)

> Remplace `votre-utilisateur` par ton pseudo GitHub. Le dépôt doit être nommé `portfolio`.

## Scripts

- `npm install` : installe les dépendances
- `npm run dev` : lance le serveur de dev
- `npm run build` : build de production
- `npm run preview` : prévisualise le build

## Déploiement GitHub Pages (workflow inclus)

1. Mets à jour le lien ci-dessus avec ton utilisateur.
2. `git init && git add . && git commit -m "chore: initial portfolio"` (si ce n’est pas déjà fait)
3. `git branch -M main`
4. `git remote add origin git@github.com:<utilisateur>/portfolio.git` (ou HTTPS)
5. `git push -u origin main`
6. Dans GitHub, active Pages sur la branche `gh-pages` (déployée automatiquement par le workflow `deploy.yml`).

Le workflow construit le site (base `/portfolio/`) et publie `dist` sur Pages à chaque push sur `main`.
