import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizProvider';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

const Leaderboard = () => {
  const { name, score, questions } = useContext(QuizContext);
  const navigate = useNavigate();

  return (
    <Box p={8} bg="gray.50" minH="100vh">
      <VStack spacing={6} align="center" maxW="600px" mx="auto">
        <Heading textAlign="center">Leaderboard</Heading>
        <Box p={6} boxShadow="md" borderRadius="lg" bg="white" w="100%">
          <Text fontSize="lg" fontWeight="bold">
            Name: {name}
          </Text>
          <Text fontSize="lg">
            Score: {score} / {questions}
          </Text>
        </Box>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate('/')}
        >
          Play Again
        </Button>
      </VStack>
    </Box>
  );
};

export default Leaderboard;
