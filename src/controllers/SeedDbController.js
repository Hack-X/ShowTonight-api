// Controller de la route '/shows'
import Errors from "../helpers/Errors";

// Récupération du model
import ShowModel from "../models/ShowModel";

export default {
  seedDb: (req, res) => {
    return Promise.all([
      ShowModel.deleteShows(),
    ])
    .then((data) => {
      return Promise.all([
        ShowModel.seedShowsDb(),
      ]);
    })
    .then((data) => {
      res.send('ok');
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },
};