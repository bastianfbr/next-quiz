import React from 'react';

interface ChoiceProps {
  color: keyof typeof colorMap;
  content: string;
}

const colorMap = {
  "red": "bg-red-500",
  "green": "bg-green-500",
  "yellow": "bg-yellow-500",
  "blue": "bg-blue-500",
}

const Choice: React.FC<ChoiceProps> = ({ color, content }) => {
  return (
    <div className={`flex flex-col items-center justify-center rounded-md p-8 mb-2 w-2/4 sm:w-80 mx-auto ${colorMap[color]}`}>
      <p className="text-white">{content}</p>
    </div>
  );
};

export default Choice;
