import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { LabelStyled, ValueStyled, CardContentStyled } from '../style';
import { Card as CardUI } from '../../../../components';

interface CardProps {
  value: number;
  label: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ value, label, color }) => {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  );
};

Card.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default memo(Card);
