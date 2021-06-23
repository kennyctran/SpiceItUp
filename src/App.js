import React, { useRef, useState } from 'react';
import generateStats from './helpers/generateStats';
import defaultStatsState from './default/defaultStatsState';
import { throttle } from 'lodash';
import api from './helpers/API';
import AssociationList from './components/AssociationList';

const App = () => {
  const textToBeRead = useRef('');
  const [words, setWords] = useState([])
  const [stats, setStats] = useState(defaultStatsState);
  const [synonyms, setSynonyms] = useState([]);

  const handleInputChange = throttle(() => {
    const individualWords = textToBeRead.current.value.split(/(\s|\n|\t|\r)/).filter((word) => word !== '' && word !== ' ');
    setWords(individualWords);
    setStats(generateStats(textToBeRead.current.value, individualWords));
  }, 300, { leading: false });

  const handleSubmit = async () => {
    const result = await api.fetchSynonyms(words);
    setSynonyms(result);
  }

  return (
    <>
      <main>
        <div className="textInputContainer">
          <form>
            <textarea aria-label="text input" ref={textToBeRead} onChange={handleInputChange}/>
            <button type="button" className="submitText" onClick={handleSubmit}>Submit</button>
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
          <div className="associatedItem">
            {synonyms.map((syn, i) => {
              return (
                <AssociationList
                  key={i}
                  entry={syn.entry}
                  associations={syn.associations}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
