export const shuffleAnswers = (question) => {
    console.log(question.incorrectAnswers);
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers,
    ];
    return unshuffledAnswers
        .map((answer) => ({ sort: Math.random(), value: answer }))
        .sort((a, b) => a.sort - b.sort)
        .map((obj) => obj.value);
};
