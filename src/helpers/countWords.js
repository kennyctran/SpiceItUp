function countWords(inputTextWords = []) {
  return inputTextWords.length;
}

export default countWords;

// I: an array of words split into an array, some words might have punctuation
// O: INT representing the number of words
// C: none
// E: what to do about new lines and white spaces themselves? don't count I assume