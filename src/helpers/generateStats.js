import countCharacters from './countCharacters';
import countWords from './countWords';
import countParagraphs from './countParagraphs';
import countBigrams from './countBigrams';
import checkSentences from './checkSentences';
import checkVanity from './checkVanity';

function generateStats(inputText = '', individualWords = []) {
  const sentences = checkSentences(individualWords) || 1;
  const vanity = `${(checkVanity(individualWords) / sentences) * 100}%`;
  return {
    characters: countCharacters(inputText),
    words: countWords(individualWords),
    paragraphs: countParagraphs(inputText),
    bigrams: countBigrams(individualWords),
    sentences,
    vanity
  }
}

export default generateStats;
