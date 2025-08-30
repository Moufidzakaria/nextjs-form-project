# Next.js Form Project with MongoDB & Docker

## Description
Ce projet est une application Next.js avec un formulaire utilisateur complet. Les données sont envoyées à une API et stockées dans une base de données MongoDB. L’ensemble du projet est conteneurisé avec Docker et orchestré via Docker Compose. Il est également prêt pour l’intégration continue (CI) avec GitHub Actions.

---

## Fonctionnalités principales
- Formulaire utilisateur avec champs : Nom, Email, Mot de passe, Age et Extra
- Validation côté client pour éviter les erreurs
- Stockage sécurisé des données dans MongoDB
- Conteneurisation Docker pour une installation rapide et reproductible
- Pipeline CI avec GitHub Actions pour automatiser le build et le déploiement
- Interface propre et responsive avec Tailwind CSS
- Communication avec le backend via Axios

---

## Stack technique
- **Frontend** : Next.js 15, React, Tailwind CSS
- **Backend** : Node.js 20, Express (ou API intégrée Next.js)
- **Base de données** : MongoDB 7
- **Conteneurisation** : Docker, Docker Compose
- **CI/CD** : GitHub Actions

---

## Architecture du projet
- `frontend/` : Application Next.js
- `backend/` (ou `pages/api/`) : Routes API pour gérer les utilisateurs
- `docker-compose.yml` : Orchestration des conteneurs frontend et MongoDB
- `.env` : Variables d'environnement pour la configuration de MongoDB et de l’application
- `github/workflows/ci.yml` : Configuration de la pipeline CI

---

## Installation et lancement
1. Cloner le dépôt
```bash



Projet full-stack prêt pour la production

Conteneurisé pour faciliter le déploiement sur n’importe quelle machine

CI/CD automatique pour tester et déployer le projet

Interface moderne et responsive

Scalabilité et sécurité intégrées dès le départ

Zakaria Moufid – Développeur Full Stack Junior
