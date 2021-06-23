import React, { useRef, useState } from 'react';
import generateStats from './helpers/generateStats';
import defaultStatsState from './default/defaultStatsState';
import { throttle } from 'lodash';
import api from './helpers/API';
import AssociationList from './components/AssociationList';
import Loading from './components/Loading';

const App = () => {
  const textToBeRead = useRef('');
  const [words, setWords] = useState([])
  const [stats, setStats] = useState(defaultStatsState);
  const [synonyms, setSynonyms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = throttle(() => {
    const individualWords = textToBeRead.current.value.split(/(\s|\n|\t|\r)/).filter((word) => word !== '' && word !== ' ');
    setWords(individualWords);
    setStats(generateStats(textToBeRead.current.value, individualWords));
  }, 300, { leading: false });

  const handleSubmit = async () => {
    setIsLoading(true);
    const result = await api.fetchSynonyms(words);
    setSynonyms(result);
    setStats(defaultStatsState);
    setIsLoading(false);
  }

  return ( isLoading ? <Loading /> :
    <>
      <div className="app">
        <h1>Spice It Up!</h1>
        <main className="inputAndStatsContainer">
          <div className="textInputContainer">
            <form>
              <textarea aria-label="text input" ref={textToBeRead} onChange={handleInputChange} />
              <button type="button" className="submitText" onClick={handleSubmit}>Spice It Up?</button>
            </form>
          </div>
          <div className="statsContainer">
            <div className="stats">
              <p>Characters: {stats.characters}</p>
              <p>Words: {stats.words}</p>
              <p>Paragraphs: {stats.paragraphs}</p>
              <p>Bigrams: {stats.bigrams}</p>
              <p>Sentences: {stats.sentences}</p>
              <p>Vanity Score: {stats.vanity}</p>
            </div>
          </div>
        </main>
        <section className="synonymsContainer">
          {synonyms.map((syn, i) => {
            return (
              <AssociationList
                key={i}
                entry={syn.entry}
                associations={syn.associations}
              />
            )
          })}
        </section>
      </div>
    </>
  );
}

export default App;
