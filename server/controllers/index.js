const { synonymsAPI } = require('../models');

module.exports = {
  fetchSynonyms: async (req, res) => {
    try {
      const resultingSynonyms = await synonymsAPI.fetchSynonyms(req.query.word);
      res.status(200).send(resultingSynonyms);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}