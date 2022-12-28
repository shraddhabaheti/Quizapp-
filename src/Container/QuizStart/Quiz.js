import { useState } from 'react';
import Mainmenu from './Mainmenu';
import EndScreen from './EndScreen';
import { QuizContext } from '../Question/Context';
import Quizs from './Quizs';
import './Quiz.css';
function Quiz() {
  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);
  localStorage.setItem("QuizScore", score)

  return (
    <div className="App">
      <h1 className='h1'>Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <Mainmenu />}
        {gameState === "endScreen" && <EndScreen />}
        {gameState === "quiz" && <Quizs />}
      </QuizContext.Provider>
    </div>
  );
}

export default Quiz;
