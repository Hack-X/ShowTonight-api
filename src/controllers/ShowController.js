// Controller de la route '/shows'
import _ from "lodash";
import Errors from "../helpers/Errors";

// Récupération du model
import ShowModel from "../models/ShowModel";

const shows = () => {
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
        lat: show.lat,
        lng: show.lng
      }
    }

    // Avant d'envoyer la réponse on la tri par ordre alphabétique croissant sur le champs name
    return _.sortBy(response, 'name');
  });
}

const show = (_id) => {
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
      lat: data.lat,
      lng: data.lng
    };
    return response;
  });
}

const createShow = (show) => {
  // On fait appel à la fonction createShow du model
  // Celle ci renvoie le show dont l'id est _id
  return ShowModel.createShow(show);
}

const updateShow = (id, show) => {
  // On fait appel à la fonction updateShow du model
  // Celle ci renvoie le show dont l'id est _id
  return ShowModel.updateShow(id, show);
}

const deleteShow = (id) => {
  // On fait appel à la fonction deleteShow du model
  // Celle ci renvoie le show dont l'id est _id
  return ShowModel.deleteShow(id);
}

export default {
  // Controller des views
  getShows: (req, res) => {
    shows()
    .then((data) => {
      // data contient une liste de shows
      res.render('show/shows', { shows: data });
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  getShow: (req, res) => {
    show(req.params.id)
    .then((data) => {
      res.render('show/show', { show: data });
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  getCreateShow: (req, res) => {
    res.render('show/createShow');
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
      lat: req.body.lat,
      lng: req.body.lng
    };

    createShow(show)
    .then((data) => {
      res.redirect('/shows');
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  getUpdateShow: (req, res) => {
    show(req.params.id)
    .then((data) => {
      res.render('show/updateShow', { show: data });
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  postUpdateShow: (req, res) => {
    let show = {
      name: req.body.name,
      venue: req.body.venue,
      description: req.body.description,
      capacity: req.body.capacity,
      price: req.body.price,
      image: req.body.image,
      date: req.body.date,
      lat: req.body.lat,
      lng: req.body.lng
    };

    updateShow(req.params.id, show)
    .then((data) => {
      res.redirect('/shows');
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  getDeleteShow: (req, res) => {
    deleteShow(req.params.id)
    .then((data) => {
      res.redirect('/shows');
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  // ************ API FROM THERE ************ //

  // Controller des Apis
  getShowsApi: (req, res) => {
    shows()
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

  getShowApi: (req, res) => {
    show(req.params.id)
    .then((data) => {
      res.send(data);
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  postCreateShowApi: (req, res) => {
    let show = {
      name: req.body.name,
      venue: req.body.venue,
      description: req.body.description,
      capacity: req.body.capacity,
      price: req.body.price,
      image: req.body.image,
      date: req.body.date,
      lat: req.body.lat,
      lng: req.body.lng
    };

    createShow(show)
    .then((data) => {
      res.send('ok');
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  postUpdateShowApi: (req, res) => {
    let show = {
      name: req.body.name,
      venue: req.body.venue,
      description: req.body.description,
      capacity: req.body.capacity,
      price: req.body.price,
      image: req.body.image,
      date: req.body.date,
    };

    updateShow(req.params.id, show)
    .then((data) => {
      res.send('ok');
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  postDeleteShowApi: (req, res) => {
    deleteShow(req.params.id)
    .then((data) => {
      res.send('ok');
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },
};
