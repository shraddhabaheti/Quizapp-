import React from 'react'
import { Link } from 'react-router-dom'
import './Boot.css'
import blub from '../src/image/splash.jpg'
export default function Boot() {

  return (
    <div className='container'>
      <div className='row' >
         <div className='col-12' id="header">
           <h1>Header Class</h1>
         </div>
       </div>
       <div className='row'>
         <div className='col-12' id="menu">
           <ul>
             <li><Link className='link' to="/">Login</Link></li>
            <li><Link className='link' to="/quizStart">QuizStart</Link></li>
        
            <li><Link className='link' to="/cssQuiz">cssQuestion</Link></li>
          
           <li> <Link className='link' to="/finalPage">Final</Link></li>
           <li> <Link className='link' to="/adminPage">Admin</Link></li>
            <li><Link className='link' to="/boot">Boot</Link></li>
           </ul>
         </div>
       </div>
       <div className='row'>
         <div className='col-8 ' id="content">
           <h2 className='font-italic text-danger  text-uppercase user-select-all'>SubHeading</h2>
           <p className='font-weight-bold lead user-select-none' >React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
           Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem.
        By relying entirely on the Bootstrap stylesheet, React-Bootstrap just works with the thousands of Bootstrap themes you already love.
      The React component model gives us more control over form and function of each component.
      Each component is implemented with accessibility in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap.
           </p>
         </div>
         <div className='col-4' id="sidebar">
         <ul>
             <li><Link className='link' to="/">Login</Link></li>
             <li><Link className='link' to="/quizStart">QuizStart</Link></li>
             <li><Link className='link' to="/cssQuiz">cssQuestion</Link></li>
             <li> <Link className='link' to="/finalPage">Final</Link></li>
            <li> <Link className='link' to="/adminPage">Admin</Link></li>
            <li><Link className='link' to="/boot">Boot</Link></li>
           </ul>
         </div>
       </div>
       <div className='row'>
         <div className='col-12 '  id="footer">
           shraddhabaheti123@gmail.com
         </div>
         <div className='row'>
           <div className='col-md-4'>
             <div className='embed-responsive embed-responsive-16by9'>
         <iframe  className='embed-responsive-item' src="https://www.youtube.com/embed/mADkq1wJuT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
         </div>
         </div>
       </div>
       </div>
     
    </div>
  )
}
