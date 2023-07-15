import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { FeedbackStyle } from './App.styled';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = state => {
    switch (state) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedbackFunc = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    const total = totalFeedbackFunc();
    return ((good * 100) / total).toFixed();
  };

  const totalFeedback = totalFeedbackFunc();
  const PositiveFeedbackPercentage = positiveFeedbackPercentage();
  const options = Object.keys({ good, neutral, bad });
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackStyle>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        {totalFeedback !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={PositiveFeedbackPercentage}
            ></Statistics>
          </Section>
        ) : (
          <Section title="Statistics">
            <Notification message="There is no feedback" />
          </Section>
        )}
      </FeedbackStyle>
    </div>
  );
};
