// Controller de la route '/users'
import _ from "lodash";
import Errors from "../helpers/Errors";

// Récupération du model
import UserModel from "../models/UserModel";

export default {
  users: (req, res) => {
    // On fait appel à la fonction getUsers du model
    // Celle ci renvoie tous les utilisateurs présents en base
    UserModel.getUsers({})
    .then((data) => {
      // On récupère ici data qui est une liste d'utilisateurs

      if (data === null) {
        // Si data est vide, nous renvoyons l'erreur 'noUserError'
        throw new Error('noUserError');
      }

      // On prépare ici la réponse que va renvoyer l'api, il s'agit d'un tableau
      let response = [];
      for (let user of data){
        // On parcours data. pour chaque élément, on garde l'email, le prénom et le nom
        response[response.length] = {
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
        }
      }

      // Avant d'envoyer la réponse on la tri par ordre alphabétique croissant sur le champs email
      return _.sortBy(response, 'email');
    })
    .then((data) => {
      // data contient maintenant la valeur retournée par la fonction _.sortBy
      // Si les opérations précédentes se sont bien passées, l'api renvoie une liste d'utilisateurs
      res.send(data);
    }, (err) => {
      // Si une erreur a été renvoyée avec la fonctions throw new Error(), nous atterrissons ici
      res.status(Errors(err).code).send(Errors(err));
    });
  },
};