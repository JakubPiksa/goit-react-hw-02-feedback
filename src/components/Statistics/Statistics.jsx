
import React, { useState } from 'react';
import css from "./statistics.module.css"

const Statistics = () => {
  const [feedbackCounter] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  return (
    <div>
      <ul>
        <li>Good: {feedbackCounter.good}</li>
        <li>Neutral: {feedbackCounter.neutral}</li>
        <li>Bad:  {feedbackCounter.bad}</li>
      </ul>
    </div>

  )
};

export default Statistics;