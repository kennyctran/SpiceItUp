function cleansePunctuation(nonSanitizedWord = '') {
  return nonSanitizedWord.replace(/(\!|\.|\?|\n|\s|\t|\r)/g, '');
}

export default cleansePunctuation;
