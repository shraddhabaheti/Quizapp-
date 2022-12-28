import React, { useContext, useState } from 'react'
import { QuizContext } from '../Question/Context';
import { QuestionBank } from '../Question/QuestionBank'
import { QuestionCss } from '../Question/QuestionCss';
import { QuestionHtml } from '../Question/QuestionHtml';


function Css1() {
    const { scores, setScores, setGameState } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState();
    const [disable, setDisable] = useState(true);
    const hoursMinSecs = { minutes: 0, seconds: 10 }
    const nextQuestion = () => {
        if (QuestionCss[currQuestion].asnwer == optionChosen) {
            setScores(scores + 1)
        }
        setCurrQuestion(currQuestion + 1)
        setDisable(true)
    }

    const chooseOption = (option) => {
        setOptionChosen(option);
        setDisable(false);
    };

    const finisQuiz = () => {
        if (QuestionCss[currQuestion].asnwer == optionChosen) {
            setScores(scores + 1)
        }
        setGameState("endScreen")
    }
    return (
        <div className='Quiz'>

            <h1 className='currentQuestion'>{QuestionCss[currQuestion].prompt}</h1>

            <div className='btt1'>
                <button onClick={() => chooseOption('A')}>{QuestionCss[currQuestion].optionA}</button>
                <button onClick={() => chooseOption('B')}>{QuestionCss[currQuestion].optionB}</button>
                <button onClick={() => chooseOption('C')}>{QuestionCss[currQuestion].optionC}</button>
                <button onClick={() => chooseOption('D')}>{QuestionCss[currQuestion].optionD}</button>
            </div>
            {currQuestion == QuestionCss.length - 1 ? (<button onClick={finisQuiz}>
                Finish
            </button>) : (<button disabled={disable} onClick={nextQuestion}>Next Question</button>)}

        </div>
    )
}

export default Css1

