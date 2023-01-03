import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Boot from '../Boot';
import Login from '../Component/Login/Login'
import Navbardes from '../Component/Nav/Navbardes';
import Css from '../Container/CssQuiz/Css';
import FinalPage from '../Container/FinalPage';
import Admin from '../Container/QuizStart/Admin/Admin';
import Quiz from '../Container/QuizStart/Quiz';
import Dictatonary from '../Dictonary/Dictatonary';

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
          <Route path="/adminPage" element={<Admin />}>Final</Route>
          <Route path="/boot" element={<Boot />}>Final</Route>
          <Route path="/fly" element={<Dictatonary />}>Dictatonary</Route>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}
