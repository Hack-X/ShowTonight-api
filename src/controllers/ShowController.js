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
      // Si data est vide, nous renvoyons l'erreur 'noShowsError'
      throw new Error('noShowsError');
    }

    // On prépare ici la réponse que va renvoyer l'api, il s'agit d'un tableau
    let response = [];
    for (let show of data){
      // On parcours data. pour chaque élément, on garde les champs name, venue, description, capacity, price, image et date
      response[response.length] = {
        id: show._id,
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

const getShow = (_id) => {
  // On fait appel à la fonction getShow du model
  // Celle ci renvoie le show dont l'id est _id
  return ShowModel.getShow(_id)
  .then((data) => {
    // On récupère ici data qui est une liste de shows

    if (data === null) {
      // Si data est vide, nous renvoyons l'erreur 'noShowError'
      throw new Error('noShowError');
    }

    // On prépare ici la réponse que va renvoyer l'api, il s'agit d'un élement
    let response = {
      id: data._id,
      name: data.name,
      venue: data.venue,
      description: data.description,
      capacity: data.capacity,
      price: data.price,
      image: data.image,
      date: data.date,
    };

    // Avant d'envoyer la réponse on la tri par ordre alphabétique croissant sur le champs name
    return response;
  });
}


export default {
  // Controller des views
  shows: (req, res) => {
    getShows()
    .then((data) => {
      // data contient une liste de shows
      res.render('shows', { data });
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  createShow: (req, res) => {
    res.render('createShow');
  },

  postCreateShow: (req, res) => {
    let show = {
      name: req.body.name,
      venue: req.body.venue,
      description: req.body.description,
      capacity: req.body.capacity,
      price: req.body.price,
      image: req.body.image,
      date: req.body.date,
    }
    console.log('coucou', show);

    res.redirect('/shows');
  },

  show: (req, res) => {
    getShow(req.params.id)
    .then((data) => {
      res.render('show', { data });
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  // Controller des Apis
  showsApi: (req, res) => {
    getShows()
    .then((data) => {
      // data contient maintenant la valeur retournée par la fonction _.sortBy
      // Si les opérations précédentes se sont bien passées, l'api renvoie une liste de shows
      res.send(data);
    }, (err) => {
      // Si une erreur a été renvoyée avec la fonctions throw new Error(), nous atterrissons ici
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  createShowApi: (req, res) => {
    console.log(req.body);
    res.send('ok');

//    getShow(req.params.id)
//    .then((data) => {
//      res.send(data);
//    }, (err) => {
//      console.log(err);
//      res.status(Errors(err).code).send(Errors(err));
//    });
  },

  showApi: (req, res) => {
    getShow(req.params.id)
    .then((data) => {
      res.send(data);
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },
};