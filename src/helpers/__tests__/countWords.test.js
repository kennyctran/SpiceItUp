import countWords from '../countWords';

describe('countWords function', () => {
  it('should count the number of words in an array', () => {
    expect(countWords(['three', 'words', 'here'])).toBe(3);
  });

  it('should count words tied to punctuation as a word', () => {
    expect(countWords(['words,', 'with', 'punctuation!'])).toBe(3);
  });
});
