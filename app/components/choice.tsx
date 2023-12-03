import React, { ReactNode } from 'react';

interface ChoiceProps {
  color: string;
  content: string;
}

const Choice: React.FC<ChoiceProps> = ({ color, content }) => {
  return (
    <div className={`flex flex-col items-center justify-center rounded-md p-8 mb-2 w-2/4 sm:w-80 mx-auto bg-${color}-500`}>
      <p className="text-white">{content}</p>
    </div>
  );
};

export default Choice;
