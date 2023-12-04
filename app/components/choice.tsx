import React from 'react';

interface ChoiceProps {
  color: keyof typeof colorMap;
  content: string;
}

const colorMap = {
  "blue": "btn-info",
  "green": "btn-success",
  "orange": "btn-warning",
  "red": "btn-error",
}

const Choice: React.FC<ChoiceProps> = ({ color, content }) => {
  const buttonClassName = `btn btn-lg ${colorMap[color]}`;

  return (
    <div className="join join-vertical">
      <button className={buttonClassName}>{content}</button>
    </div>
  );
};

export default Choice;
