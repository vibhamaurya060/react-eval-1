import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizProvider';
import {
  Box,
  Button,
  CircularProgress,
  Heading,
  Text,
  VStack,
  HStack,
  Progress,
} from '@chakra-ui/react';

const Quiz = () => {
  const { quizConfig, score, setScore } = useContext(QuizContext);
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answersSelected, setAnswersSelected] = useState([]); // Track all selected answers
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!quizConfig) {
        navigate('/'); // Redirect to setup if quizConfig is missing
        return;
      }

      const { category, difficulty, questions } = quizConfig;

      try {
        const res = await axios.get(
          `https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        setQuizData(res.data.results);
        setAnswersSelected(new Array(res.data.results.length).fill(null)); // Initialize with null answers
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [quizConfig, navigate]);

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...answersSelected];
    updatedAnswers[currentQuestion] = answer; // Track selected answer for the current question
    setAnswersSelected(updatedAnswers);
  };

  const handleNext = () => {
    // Update score if the current answer is correct
    if (answersSelected[currentQuestion] === quizData[currentQuestion].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/leaderboard'); // Redirect to leaderboard on quiz completion
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bg="gray.100"
      >
        <CircularProgress isIndeterminate color="teal.500" />
      </Box>
    );
  }

  if (!quizData.length) {
    return (
      <Box textAlign="center" p={6} bg="gray.100" minH="100vh">
        <Heading>No questions available!</Heading>
        <Text mt={4}>Please try setting up the quiz again.</Text>
        <Button mt={6} colorScheme="teal" onClick={() => navigate('/')} >
          Go Back
        </Button>
      </Box>
    );
  }

  const question = quizData[currentQuestion];
  const answers = [...question.incorrect_answers, question.correct_answer].sort(
    () => Math.random() - 0.5
  );

  return (
    <Box bg="gray.50" minH="100vh" p={8}>
      <VStack spacing={6} align="stretch" maxW="600px" mx="auto">
        <Progress
          value={((currentQuestion + 1) / quizData.length) * 100}
          size="sm"
          colorScheme="teal"
        />
        <Box p={6} boxShadow="md" borderRadius="lg" bg="white">
          <Text fontSize="lg" mb={4}>
            Question {currentQuestion + 1} of {quizData.length}
          </Text>
          <Heading size="md" mb={6} dangerouslySetInnerHTML={{ __html: question.question }} />
          <VStack spacing={4}>
            {answers.map((ans, index) => (
              <Button
                key={index}
                width="100%"
                colorScheme={answersSelected[currentQuestion] === ans ? 'teal' : 'gray'}
                variant="outline"
                onClick={() => handleAnswerSelect(ans)}
                isActive={answersSelected[currentQuestion] === ans}
              >
                <span dangerouslySetInnerHTML={{ __html: ans }} />
              </Button>
            ))}
          </VStack>
        </Box>
        <HStack justifyContent="space-between" mt={4}>
          <Button
            colorScheme="gray"
            isDisabled={currentQuestion === 0}
            onClick={handlePrevious}
          >
            Previous
          </Button>
          <Button
            colorScheme="teal"
            isDisabled={!answersSelected[currentQuestion]}
            onClick={handleNext}
          >
            {currentQuestion === quizData.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Quiz;
