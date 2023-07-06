import React, { Component } from 'react';
import styles from './feedbackOptions.module.css';


const FeedbackOptions = () => {
    return (
        <div>
            <h1>Please leave feedback</h1>
            <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
            <h2>Statistics</h2>
            <ul>
                <li>Good: 0</li>
                <li>Neutral: 0</li>
                <li>Bad: 0</li>
            </ul>
        </div>
    );
};

export default FeedbackOptions;