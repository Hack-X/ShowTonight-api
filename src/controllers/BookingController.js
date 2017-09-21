// Controller de la route '/bookings'
import _ from "lodash";
import Errors from "../helpers/Errors";

// Récupération du model
import BookingModel from "../models/BookingModel";
import ShowModel from "../models/ShowModel";

const bookings = () => {
  return BookingModel.getBookings()
  .then((data) => {
    if (data === null) {
      throw new Error('noBookingsError');
    }

    let response = [];
    for (let booking of data){
      response[response.length] = {
        id: booking._id,
        username: booking.username,
        showId: booking.showId,
        seats: booking.seats,
        createdAt: booking.createdAt,
        updatedAt: booking.updatedAt,
      }
    }
    return _.sortBy(response, 'username');
  });
}

const booking = (_id) => {
  return BookingModel.getBooking(_id)
  .then((data) => {
    if (data === null) {
      throw new Error('noBookingError');
    }

    let response = {
      id: data._id,
      username: data.username,
      showId: data.showId,
      seats: data.seats,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
    return response;
  });
}

const createBooking = (booking) => {
  return BookingModel.createBooking(booking);
}

const updateBooking = (id, booking) => {
  return BookingModel.updateBooking(id, booking);
}

const deleteBooking = (id) => {
  return BookingModel.deleteBooking(id);
}

export default {
  // Controller des views
  getBookings: (req, res) => {
    bookings()
    .then((data) => {
      res.render('booking/bookings', { bookings: data });
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  getBooking: (req, res) => {
    booking(req.params.id)
    .then((data) => {
      res.render('booking/booking', { booking: data });
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  getCreateBooking: (req, res) => {
    ShowModel.getShows()
    .then((data) => {
      res.render('booking/createBooking', { shows: data });
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  postCreateBooking: (req, res) => {
    let booking = {
      username: req.body.username,
      showId: req.body.showId,
      seats: req.body.seats,
    };

    createBooking(booking)
    .then((data) => {
      res.redirect('/bookings');
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  getUpdateBooking: (req, res) => {
    Promise.all([
      booking(req.params.id),
      ShowModel.getShows(),
    ])
    .then((data) => {
      res.render('booking/updateBooking', { booking: data[0], shows: data[1] });
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  postUpdateBooking: (req, res) => {
    let booking = {
      username: req.body.username,
      showId: req.body.showId,
      seats: req.body.seats,
    };

    updateBooking(req.params.id, booking)
    .then((data) => {
      res.redirect('/bookings');
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  getDeleteBooking: (req, res) => {
    deleteBooking(req.params.id)
    .then((data) => {
      res.redirect('/bookings');
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  // Controller des Apis
  getBookingsApi: (req, res) => {
    bookings()
    .then((data) => {
      res.send(data);
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  getBookingApi: (req, res) => {
    booking(req.params.id)
    .then((data) => {
      res.send(data);
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  postCreateBookingApi: (req, res) => {
    let booking = {
      username: req.body.username,
      showId: req.body.showId,
      seats: req.body.seats,
    };

    createBooking(booking)
    .then((data) => {
      res.send('ok');
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  postUpdateBookingApi: (req, res) => {
    let booking = {
      username: req.body.username,
      showId: req.body.showId,
      seats: req.body.seats,
    };

    updateBooking(req.params.id, booking)
    .then((data) => {
      res.send('ok');
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },

  postDeleteBookingApi: (req, res) => {
    deleteBooking(req.params.id)
    .then((data) => {
      res.send('ok');
    }, (err) => {
      console.log(err);
      res.status(Errors(err).code).send(Errors(err));
    });
  },
};
