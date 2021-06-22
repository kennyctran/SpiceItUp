import countParagraphs from '../countParagraphs';
import { TEXT } from '../../../constants/test.constants.js';

describe('countParagraphs function', () => {
  it('should return 0 for an empty string as there are no characters and no paragraphs', () => {
    expect(countParagraphs('')).toBe(0);
  });

  it('should count paragraphs when provided as newlines', () => {
    const newLinesWithoutEmptyLines = `This is one paragraph.\nThis is a different paragraph.\nAnd another!`
    expect(countParagraphs(newLinesWithoutEmptyLines)).toBe(3);
    expect(countParagraphs(TEXT())).toBe(3);
  });

  it('should count paragraphs without counting empty lines', ()=> {
    const newLinesWithEmptyLines = `This is one paragraph.\n\nThis is a different paragraph.\nAnd another!`;
    expect(countParagraphs(newLinesWithEmptyLines)).toBe(3);
  });

  it('should handle multiple empty lines', () => {
    const multipleEmptyLines = `This is one.\n\n\n\n\nAnd another one\nThen third.`;
    expect(countParagraphs(multipleEmptyLines)).toBe(3);
  });
});
