import React, { useRef, useState } from 'react';
import generateStats from './helpers/generateStats';
import defaultStatsState from './default/defaultStatsState';
import { throttle } from 'lodash';

const App = () => {
  const textToBeRead = useRef('');
  const [words, setWords] = useState([])
  const [stats, setStats] = useState(defaultStatsState);

  const handleInputChange = throttle(() => {
    const individualWords = textToBeRead.current.value.split(/(\s|\n|\t|\r)/).filter((word) => word !== '' && word !== ' ');
    setWords(individualWords);
    setStats(generateStats(textToBeRead.current.value, individualWords));
  }, 300, { leading: false });

  return (
    <>
      <main>
        <div className="textInputContainer">
          <form>
            <textarea aria-label="text input" ref={textToBeRead} onChange={handleInputChange}/>
            <button type="button" className="submitText">Submit</button>
          </form>
        </div>
        <div className="statsContainer">
          <p>Characters: {stats.characters}</p>
          <p>Words: {stats.words}</p>
          <p>Paragraphs: {stats.paragraphs}</p>
          <p>Bigrams: {stats.bigrams}</p>
          <p>Sentences: {stats.sentences}</p>
          <p>Vanity Score: {stats.vanity}</p>
        </div>
      </main>
      <section>
        <div className="replacedTextContainer">

        </div>
      </section>
    </>
  );
}

export default App;
