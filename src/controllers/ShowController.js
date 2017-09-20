// Controller de la route '/shows'
import _ from "lodash";
import Errors from "../helpers/Errors";

// Récupération du model
import ShowModel from "../models/ShowModel";

const getShows = () => {
  // On fait appel à la fonction getShows du model
  // Celle ci renvoie tous les shows présents en base
  return ShowModel.getShows()
  .then((data) => {
    // On récupère ici data qui est une liste de shows

    if (data === null) {
      // Si data est vide, nous renvoyons l'erreur 'noShowError'
      throw new Error('noShowError');
    }

    // On prépare ici la réponse que va renvoyer l'api, il s'agit d'un tableau
    let response = [];
    for (let show of data){
      // On parcours data. pour chaque élément, on garde les champs name, venue, description, capacity, price, image et date
      response[response.length] = {
        name: show.name,
        venue: show.venue,
        description: show.description,
        capacity: show.capacity,
        price: show.price,
        image: show.image,
        date: show.date,
      }
    }

    // Avant d'envoyer la réponse on la tri par ordre alphabétique croissant sur le champs name
    return _.sortBy(response, 'name');
  });
}

export default {
  shows: (req, res) => {
    getShows()
    .then((data) => {
      // data contient une liste de shows
      res.render('shows', { data });
    }, (err) => {
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  showsApi: (req, res) => {
    getShows()
    .then((data) => {
      // data contient maintenant la valeur retournée par la fonction _.sortBy
      // Si les opérations précédentes se sont bien passées, l'api renvoie une liste de shows
      res.send(data);
    }, (err) => {
      // Si une erreur a été renvoyée avec la fonctions throw new Error(), nous atterrissons ici
      res.status(Errors(err).code).send(Errors(err));
    });
  },
};