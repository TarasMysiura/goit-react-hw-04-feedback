import React from 'react'
import { SectionStyle, TitleH2 } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ( {title, children} ) => {
  return (
    <SectionStyle>
      {title && <TitleH2>{title}</TitleH2>}
      {children}
    </SectionStyle>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
