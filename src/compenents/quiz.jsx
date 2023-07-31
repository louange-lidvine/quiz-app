import React, { useContext } from "react";
import { QuizContext } from "./context/quizContext";
import Question from "./question";

// console.log('quizState',quizState)
const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log("quizstate", quizState);
    return (
        <div>
            {quizState.showResults && (
                <div className="results">
                    <div className="congz">Congratulations</div>
                    <div className="results-info">
                        <div>You have completed your Quiz</div>
                        <div>
                            you've got {quizState.correctAnswerCount}of
                            {quizState.length}
                            right.
                        </div>
                    </div>
                    <div
                        className="next-button"
                        onClick={() => {
                            dispatch({ type: "RESTART" });
                        }}
                    >
                        RESTART
                    </div>
                </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div className="score m-auto bg-slate-500 font-bold  text-black text-center  mt-20 h-14 w-32  flex  justify-center items-center text-[20px]">
                        {/* {console.log(quizState.currentQuestionIndex+1)} */}
                        Question{quizState.currentQuestionIndex + 1}/
                        {quizState.length}
                    </div>
                    <div>
                        <Question />
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <div
                            className="next-button  bg-sky-500  text-white font-bold mt-10 flex justify-center items-center h-12 w-32 "
                            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                        >
                            Next Question
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
