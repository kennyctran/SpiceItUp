import cleansePunctuation from './cleansePunctuation';

function countBigrams(inputWords = []) {
  if (inputWords.length <= 1) return 0;

  const uniqueBigrams = new Set();
  let left = 0;
  let right = 1;

  while(right < inputWords.length) {
    const firstWord = cleansePunctuation(inputWords[left]).toLowerCase();
    const secondWord = cleansePunctuation(inputWords[right]).toLowerCase();
    const combined = firstWord + secondWord;

    if (!uniqueBigrams.has(combined)) {
      uniqueBigrams.add(combined);
    }
    left++;
    right++;
  }
  return uniqueBigrams.size;
}

export default countBigrams;
