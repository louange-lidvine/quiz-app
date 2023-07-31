import React, { useContext, useState } from "react";
import { QuizContext } from "./context/quizContext";
import { data } from "./data";
import Answers from "./answers";

console.log(QuizContext);
const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    // console.log(state)
    quizState.question = data[quizState.currentQuestionIndex].question;
    const currentQuestion = quizState.question;
    return (
        <div>
            <div className="question bg-sky-500 h-20  justify-center text-center m-auto p-5 text-xl w-[60%] mt-10">
                {currentQuestion}
            </div>
            <div className="w-full flex justify-center">
                <div className="grid grid-cols-2 grid-rows-2 gap-6 gap-x-[8rem] m-auto  mt-14 ">
                    {quizState.answer.map((answer, index) => (
                        <Answers
                            isdisabled={quizState.isdisabled}
                            answerText={answer}
                            key={index}
                            index={index}
                            currentAnswer={quizState.currentAnswer}
                            correctAnswer={quizState.correctAnswer}
                            onSelectAnswer={(answerText) => {
                                console.log(answerText);
                                dispatch({
                                    type: "SELECT_ANSWER",
                                    payload: answerText,
                                });
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Question;
