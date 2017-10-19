# Installation de l'API d'exemple

L'objectif dans ce workshop est de récupérer l'API d'exemple de ShowTonight pour commencer à jouer avec.

## Récupération de l'API

On va commencer par lancer un terminal faire un `git clone https://github.com/Hack-X/ShowTonight-api.git`.
Le code va maintenant est en local sur votre machine. Vous pouvez ouvrir le dossier ainsi récupéré avec votre éditeur (Sublime Text par exemple).

## Avant de lancer l'application
Vous allez maintenant entrer dans le dossier en faisant un `cd ShowTonight-api` puis vous allez devoir lancer l'installation des dépendances avec `npm install`

## Lancer l'application
Pour lancer la base, il vous faut 

### Mac et Linux
`DB_USERNAME=xxx DB_PASSWORD=xxx NODE_ENV=development npm run dev`

### Windows
```bash
setx DB_USERNAME xxx
setx DB_PASSWORD xxx
setx NODE_ENV development
npm run dev
```

Vous allez maintenant tester que le serveur est bien lancé en vous rendant dans votre navigateur sur [http://localhost:5000/](http://localhost:5000/)
Vous pouvez accéder tout de suite au backoffice sur [http://localhost:5000/shows](http://localhost:5000/shows)

## Effectuer des requêtes sur l'API
Pour commencer à effectuer des requêtes sur l'API, nous allons utiliser un logiciel du type de [Postman](https://www.getpostman.com/).

* Pour commencer, nous allons remplir la base de données avec un POST sur `http://localhost:5000/seeddb`



## Lien postman pour tester les apis
https://www.getpostman.com/collections/1a324ea6496f4dc8de41

## Tester l'api en prod
https://hackx-node.herokuapp.com/

## Ressources
Mise en forme des vues avec bootstrap : https://getbootstrap.com/docs/4.0/getting-started/introduction/
Création de la base sur : https://mlab.com
Déploiement de l'api chez heroku : https://www.heroku.com
