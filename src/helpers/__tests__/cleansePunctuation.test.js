import cleansePunctuation from '../cleansePunctuation';

describe('cleansePunctuation function', () => {
  it('should take in a string with punctuation and return a non-punctuated version', () => {
    expect(cleansePunctuation('end.')).toBe('end');
  });

  it('should also work on words with question marks', () => {
    expect(cleansePunctuation('end?')).toBe('end');
  });

  it('should also work on words with exclamation points', () => {
    expect(cleansePunctuation('end!')).toBe('end');
  });

  it('should remove new lines', () => {
    expect(cleansePunctuation('end\n')).toBe('end');
    expect(cleansePunctuation('end\n\n')).toBe('end');
  });

  it('should remove white spaces', () => {
    expect(cleansePunctuation('end ')).toBe('end');
    expect(cleansePunctuation('end\n \n')).toBe('end');
  });

  it('should not affect words that do not have punctuation', () => {
    expect(cleansePunctuation('end')).toBe('end');
  });
});
