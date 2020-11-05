import React, {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Api, { ResponseApi } from '../../commons/services/api';
import Board from './components/Board';
import Panel from './components/Panel';

import { ContainerStyle } from './style';

const Main: React.FC = () => {
  const [data, setData] = useState<ResponseApi>({} as ResponseApi);
  const [country, setCountry] = useState<string>('brazil');
  const updateAt = new Date().toLocaleString();

  const getCovidData = useCallback((find: string) => {
    Api.getCountry(find).then(response => setData(response));
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  const handleChange = (
    event: ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode,
  ): void => {
    const selectedCoutry = String(event.target.value);

    setCountry(selectedCoutry);
  };

  return (
    <ContainerStyle>
      <div className="mb-2">
        <Panel
          updateAt={updateAt}
          onChange={handleChange}
          data={data}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </ContainerStyle>
  );
};
export default memo(Main);
