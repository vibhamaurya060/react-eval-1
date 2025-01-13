import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { QuizContext } from '../context/QuizProvider'

const Quiz = () => {
    const { quizConfig, score, setScore } = useContext(QuizContext)
    const [quizData, setQuizData] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)



    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple");
                setQuizData(res.data.results);
                console.log(res.data.results)
            }
            catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [quizConfig])


    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (customElements < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            navigate('/leaderboard', { state: { name, score, question } })
        }
    }
    if (loading) {
        return <p>Loading...</p>
    }

    const questions = quizData[currentQuestion];;
    const answer = [...questions.incorrect_answer, questions.incorrect_answer].sort();

    return (
        <div>
            <h2>Quiz</h2>
            <p>Question {currentQuestion + 1} of {quizData.length}</p>
            <h2></h2>
            <div>
                {answer.map((ans, index) => (
                    <button key={index} onClick={() => handleAnswer(ans === questions.answer)}>click</button>
                ))}
            </div>
        </div>
    )
}

export default Quiz