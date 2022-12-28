import React, { useContext } from 'react'
import { QuizContext } from '../Question/Context';
import './Quiz.css';

function Mainmenu() {
  const { setGameState } = useContext(QuizContext);

  return (
    <div className='Menu'>
      <button onClick={() => setGameState('quiz')}> start Quiz </button>
    </div>
  )
}

export default Mainmenu

