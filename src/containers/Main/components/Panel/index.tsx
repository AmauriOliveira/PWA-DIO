import React, { memo } from 'react';
import RefreshIcon from '../../../../assets/images/refresh.svg';
import {
  Card,
  Typography,
  Button,
  Select,
  MenuItem,
} from '../../../../components';
// import COUNTRIES from '../../../../commons/constants';
import { CardPanelContentStyled, ItemStyled } from '../style';

const navigatorHasShare = navigator.share;

const Panel: React.FC = ({
  updateAt,
  onChange,
  data,
  country,
  getCovidData,
}) => {
  return <hr />;
};

export default memo(Panel);
