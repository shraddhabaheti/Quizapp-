import { useState } from 'react';
import Mainmenu from '../QuizStart/Mainmenu';

import { QuizContext } from '../Question/Context';

import Css1 from './Css1';
import EndScreen from '../QuizStart/EndScreen';

function Css() {
  const [gameState, setGameState] = useState('menu');
  const [scores, setScores] = useState(0);
  localStorage.setItem("CssQuestionScore", scores)

  return (
    <div className="App">
      <h1 className='h1'>Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState, scores, setScores }}>
        {gameState === "menu" && <Mainmenu />}
        {gameState === "endScreen" && <EndScreen />}
        {gameState === "quiz" && <Css1 />}
      </QuizContext.Provider>
    </div>
  );
}

export default Css;
