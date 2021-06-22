import countCharacters from './countCharacters';
import countWords from './countWords';
import countParagraphs from './countParagraphs';
import countBigrams from './countBigrams';
import checkSentences from './checkSentences';
import checkVanity from './checkVanity';

function generateStats(inputText = '') {
  console.log(inputText)
  const individualWords = inputText.split(/(\s|\n|\t|\r)/).filter((word) => word !== '' && word !== ' ');
  const sentences = checkSentences(individualWords);
  return {
    characters: countCharacters(inputText),
    words: countWords(individualWords),
    paragraphs: countParagraphs(inputText),
    bigrams: countBigrams(individualWords),
    sentences,
    vanity: ((checkVanity(individualWords) / sentences) * 100)
  }
}

export default generateStats;
