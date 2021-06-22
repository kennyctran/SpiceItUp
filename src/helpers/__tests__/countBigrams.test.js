import countBigrams from '../countBigrams';

describe('countBigrams function', () => {
  it('should return 0 if there are less than 2 words', () => {
    expect(countBigrams([])).toBe(0);
    expect(countBigrams(['one'])).toBe(0);
  });

  it('should return 1 if there are only two words', () => {
    expect(countBigrams(['one', 'two'])).toBe(1);
    expect(countBigrams(['one', 'one'])).toBe(1);
  });

  it('should count an array of all bigrams', () => {
    const allBigrams = ['one', 'two', 'three', 'four'];
    expect(countBigrams(allBigrams)).toBe(3);
  });

  it('should handle bigrams with punctuation', () => {
    const messyBigrams = ['one   ', 'two!', 'two\n', 'one   ', 'two.'];
    expect(countBigrams(messyBigrams)).toBe(3);
  });
});
