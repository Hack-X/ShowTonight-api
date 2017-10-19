# Installation de l'API ShowTonight

L'objectif dans ce workshop est de récupérer l'API d'exemple de ShowTonight pour commencer à jouer avec.

## Récupération de l'API

On va commencer par lancer un terminal faire un `git clone https://github.com/Hack-X/ShowTonight-api.git`.
Le code va maintenant est en local sur votre machine. Vous pouvez ouvrir le dossier ainsi récupéré avec votre éditeur (Sublime Text par exemple).

## Avant de lancer l'application
Vous allez maintenant entrer dans le dossier en faisant un `cd ShowTonight-api` puis vous allez devoir lancer l'installation des dépendances avec `npm install`

## Lancer l'application
Pour lancer l'application, vous avez besoin de vous connecter sur une base de données. Dans un temps 1, nous allons nous connecter sur une base de données à distance pour simplifier la situation, qui est hébergée sur [https://mlab.com/](https://mlab.com/) et dont nous allons vous donner les identifiants juste en dessous.

### Mac et Linux
`DB_USERNAME=hackx DB_PASSWORD=adrien NODE_ENV=development npm run dev`

### Windows
```bash
setx DB_USERNAME hackx
setx DB_PASSWORD adrien
setx NODE_ENV development
npm run dev
```

Vous allez maintenant tester que le serveur est bien lancé en vous rendant dans votre navigateur sur [http://localhost:5000/](http://localhost:5000/) qui correspond au backoffice.

## Effectuer les premières requêtes sur l'API

### Pour commencer
Pour commencer à effectuer des requêtes sur l'API, nous allons utiliser un logiciel du type de [Postman](https://www.getpostman.com/). Il nous simplifiera la vie pour envoyer des requêtes sur le serveur. A la fin du projet, ce sera le rôle de l'application mobile.

* Pour commencer, dans PostMan nous allons faire une requête de type `GET` sur l'API `http://localhost:5000/api`. C'est notre HelloWorld de l'API.
* Ensuite, vous allez récupérer une liste des spectacles en `GET` sur l'API `http://localhost:5000/api/shows`

### Ajouter un spectacle

Vous allez tester une requête `POST`, c'est à dire en envoyant des données. Voilà un exemple de contenu à mettre dans le body :

```
{
	"name": "Rock en seine",
	"venue": "Domaine national de saint-cloud",
	"description": "Festival",
	"capacity": 40000,
	"price": 39,
	"image": "https://www.parisvox.info/wp-content/uploads/2017/04/rock.jpg",
	"date": "2017-08-25"
}
```
Ensuite, il faut envoyer cette requête sur l'URL `http://localhost:5000/api/shows/create` avec ce contenu.


### Lien postman pour tester les apis
Pour tester toutes les APIs possibles, vous pouvez utiliser ce lien à importer dans Postman : `https://www.getpostman.com/collections/1a324ea6496f4dc8de41`

## Bonus : se créer sa propre base de données

En bonus, vous allez tenter de vous créer votre propre base de données.

### Option 1 : sur mlab.com

Pour ça, il faut vous créer un compte sur [https://mlab.com/](https://mlab.com/).
Ensuite, voilà ce qu'il faut faire :

* se créer un nouveau déploiement (Create new > ensuite je choisis souvent Amazon Web Services - notre API sera là bas aussi > Sandbox en europe) et je lui donne un nom, par exemple : 'show-tonight-db'
* ensuite je vais cliquer dessus, choisir l'onglet `Users` et ajouter un nouveau database users avec par exemple le nom `test-user` et le mot de passe `test-password` (c'est beau la sécurité informatique !). A cette étape là, il vous faut noter aussi l'URL de votre base de donnée, par exemple `ds119524.mlab.com:19524/show-tonight-db` dans mon cas.
* vous allez ensuite modifier le fichier `src/config/dev.js` et remplacer l'URL dans ce fichier par celle notée juste en dessous.
* vous pouvez maintenant relancer l'API en utilisant par exemple la commande sur Mac/Linux : `DB_USERNAME=test-user DB_PASSWORD=blabla NODE_ENV=development npm run dev`


### Option 2 : en local

Concrètement, il faut faire la même chose mais en téléchargeant MongoDB localement à cette adresse : [https://www.mongodb.com/download-center#community](https://www.mongodb.com/download-center#community)

## Ressources
Cours sur MongoDB : [https://openclassrooms.com/courses/guide-de-demarrage-pour-utiliser-mongodb](https://openclassrooms.com/courses/guide-de-demarrage-pour-utiliser-mongodb)
Mise en forme des vues avec bootstrap : [https://getbootstrap.com/docs/4.0/getting-started/introduction/](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
Création de la base sur : https://mlab.com
