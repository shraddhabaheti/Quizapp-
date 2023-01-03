import React, { useContext, useState } from 'react'
import { QuizContext } from '../Question/Context';
import { QuestionBank } from '../Question/QuestionBank'
import { QuestionCss } from '../Question/QuestionCss';
import { QuestionHtml } from '../Question/QuestionHtml';

import './Quiz.css';
function Quizs() {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState();
    const [disable, setDisable] = useState(true);
    const hoursMinSecs = { minutes: 0, seconds: 10 }
    const nextQuestion = () => {
        if (QuestionBank[currQuestion].asnwer == optionChosen) {
            setScore(score + 1)
        }
        setCurrQuestion(currQuestion + 1)
        setDisable(true)

    }
    const chooseOption = (option) => {
        setOptionChosen(option);
        setDisable(false);
    };

    const finisQuiz = () => {
        if (QuestionBank[currQuestion].asnwer == optionChosen) {
            setScore(score + 1)
        }
        setGameState("endScreen")
    }
    return (
        <div className='Quiz'>
          
            <h1 className='currentQuestion'>{QuestionBank[currQuestion].prompt}</h1>
        
            <div className='btt1'> 
                <button onClick={() => chooseOption('A')}>{QuestionBank[currQuestion].optionA}</button>
                <button onClick={() => chooseOption('B')}>{QuestionBank[currQuestion].optionB}</button>
                <button onClick={() => chooseOption('C')}>{QuestionBank[currQuestion].optionC}</button>
                <button onClick={() => chooseOption('D')}>{QuestionBank[currQuestion].optionD}</button>
            </div>
            {currQuestion == QuestionBank.length - 1 ? (<button onClick={finisQuiz}>
                Finish
            </button>) : (<button disabled={disable} onClick={nextQuestion}>Next Question</button>)}

        </div>
    )
}

export default Quizs

