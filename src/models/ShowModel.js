// Model de la route '/shows'

import mongoose from "mongoose";
mongoose.Promise = global.Promise;

import SeedShows from "../helpers/SeedShows";

let Schema = new mongoose.Schema({
  name: { type: String },         // le nom du concert
  venue: { type: String },        // le nom de la salle
  description: { type: String },  // la description
  capacity: { type: Number },     // la capacité du show
  price: { type: Number },        // le prix
  image: { type: String },        // l'url de l'image
  date: { type: Date },           // la dte tu concert
});

let Model = mongoose.model('Show', Schema);

const ShowModel = {
  seedShowsDb: () => {
    let promises = [];
    for (let show of SeedShows){
      promises[promises.legth] = Model.create(show);
    }
    return Promise.all(promises);
  },

  getShows: () => {
    return Model.find({}).exec();
  },

  removeShows: () => {
    return Model.remove({}).exec();
  },
};

export default ShowModel;