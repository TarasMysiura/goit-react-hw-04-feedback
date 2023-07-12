import React from 'react';
import { StatsUl, StatsLi, LabelSpan, CountSpan } from './Statistics.styled';
import { PropTypes } from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsUl>
      <StatsLi>
        <LabelSpan>Good: </LabelSpan>
        <CountSpan>{good}</CountSpan>
      </StatsLi>
      <StatsLi>
        <LabelSpan>Neutral: </LabelSpan>
        <CountSpan>{neutral}</CountSpan>
      </StatsLi>

      <StatsLi>
        <LabelSpan>Bad: </LabelSpan>
        <CountSpan>{bad}</CountSpan>
      </StatsLi>
      <StatsLi>
        <LabelSpan>Total: </LabelSpan>
        <CountSpan>{total}</CountSpan>
      </StatsLi>
      <StatsLi>
        <LabelSpan>Positive feedback: </LabelSpan>
        <CountSpan>{positivePercentage}%</CountSpan>
      </StatsLi>
    </StatsUl>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
