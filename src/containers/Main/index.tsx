import React, { memo, useCallback, useEffect, useState } from 'react';
import Api, { ResponseApi } from '../../commons/services/api';
import Board from './components/Board';

import { ContainerStyle } from './style';

const Main: React.FC = () => {
  const [data, setData] = useState<ResponseApi>({} as ResponseApi);
  const [country, setCountry] = useState<string>('brazil');

  const getCovidData = useCallback(find => {
    Api.getCountry(find).then(response => setData(response));
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  return (
    <ContainerStyle>
      <div className="mb-2">A</div>
      <Board
        cases={data.cases}
        todayDeaths={data.todayDeaths}
        recovered={data.recovered}
        deaths={data.deaths}
        todayCases={data.todayCases}
      />
    </ContainerStyle>
  );
};
export default memo(Main);
