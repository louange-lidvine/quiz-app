import classNames from "classnames";
import React, { useState } from "react";
// import { useContext } from "react";
// import { QuizContext } from "./context/quizContext";

const Answers = ({
    answerText,
    index,
    onSelectAnswer,
    currentAnswer,
    correctAnswer,
    isdisabled
}) => {
    // const [correct,setCorrect]=useState(false)
    const letterMapping = ["A", "B", "C", "D"];
    const isCorrectAnswer =
        currentAnswer !== "" &&
        answerText === correctAnswer &&
        answerText === currentAnswer;
    const isWrongAnswer =
        currentAnswer !== "" &&
        currentAnswer !== correctAnswer &&
        answerText === currentAnswer;
    
    const neither = currentAnswer === "";
    const but = currentAnswer !== "" && answerText !== currentAnswer;
    console.log(isCorrectAnswer, isWrongAnswer);
    
    return (
       
        <button
            className="flex flex-row"
            onClick={() => {
                onSelectAnswer(answerText);
                // setDisabled(true);
            }}
            disabled={isdisabled}
        >
            <div
                className={classNames(
                    "flex flex-row  space-x-6  border-cyan-600 border-2 w-[20rem]",
                    {
                        "border-green-500": isCorrectAnswer,
                        "border-red-600": isWrongAnswer,
                    }
                )}
            >
                <div
                    className={classNames(
                        "answer-letter text-white p-4 pr-9",
                        {
                            "bg-green-500": isCorrectAnswer,
                            "bg-red-600": isWrongAnswer,
                            "bg-sky-700": neither || but
                        }
                    )}
                >
                    {letterMapping[index]}
                </div>
                <div className="answer-text  text-center m-auto p-5 pr-4">
                    {answerText}
                </div>
            </div>
        </button>
    );
};

export default Answers;
