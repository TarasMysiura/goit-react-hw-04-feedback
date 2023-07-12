import {  useState } from 'react';
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
    if (state === 'good') {
      setGood(prevState => prevState + 1);
    } else if (state === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else {
      setBad(prevState => prevState + 1);
    }
    // setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  const totalFeedbackFunc = () => {
    // const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    // const { good } = good;
    const total = totalFeedback();
    return ((good * 100) / total).toFixed();
  };

  
    const totalFeedback = totalFeedbackFunc();
    const PositiveFeedbackPercentage = positiveFeedbackPercentage();
    const options = Object.keys({good, neutral, bad});
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
  }

