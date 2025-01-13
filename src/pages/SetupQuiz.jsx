// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const SetupQuiz = () => {
//     const [quiz, setQuiz] = useState([])

//     const fetchData = () => {
//         axios.get("https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple")
//             .then((res) => {
//                 // console.log(res.data.results)
//                 setQuiz(res.data.results);

//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }



//     useEffect(() => {
//         fetchData();
//     }, [])

//     return (
//         <div>
//             <h1>Home</h1>
//             <ul>
//                 {quiz.map((ele) => (
//                     <li key={ele.id}>
//                         <p>{ele.question}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default SetupQuiz

import { Button } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizProvider';

const SetupQuiz = () => {
    const { setQuizConfig, name, setName,questions } = useContext(QuizContext);
    // const [name, setName] = useState("");
    const [category, setCategory] = useState("5")
    const [difficulty, setDifficulty] = useState("easy")
    // const [questions, setQuestions] = useState(10);
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        setQuizConfig({ name, setName, category, difficulty, questions });
        navigate("/quiz");
    }


    return (
        <div>
            <h1>Quiz Setup</h1>
            <div className='quiz-setup'>
                <div>
                    <label>Name</label>
                    <input className='input-text' type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label >Category</label>
                    <select className='input-text' value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value='1'>General Knowledge</option>
                        <option value='2'>Music</option>
                        <option value='3'>Computer</option>
                        <option value='4'>Maths</option>
                        <option value='5'>Hindi</option>
                    </select>
                </div>

                <div>
                    <label>Difficulty</label>
                    <select className='input-text' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value='easy'>Low</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                </div>

                <div>
                    <label>Number of Question</label>
                    <input className='input-text' type='number' value={questions} min='1' max='20' onChange={(e) => setQuestions(e.target.value)} />
                </div>

            </div>
            <Button className='btn' onClick={handleStartQuiz}>Start Quiz</Button>

        </div>
    )
}

export default SetupQuiz