import cleansePunctuation from './cleansePunctuation';

function checkVanity(inputWords = []) {
  return inputWords.reduce((count, word) => {
    if (cleansePunctuation(word).match(/i/gi)) {
      return count + 1
    } else {
      return count;
    }
  }, 0);
}

export default checkVanity;
