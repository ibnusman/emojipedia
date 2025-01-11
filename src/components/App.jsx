import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map((emojis) => (
        <Entry
          key={emojis.id}
          emoji={emojis.emoji}
          name={emojis.name}
          meaning={emojis.meaning}
        />
      ))}
    </div>
  );
}

export default App;
