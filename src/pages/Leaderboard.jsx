import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizProvider';

const Leaderboard = () => {
    const { name, score, questions } = useContext(QuizContext)
    const navigate = useNavigate()

    return (
        <div>
            <h1>Leaderboard</h1>
            <p>Name: {name}</p>
            <p>Score:{score}/ {questions}</p>
            <button onClick={() => navigate('/')}>Click</button>
        </div>
    )
}

export default Leaderboard