import React, { createContext, useState } from 'react'

export const QuizContext = createContext(null);

const QuizProvider = ({ children }) => {

    const [quizConfig, setQuizConfig] = useState({});
    const [name, setName] = useState("");
    const [questions, setQuestions] = useState(10);
    const [score, setScore] = useState(0);

    return (
        <QuizContext.Provider value={{ quizConfig, setQuizConfig, score, setScore, name, setName, questions, setQuestions }}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizProvider