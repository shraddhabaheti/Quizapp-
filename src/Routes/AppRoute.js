import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Component/Login/Login'
import Navbardes from '../Component/Nav/Navbardes';
import Css from '../Container/CssQuiz/Css';
import FinalPage from '../Container/FinalPage';
import Quiz from '../Container/QuizStart/Quiz';

export default function AppRoute() {
  return (
    <div>
      <BrowserRouter>
        <Navbardes />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/quizStart" element={<Quiz />}>QuizStart</Route>
          <Route path="/cssQuiz" element={<Css />}>CssQuiz</Route>
          <Route path="/finalPage" element={<FinalPage />}>Final</Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
