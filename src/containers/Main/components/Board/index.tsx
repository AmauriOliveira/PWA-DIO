import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid, Skeleton } from '../../../../components';
import Card from '../Card';

export interface BoardProps {
  data: {
    cases: number;
    todayDeaths: number;
    recovered: number;
    deaths: number;
    todayCases: number;
  };
}

const Board: React.FC<BoardProps> = ({ data }) => {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;
  const getValue: any = (value: any) =>
    value || <Skeleton variant="text" width={182} height={60} />;
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={getValue(todayDeaths)}
          label="Óbitos Hoje"
          color="#f7b829"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Casos de hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={getValue(todayCases)}
          label="Total de mortos"
          color="#e95078"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={getValue(recovered)}
          label="Total de recuperados"
          color="#67c887"
        />
      </Grid>
    </Grid>
  );
};

Board.propTypes = {
  data: PropTypes.shape({
    cases: PropTypes.number.isRequired,
    todayDeaths: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired,
    deaths: PropTypes.number.isRequired,
    todayCases: PropTypes.number.isRequired,
  }).isRequired,
};

export default memo(Board);
