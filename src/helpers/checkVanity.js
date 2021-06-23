import cleansePunctuation from './cleansePunctuation';

function checkVanity(inputWords = []) {
  return inputWords.reduce((count, word) => {
    const cleansedWord = cleansePunctuation(word);
    if (cleansedWord === 'i' || cleansedWord === 'I') {
      return count + 1
    } else {
      return count;
    }
  }, 0);
}

export default checkVanity;
