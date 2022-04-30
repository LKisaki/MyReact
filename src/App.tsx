import React, { useState } from 'react';
import { Tweet } from "./components/Tweet"

import './components/App.css';

function App() {

  // cria uma variável monitorada pelo seu componente
  //toda vez que a variável muda o componente é renderizado
  // <string> -> para typescript
  const [tweets, setTweets] = useState <string[]>([
    'Tweet-1',
    'Tweet-2',
    'Tweet-3',
    'Tweet-4',
    'Tweet-5'
  ]) 
  
  // criar uma dinamica
  
  function createTweet(){
    // adiciona a string '+1'
    setTweets([...tweets, '+1' ])
  }
  
  return (
    <div>
      {/* Percorre cada tweet e retornar algo */}
     {  tweets.map(tweet => {
        return <Tweet text={tweet} />
     })}

     <button
      onClick={createTweet}
      style={{
        backgroundColor: '#553ae9',
        color: '#ececec',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
        border: 0,
        padding: '1em 1.5em',
        borderRadius: '9px',
      }}
      >Adicionar tweet</button>
   </div>
  );
}

export default App
