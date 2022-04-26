import React from "react";
import Dictionary from "./Dictionary"
import emojipedia from "../emojipedia.js"



function createCard(prop) {
  return (
    <Dictionary
      key={prop.id}
      emoji={prop.emoji}
      name={prop.name}
      meaning={prop.meaning}
/>


  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
    {emojipedia.map(createCard)}
    </div>
  );
}

export default App;
