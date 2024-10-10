# Free GG (Free Game Guide)

Free GG est une application mobile développée avec React Native, permettant aux utilisateurs de découvrir des jeux gratuits à travers une interface conviviale et intuitive. L'application utilise l'API FreeToGame pour accéder à une base de données de jeux gratuits, offrant des fonctionnalités de recherche par plateforme, catégorie, tags et divers critères de tri.

## Table des Matières

- [Objectifs](#objectifs)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [API](#api)
- [Bonus](#bonus)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Objectifs

- Apprendre les bases de React Native
- Savoir faire des requêtes API
- Travailler l'UX et l'UI d'une application mobile

## Fonctionnalités

### Page d'accueil

- Présente 10 jeux gratuits au hasard
- Affiche des vignettes, des titres attrayants et des informations succinctes sur chaque jeu
- Permet aux utilisateurs d'accéder aux détails complets des jeux en cliquant dessus

### Page catégories

- Liste les différentes catégories de jeux disponibles
- Permet aux utilisateurs de cliquer sur chaque catégorie pour accéder à la liste des jeux gratuits de cette catégorie
- Les utilisateurs peuvent accéder aux détails complets des jeux en cliquant dessus

### Détails du jeu

- Affiche une description détaillée du jeu, des captures d'écran, un lien vers le site du jeu
- Fournit des informations essentielles telles que les exigences du système, le développeur, les dates, etc.

### Page paramètres

- Permet aux utilisateurs de choisir la plateforme sur laquelle ils souhaitent trouver des jeux gratuits
- Plateformes disponibles : `pc`, `browser`, `all`

## Installation

Pour exécuter ce projet localement, suivez ces étapes :

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/MehmetSalihK/Free-GG.git
    ```

2. Accédez au répertoire du projet :
    ```sh
    cd Free-GG
    ```

3. Installez les dépendances :
    ```sh
    npm install
    ```

4. Démarrez l'application :
    ```sh
    npm run start
    ```

5. Utilisez un émulateur ou un appareil physique pour voir l'application en action.

## Utilisation

- **Page d'accueil** : Parcourez les jeux gratuits présentés. Cliquez sur un jeu pour voir plus de détails.
- **Page catégories** : Sélectionnez une catégorie pour voir les jeux correspondants. Cliquez sur un jeu pour voir plus de détails.
- **Page paramètres** : Choisissez votre plateforme préférée pour filtrer les jeux gratuits.

## API

Cette application utilise l'[API FreeToGame](https://www.freetogame.com/api-doc) pour récupérer les données des jeux gratuits. Les principales routes de l'API utilisées sont :

- `https://www.freetogame.com/api/games` : Pour récupérer la liste des jeux
- `https://www.freetogame.com/api/game?id={id}` : Pour récupérer les détails d'un jeu spécifique

## Exemple de Vidéo

Voici un aperçu rapide de l'application en action :

![Exemple de Vidéo](./assets/Exemple.mov)

## Bonus

Des fonctionnalités bonus peuvent inclure :

- Tri par date de publication
- Tri par popularité
- Tri alphabétique
- Tri par pertinence

## Contribuer

Les contributions sont les bienvenues ! Veuillez forker le dépôt et créer une pull request avec vos modifications. Assurez-vous que votre code respecte les standards de codage du projet et inclut des tests appropriés.
