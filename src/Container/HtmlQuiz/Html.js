import { useState } from 'react';
import Mainmenu from '../QuizStart/Mainmenu';
import EndScreen from '../QuizStart/EndScreen';
import { QuizContext } from '../Question/Context';

import Htmls from './Htmls';


function Html() {
  const [gameState, setGameState] = useState('menu');
  const [scoreHtml, setScoreHtml] = useState(0);
  let scoreGame = localStorage.setItem("scoreHtml", scoreHtml)

  return (
    <div className="App">
      <h1 className='h1'>Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState, scoreHtml, setScoreHtml }}>
        {gameState === "menu" && <Mainmenu />}
        {gameState === "endScreen" && <EndScreen />}
        {gameState === "quiz" && <Htmls />}
      </QuizContext.Provider>
    </div>
  );
}

export default Html;
