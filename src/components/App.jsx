import React from "react";
import Dictionary from "./Dictionary"
import emojipedia from "../emojipedia.js"


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(prop => (
        <Dictionary
          key={prop.id}
          emoji={prop.emoji}
          name={prop.name}
          meaning={prop.meaning}

          />
        ))};
      </dl>
    </div>
  );
}

export default App;

