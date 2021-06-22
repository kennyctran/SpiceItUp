import checkSentences from '../checkSentences';
import { TEXT } from '../../../constants/test.constants.js';

describe('checkSentences function', () => {
  it('should count words ending with periods as a sentences', () => {
    const words = ['and', 'I', 'say', 'bye.'];
    expect(checkSentences(words)).toBe(1);
  });

  it('should return 0 for no sentences', () => {
    const words = ['yep', 'no'];
    expect(checkSentences(words)).toBe(0);
  });

  it('should count question marks', () => {
    const words = ['and', 'I', 'say', 'bye?'];
    expect(checkSentences(words)).toBe(1);
  });

  it('should count exclamation points', () => {
    const words = ['and', 'I', 'say', 'bye.'];
    expect(checkSentences(words)).toBe(1);
  });

  it('should not count commas', () => {
    const example = ['and', 'I', 'said,', 'no!'];
    expect(checkSentences(example)).toBe(1);
  });

  it('should work count multiple sentences', () => {
    const words = TEXT().split(/(\s|\n)/);
    expect(checkSentences(words)).toBe(5);
  });
});
