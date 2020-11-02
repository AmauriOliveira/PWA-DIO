import React, { memo } from 'react';
import PropsTypes from 'prop-types';

import { Grid, Skeleton } from '../../../../components';
import { ResponseApi } from '../../../../commons/services/api';

const Board: React.FC<ResponseApi> = ({
  cases,
  todayDeaths,
  recovered,
  deaths,
  todayCases,
}) => {
  const getValue: any =(value: any ) =>value ? value : <Skeleton variant="text" width={182} height={60}/>
  return (
    (
<Grid container spacing={4}>
    <Grid item xs={12} md={3}>
<Card value={getValue(cases)} label="Total de casos" color ="#5d78ff"/>
    </Grid>

  </Grid>
);
};
export default Board;
