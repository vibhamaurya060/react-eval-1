import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SetupQuiz from './pages/SetupQuiz';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SetupQuiz />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  );
}

export default App;
