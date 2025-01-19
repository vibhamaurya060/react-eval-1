import React from 'react';
import { Link } from 'react-router-dom';
import { Box, HStack, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4} color="white" boxShadow="md">
      <HStack justifyContent="space-between" maxW="800px" mx="auto">
        <Text fontSize="xl" fontWeight="bold">
          Quiz App
        </Text>
        <HStack spacing={6}>
          <Link to="/">Setup Quiz</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
