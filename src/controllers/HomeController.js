// Controller de la route '/'

export default {
  // Controller des views
  getIndex: (req, res) => {
    res.render('index');
  },

  // Controller des Apis
  getIndexApi: (req, res) => {
    res.status(200).send('hello world');
  },
};