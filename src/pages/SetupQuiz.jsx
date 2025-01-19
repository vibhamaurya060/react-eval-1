import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizProvider';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from '@chakra-ui/react';

const SetupQuiz = () => {
  const { setQuizConfig, name, setName, questions, setQuestions } =
    useContext(QuizContext);
  const [category, setCategory] = useState('9'); // Default to "General Knowledge"
  const [difficulty, setDifficulty] = useState('easy');
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    setQuizConfig({ category, difficulty, questions });
    navigate('/quiz');
  };

  return (
    <Box p={8} bg="gray.50" minH="100vh">
      <VStack spacing={6} align="stretch" maxW="400px" mx="auto">
        <Heading textAlign="center" mb={6}>
          Quiz Setup
        </Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="23">History</option>
            <option value="17">Science</option>
            <option value="18">Computers</option>
            </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Difficulty</FormLabel>
          <Select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Number of Questions</FormLabel>
          <Input
            type="number"
            min="1"
            max="50"
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleStartQuiz}>
          Start Quiz
        </Button>
      </VStack>
    </Box>
  );
};

export default SetupQuiz;
