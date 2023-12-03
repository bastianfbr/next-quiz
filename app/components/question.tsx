import React, { ReactNode } from 'react';

interface QuestionProps {
  question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
    return (
        <h1 className="text-4xl font-bold mb-8 text-black text-center mx-auto">
            {question}
        </h1>
    );
};

export default Question;
