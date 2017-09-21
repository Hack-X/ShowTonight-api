// Model de la route '/shows'

import mongoose from "mongoose";
mongoose.Promise = global.Promise;

import ShowSeeds from "../helpers/ShowSeeds";

let Schema = new mongoose.Schema({
  name: { type: String },         // le nom du concert
  venue: { type: String },        // le nom de la salle
  description: { type: String },  // la description
  capacity: { type: Number },     // la capacité du show
  price: { type: Number },        // le prix
  image: { type: String },        // l'url de l'image
  date: { type: String },         // la date du concert
});

let Model = mongoose.model('Show', Schema);

export default {
  seedShows: () => {
    let promises = [];
    for (let show of ShowSeeds){
      promises[promises.legth] = Model.create(show);
    }
    return Promise.all(promises);
  },

  getShows: () => {
    return Model.find({}).exec();
  },

  getShow: (_id) => {
    return Model.findOne({ _id }).exec();
  },

  createShow: (show) => {
    return Model.create({
      name: show.name,
      venue: show.venue,
      description: show.description,
      capacity: show.capacity,
      price: show.price,
      image: show.image,
      date: show.date,
    });
  },

  updateShow: (_id, show) => {
    return Model.findOneAndUpdate({ _id }, {
      name: show.name,
      venue: show.venue,
      description: show.description,
      capacity: show.capacity,
      price: show.price,
      image: show.image,
      date: show.date,
    }, {upsert: true}).exec();
  },

  deleteShows: () => {
    return Model.remove({}).exec();
  },

  deleteShow: (_id) => {
    return Model.remove({ _id }).exec();
  },
};