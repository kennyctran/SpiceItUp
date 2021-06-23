import axios from 'axios';
import 'regenerator-runtime/runtime'

const methods = {
  fetchSynonyms: async (words = []) => {
    const allRequests = words.map((word) => {
      return axios.get('/api/synonyms', { params: { word }});
    });
    const  results  = await Promise.all(allRequests);
    const necessaryFields = results.map(({ data }) => {
      return {
        entry: data.entry,
        associations: data.associations_array
      }
    });
    return necessaryFields;
  }
}

export default methods;
