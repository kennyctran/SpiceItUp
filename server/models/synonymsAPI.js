const axios = require('axios');


module.exports = {
  fetchSynonyms: async (word = '') => {
    const options = {
      method: 'GET',
      url: 'https://twinword-word-associations-v1.p.rapidapi.com/associations/',
      params: {entry: word},
      headers: {
        'x-rapidapi-key': '3f5f84ebd2msha9cabf3c3dccc52p113198jsnf7b5068c48df',
        'x-rapidapi-host': 'twinword-word-associations-v1.p.rapidapi.com'
      }
    };
    const { data } = await axios.request(options);
    return data;
  }
}



