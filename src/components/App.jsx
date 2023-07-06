import React, { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";


export const App = () => {
  const [feedback, setFeedback] = useState({
  good: 0,
  neutral: 0,
  bad: 0
  });
  return (
    <div>
      <FeedbackOptions />
    </div>
  )
};



