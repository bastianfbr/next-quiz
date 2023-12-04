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

  const handleAnswerClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (currentQuestionIndex === questions.length - 1) {
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Question question={questions[currentQuestionIndex]} />
      <Choice color="magenta" content="Ceci est une réponse 1" isIncorrect={answers[currentQuestionIndex] === 1} onClick={() => handleAnswerClick()} />
      <Choice color="green" content="Peut-être la réponse 2" isIncorrect={answers[currentQuestionIndex] === 2} onClick={() => handleAnswerClick()} />
      <Choice color="orange" content="Ou alors la réponse 3" isIncorrect={answers[currentQuestionIndex] === 3} onClick={() => handleAnswerClick()} />
      <Choice color="blue" content="Finalement réponse 4 ?" isIncorrect={answers[currentQuestionIndex] === 4} onClick={() => handleAnswerClick()} />
    </main>
  );
}
