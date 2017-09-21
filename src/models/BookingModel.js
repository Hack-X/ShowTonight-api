// Model de la route '/bookings'

import mongoose from "mongoose";
mongoose.Promise = global.Promise;

let Schema = new mongoose.Schema({
  username: { type: String }, // le nom de l'utilisateur
  showId: { type: String },   // l'id du show
  seats: { type: Number },    // le nombre de places achetées
  createdAt: { type: Date },  // la date de création de la réservation
  updatedAt: { type: Date },  // la date de modification de la réservation
});

let Model = mongoose.model('Booking', Schema);

export default {
  getBookings: () => {
    return Model.find({}).exec();
  },

  getBooking: (_id) => {
    return Model.findOne({ _id }).exec();
  },

  createBooking: (booking) => {
    return Model.create({
      username: booking.username,
      showId: booking.showId,
      seats: booking.seats,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  },

  updateBooking: (_id, booking) => {
    return Model.findOneAndUpdate({ _id }, {
      username: booking.username,
      showId: booking.showId,
      seats: booking.seats,
      updatedAt: new Date(),
    }, {upsert: true}).exec();
  },

  deleteBookings: () => {
    return Model.remove({}).exec();
  },

  deleteBooking: (_id) => {
    return Model.remove({ _id }).exec();
  },
};