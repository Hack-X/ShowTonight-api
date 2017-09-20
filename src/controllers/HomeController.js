// Controller de la route '/'

export default {
  index: (req, res) => {
    res.render('index');
  },

  indexApi: (req, res) => {
    res.status(200).send('hello world');
  },
};