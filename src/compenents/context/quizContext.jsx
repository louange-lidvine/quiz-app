import React, { createContext, useReducer } from "react";
import { data } from "../data";
import { shuffleAnswers } from "../helper";

// console.log(data[0])
const initialState = {
    question: data[0].question,
    currentQuestionIndex: 0,
    length: data.length,
    showResults: false,
    correctAnswerCount: 0,
    answer: shuffleAnswers(data[0]),
    currentAnswer: "",
    correctAnswer: data[0].correctAnswer,
    isdisabled: false,
};
// console.log( initialState);
// console.log('this is the initital state',initialState)
const reducer = (quizState, action) => {
    // console.log('reducer',quizState,action)
    switch (action.type) {
        case "SELECT_ANSWER": {
            const correctAnswerCount =
                action.payload ===
                data[quizState.currentQuestionIndex].correctAnswer
                    ? quizState.correctAnswerCount + 1
                    : quizState.correctAnswerCount;
            console.log(correctAnswerCount);
            return {
                ...quizState,
                currentAnswer: action.payload,
                correctAnswerCount,
                isdisabled: true,
            };
        }

        case "NEXT_QUESTION": {
            const showResults =
                quizState.currentQuestionIndex === quizState.length - 1;
            const currentQuestionIndex = showResults
                ? quizState.currentQuestionIndex
                : quizState.currentQuestionIndex + 1;
            // console.log("show result", showResults);
            console.log("current", currentQuestionIndex);
            const answer = showResults
                ? []
                : shuffleAnswers(data[currentQuestionIndex]);
            // console.log(data[currentQuestionIndex].correctAnswer);
            return {
                ...quizState,
                currentQuestionIndex,
                showResults,
                answer,
                currentAnswer: "",
                correctAnswer: data[currentQuestionIndex].correctAnswer,
                isdisabled: false,
            };
        }

        case "RESTART": {
            return initialState;
        }
        default:
            return quizState;
    }
};
export const QuizContext = createContext();
const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    );
};
export default QuizProvider;
