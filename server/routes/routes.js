const router = require('express').Router();
const controllers = require('../controllers');

router.get('/synonyms', controllers.fetchSynonyms);

module.exports = router;
