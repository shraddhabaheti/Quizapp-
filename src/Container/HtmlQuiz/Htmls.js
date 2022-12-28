import React, { useContext, useState } from 'react'
import { QuizContext } from '../Question/Context';
import { QuestionBank } from '../Question/QuestionBank'
import { QuestionCss } from '../Question/QuestionCss';
import { QuestionHtml } from '../Question/QuestionHtml';


function Htmls() {
    const { score, scoreHtml, setScoreHtml, setGameState } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState();
    const [disable, setDisable] = useState(true);
    const hoursMinSecs = { minutes: 0, seconds: 10 }
    const nextQuestion = () => {
        if (QuestionHtml[currQuestion].asnwer == optionChosen) {
            setScoreHtml(scoreHtml + 1)
        }
        setCurrQuestion(currQuestion + 1)
        setDisable(true)
    }

    const chooseOption = (option) => {
        setOptionChosen(option);
        setDisable(false);
    };

    const finisQuiz = () => {
        if (QuestionHtml[currQuestion].asnwer == optionChosen) {
            setScoreHtml(score + 1)
        }
        setGameState("endScreen")
    }
    return (
        <div className='Quiz'>

            <h1 className='currentQuestion'>{QuestionHtml[currQuestion].prompt}</h1>

            <div className='btt1'>
                <button onClick={() => chooseOption('A')}>{QuestionHtml[currQuestion].optionA}</button>
                <button onClick={() => chooseOption('B')}>{QuestionHtml[currQuestion].optionB}</button>
                <button onClick={() => chooseOption('C')}>{QuestionHtml[currQuestion].optionC}</button>
                <button onClick={() => chooseOption('D')}>{QuestionHtml[currQuestion].optionD}</button>
            </div>
            {currQuestion == QuestionHtml.length - 1 ? (<button onClick={finisQuiz}>
                Finish
            </button>) : (<button disabled={disable} onClick={nextQuestion}>Next Question</button>)}

        </div>
    )
}

export default Htmls;

