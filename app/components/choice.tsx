import React, { useState } from 'react';

interface ChoiceProps {
  color: keyof typeof colorMap;
  content: string;
  isIncorrect: boolean;
  onClick: () => void;
}

const colorMap = {
  blue: 'btn-info',
  green: 'btn btn-primary',
  orange: 'btn-warning',
  magenta: 'btn btn-secondary',
};

const Choice: React.FC<ChoiceProps> = ({ color, content, isIncorrect, onClick }) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleButtonClick = () => {

    console.log(`User selected answer is ${isIncorrect ? 'correct' : 'incorrect'}`)
    setShowDialog(true);

    setTimeout(() => {
      setShowDialog(false);
    }, 500);
    
    onClick();
  };

  const buttonClassName = `btn btn-lg ${colorMap[color]}`;
  const alertClassName = isIncorrect ? 'alert alert-error' : 'alert alert-success';

  return (
    <div className="join join-vertical mb-5">
      <button className={buttonClassName} onClick={handleButtonClick}>
        {content}
      </button>

      {showDialog && (
        <div className="toast toast-center">
          <div className={alertClassName}>
            <span>{isIncorrect ? "Ce n'est pas la bonne réponse !" : "C'est la bonne réponse !"}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Choice;
