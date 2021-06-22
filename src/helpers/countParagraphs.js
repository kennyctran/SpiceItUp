function countParagraphs(inputText = '') {
  if (!inputText.length) return 0;
  const sansEmptyLines = inputText.replace(/\n$/gm, '');
  return sansEmptyLines.split('\n').length;
}

export default countParagraphs;
