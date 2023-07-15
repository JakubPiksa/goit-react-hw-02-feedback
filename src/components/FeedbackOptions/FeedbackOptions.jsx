import React from 'react';

const FeedbackOptions = ({ handleFeedback }) => {
  return (
    <div>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>
    </div>
  );
};

export default FeedbackOptions;
