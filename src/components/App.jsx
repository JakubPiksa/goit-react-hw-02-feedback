import React, { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";


export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
  return (
    <div>
      <h1>Please leave feedback</h1>
      <FeedbackOptions />
      <h2>Statistics</h2>
      <Statistics />
    </div>
  );
  
};


