function checkSentences (inputWords = []) {
  const punctuations = ['.', '!', '?']
  return inputWords.reduce((count, word) => {
    const possiblePunctuation = word[word.length - 1]
    if (punctuations.indexOf(possiblePunctuation) > -1) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
}

export default checkSentences;
