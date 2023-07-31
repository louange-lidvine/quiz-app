import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Quiz from './compenents/quiz';
import QuizProvider from './compenents/context/quizContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<QuizProvider>
         < Quiz/>
    </QuizProvider>
  </React.StrictMode>,
)
