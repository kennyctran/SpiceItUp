import React from 'react';

const App = () => {
  return (
    <>
      <main>
        <div className="textInputContainer">
          <form>
            <textarea aria-label="text input" />
            <button type="button" className="submitText">Submit</button>
          </form>
        </div>
        <div className="statsContainer">
          <p>Characters: </p>
          <p>Words: </p>
          <p>Paragraphs: </p>
          <p>Bigrams: </p>
          <p>Sentences: </p>
          <p>Vanity Score: </p>
          <ul>
            {/* create list of top 10 or 5 most used words */}
          </ul>
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
