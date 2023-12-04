import React, { useState } from 'react';

interface ChoiceProps {
  color: keyof typeof colorMap;
  content: string;
  isCorrect: boolean;
  onClick: () => void;
}

const colorMap = {
  blue: 'btn-info',
  green: 'btn btn-primary',
  orange: 'btn-warning',
  magenta: 'btn btn-secondary',
};

const Choice: React.FC<ChoiceProps> = ({ color, content, isCorrect, onClick }) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleButtonClick = () => {
    setShowDialog(true);

    setTimeout(() => {
      setShowDialog(false);
    }, 500);
    
    onClick();
  };

  const buttonClassName = `btn btn-lg ${colorMap[color]}`;
  const alertClassName = isCorrect ? 'alert alert-success' : 'alert alert-error';

  return (
    <div className="join join-vertical mb-5">
      <button className={buttonClassName} onClick={handleButtonClick}>
        {content}
      </button>

      {showDialog && (
        <div className="toast toast-center">
          <div className={alertClassName}>
            <span>{isCorrect ? "C'est la bonne réponse !" : "Ce n'est pas la bonne réponse."}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Choice;
