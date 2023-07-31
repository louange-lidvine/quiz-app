import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quiz from './compenents/quiz';
import QuizProvider from './compenents/context/quizContext';
// import  Lidivine from './App';

  
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <Lidivine />
//     )



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QuizProvider>
         <Quiz />
    </QuizProvider>
   
    )
//     // <Router>
//     //     <Routes>
//     //         <Route path="*" element={<Lidivine/>}/>
//     //     </Routes>
//     // </Router>
//
 //
// //     </BrowserRouter>
// );