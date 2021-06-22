import countCharacters from './countCharacters';
import countWords from './countWords';
import countParagraphs from './countParagraphs';
import countBigrams from './countBigrams';
import checkSentences from './checkSentences';
import checkVanity from './checkVanity';
import { isNaN } from 'lodash';

function generateStats(inputText = '', individualWords = []) {
  const sentences = checkSentences(individualWords);
  const vanity = checkVanity(individualWords);
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
