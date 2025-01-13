import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <Box bg='pink' w='100%' p={4} color='white' display="flex" justifyContent="space-around" fontSize={20} fontWeight={600}>
            <p>MyApp</p>
            <nav>
                <Link to="/">SetupQuiz</Link>
                <Link to="/quiz">Quiz</Link>
                <Link to="/leaderboard">Leaderboard</Link>
            </nav>
        </Box>

    )
}

export default Navbar