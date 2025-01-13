
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Leaderboard from './pages/Leaderboard'
import Quiz from './pages/Quiz'
import SetupQuiz from './pages/SetupQuiz'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<SetupQuiz/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/leaderboard' element={<Leaderboard/>} />
      </Routes>
    </>
  )
}

export default App
