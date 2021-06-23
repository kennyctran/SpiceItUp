const axios = require('axios');
require('dotenv').config();

module.exports = {
  fetchSynonyms: async (word = '') => {
    const options = {
      method: 'GET',
      url: process.env.URL,
      params: {entry: word},
      headers: {
        'x-rapidapi-key': process.env.RAPID_API_KEY,
        'x-rapidapi-host': process.env.RAPID_API_HOST
      }
    };
    const { data } = await axios.request(options);
    return data;
  }
}



