// Controller de la route '/'

export default {
  // Controller des views
  index: (req, res) => {
    res.render('index');
  },

  // Controller des Apis
  indexApi: (req, res) => {
    res.status(200).send('hello world');
  },
};