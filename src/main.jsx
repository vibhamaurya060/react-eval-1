
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import QuizProvider from './context/QuizProvider.jsx'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <QuizProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QuizProvider>
  </ChakraProvider>

)
