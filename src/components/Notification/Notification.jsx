import React from 'react';
import { PropTypes } from 'prop-types';

export const Notification = ({ message }) => {
  return <p style={{ display: 'flex', justifyContent: 'center' }}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
