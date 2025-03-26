HRnet - Application de gestion des employés

Description

HRnet est une application de gestion des employés développée en React, issue d'une refonte d'une version initiale en jQuery. Elle permet aux utilisateurs d'ajouter de nouveaux employés via un formulaire et de consulter la liste des employés existants.

Fonctionnalités

Formulaire d'ajout d'un nouvel employé

Liste des employés avec filtrage et tri

Interface réactive et performante

Utilisation d'une bibliothèque de composants personnalisés

Installation

Prérequis

Node.js (version 18 ou supérieure)

Un gestionnaire de paquets : npm ou yarn

Cloner le projet

git clone https://github.com/ton-utilisateur/hrnet.git
cd hrnet

Installation des dépendances

Avec npm :

npm install

Avec yarn :

yarn install

Lancer le projet

En mode développement :

npm run dev

Construire le projet pour la production :

npm run build

Prévisualiser la version build :

npm run preview

Documentation

Structure du projet

hrnet/
│── src/
│   ├── components/   # Composants réutilisables
│   ├── pages/        # Pages principales
│   ├── hooks/        # Hooks personnalisés
│   ├── styles/       # Fichiers CSS et styles globaux
│   ├── utils/        # Fonctions utilitaires
│── public/           # Assets publics
│── package.json      # Fichier de configuration du projet

Gestion de l'état

L'application utilise React Context API pour la gestion de l'état global.

Déploiement

L'application peut être déployée sur Vercel, Netlify ou tout autre service d'hébergement statique.

Contribution

Forkez le projet

Créez une branche (git checkout -b feature/ma-feature)

Commitez vos modifications (git commit -m 'Ajout de ma fonctionnalité')

Poussez la branche (git push origin feature/ma-feature)

Créez une Pull Request

Auteur

Élodie - GitHub

Licence

Ce projet est sous licence MIT.

Liens utiles

Dépôt GitHub

Documentation React

