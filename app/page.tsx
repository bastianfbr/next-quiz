'use client'

import React, { useState } from 'react';
import Choice from './components/choice';
import Question from './components/question';

const questions = [
  "Voici la première question 1",
  "Nouvelle question 2",
  "Encore une nouvelle question 3",
  "La dernière question 4",
];

const answers = [1, 2, 3, 4];

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerClick = (selectedAnswer: number) => {
    const isCorrect = selectedAnswer === answers[currentQuestionIndex];
    console.log(`User selected answer ${selectedAnswer} for question ${currentQuestionIndex + 1}`);

    // You can use the result of the check for further logic or storage
    console.log(`User's answer is correct: ${isCorrect}`);

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (currentQuestionIndex === questions.length - 1) {
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Question question={questions[currentQuestionIndex]} />
      <Choice color="magenta" content="Ceci est une réponse 1" isCorrect={answers[currentQuestionIndex] === 1} onClick={() => handleAnswerClick(1)} />
      <Choice color="green" content="Peut-être la réponse 2" isCorrect={answers[currentQuestionIndex] === 2} onClick={() => handleAnswerClick(2)} />
      <Choice color="orange" content="Ou alors la réponse 3" isCorrect={answers[currentQuestionIndex] === 3} onClick={() => handleAnswerClick(3)} />
      <Choice color="blue" content="Finalement réponse 4 ?" isCorrect={answers[currentQuestionIndex] === 4} onClick={() => handleAnswerClick(4)} />
    </main>
  );
}
