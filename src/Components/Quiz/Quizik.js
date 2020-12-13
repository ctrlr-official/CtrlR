import React from 'react';
import './Quizik.css';
import QuizMain from './NewProject/QuizMain';
import { Link } from 'react-router-dom';
const Quizik = () => {
   
    return (
<div className='Quizik'>
       <QuizMain/>
        <Newsfeed/>
    )
}

export default Quizik
