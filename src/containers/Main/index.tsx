import React, { memo, useCallback, useEffect, useState } from 'react';
import Api, { ResponseApi } from '../../commons/services/api';

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
    </ContainerStyle>
  );
};
export default memo(Main);
