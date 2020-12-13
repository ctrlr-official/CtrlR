import React, { useState } from 'react';
import './Quizik.css';
import QuizMain from './NewProject/QuizMain';
import { Link } from 'react-router-dom';
const Quizik = () => {
    const [check, setCheck] = useState(false)
    return (
<div className='Quizik'>
        
<div
        onClick={() => setCheck(!check)}
        className={check ? 'transformed' : 'QuizMain'}
      />
        </div>
    )
}

export default Quizik
