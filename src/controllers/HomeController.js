// Controller de la route '/'

export default {
  index: (req, res) => {
    res.status(200).send('hello world');
  },
};