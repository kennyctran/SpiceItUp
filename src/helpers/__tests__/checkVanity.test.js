import checkVanity from '../checkVanity';

describe('checkVanity function', () => {
  it('should count the number of i\'s in the input', () => {
    const example = ['I', 'am', 'a', 'cat'];
    expect(checkVanity(example)).toBe(1);
  });

  it('should ignore case', () => {
    const example = ['I', 'am', 'i', 'cat'];
    expect(checkVanity(example)).toBe(2);
  });

  it('should ignore punctuation', () => {
    const example = ['i?', 'am', 'cool', 'I\n', 'cat'];
    expect(checkVanity(example)).toBe(2);
  });
});