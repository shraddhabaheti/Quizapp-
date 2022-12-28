import React, { useContext } from 'react'
import { QuizContext } from '../Question/Context';
import { QuestionBank } from '../Question/QuestionBank';
import { QuizHtmlContext } from '../Question/Context';
import { QuestionHtml } from '../Question/QuestionHtml';
import { useState } from 'react';
import './Quiz.css';
import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';
import { QuestionCss } from '../Question/QuestionCss';
import { useNavigate } from 'react-router-dom';
function EndScreen() {

  const { score, setScore, scores, setScores, scoreHtml, setScoreHtml, setGameState, userName } = useContext(QuizContext);
  const [show, setShow] = useState(false);
const navigate=useNavigate();
  const handleClose = () => {
    setShow(false);
       navigate('/finalPage')    
  }

  const handleShow = () => setShow(true);
  

  const restartQuiz = () => {
    setScores('0');
    setScore('0');
    setGameState('menu');
  }
  
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <p variant="secondary" onClick={handleShow}>
        Show Your score
      </p>
      <Modal show={show} onHide={handleClose} animation={false}>
        {
          QuestionBank ? <Modal.Body> Final score is   {score} out of {QuestionBank.length}</Modal.Body>
            : <Modal.Body> Final score Css  {scores} out of {QuestionCss.length}</Modal.Body>

        }
        <Modal.Footer>
          <Button variant="danger" style={{ width: '50%' }} onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="success" style={{ width: '50%' }} onClick={restartQuiz}>
            Try Again
          </Button> */}
        </Modal.Footer>
      </Modal>
      {/* <h3>Game Over your Final score is {score} out of {QuestionBank.length}</h3> */}
      {/* <button onClick={restartQuiz}>Restart Quiz</button> */}

    </div>
  )
}

export default EndScreen
