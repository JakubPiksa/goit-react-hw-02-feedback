import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [feedbackCounter, setFeedbackCounter] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
//ghpages jest ble
  const [showStatistics, setShowStatistics] = useState(false);

  const handleFeedback = (type) => {
    setFeedbackCounter((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1
    }));
    setShowStatistics(true);
  };

  return (
    <div>
      <h1>Please Leave Feedback</h1>
      <FeedbackOptions handleFeedback={handleFeedback} />
      {showStatistics && <Statistics feedbackCounter={feedbackCounter} />}
    </div>
  );
};

export default App;
