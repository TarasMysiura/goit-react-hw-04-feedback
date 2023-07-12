import React from 'react';
import { BtnUl, BtnLi, Button } from './FeedbackOptions.styled';
import { PropTypes } from 'prop-types';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnUl>
      {options.map(option => (
        <BtnLi key={option}>
          <Button type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        </BtnLi>
      ))}
    </BtnUl>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
