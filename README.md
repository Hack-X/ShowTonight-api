# hackx-node

## Avant de lancer l'application
npm install

## Lancer l'application (Mac et Linux)
DB_USERNAME=xxx DB_PASSWORD=xxx NODE_ENV=development npm run dev

## Lancer l'application (Windows)
setx DB_USERNAME xxx
setx DB_PASSWORD xxx
setx NODE_ENV=development
npm run dev

## Initialiser la base
POST sur http://localhost:5000/seeddb

## Accéder au back office
http://localhost:5000/shows

## Lien postman pour tester les apis
https://www.getpostman.com/collections/1a324ea6496f4dc8de41

## Tester l'api en prod
https://hackx-node.herokuapp.com/

## Ressources
Mise en forme des vues avec bootstrap : https://getbootstrap.com/docs/4.0/getting-started/introduction/
Création de la base sur : https://mlab.com
Déploiement de l'api chez heroku : https://www.heroku.com