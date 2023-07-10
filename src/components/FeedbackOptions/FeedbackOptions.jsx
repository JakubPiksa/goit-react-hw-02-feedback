import React, { useState } from 'react';
import css from './feedbackOptions.module.css';

const FeedbackOptions = () => {
  const [, setFeedbackCounter] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (type) => {
    setFeedbackCounter((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1
    }));
  };

  return (
    <div>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>
    </div>
  );
};

export default FeedbackOptions;