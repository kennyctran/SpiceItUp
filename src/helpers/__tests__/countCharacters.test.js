import countCharacters from '../countCharacters';
import { TEXT } from '../../../constants/test.constants.js';

describe('countCharacters function', () => {
  it('should take in a string and return the number of characters', () => {
    expect(countCharacters('!')).toBe(1);
  });

  it ('should count the characters in a word', () => {
    expect(countCharacters('wOrD')).toBe(4);
  });

  it('should include whitespace in the count', () => {
    expect(countCharacters('this is a sentence.')).toBe(19);
    expect(countCharacters('Hello there, friend! This is a test text that I have created.')).toBe(61);
  });

  it('should include newlines in the count', () => {
    expect(countCharacters(`this\n\nhello`)).toBe(11);
  });

  it('should parse multiple paragraphs and sentences', () => {
    expect(countCharacters(TEXT())).toBe(180);
  });
});
