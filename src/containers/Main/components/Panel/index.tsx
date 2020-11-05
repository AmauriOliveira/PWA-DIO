/* eslint-disable prefer-const */
import React, { ChangeEvent, memo } from 'react';
import PropTypes from 'prop-types';
import RefreshIcon from '../../../../assets/images/refresh.svg';
import {
  Card,
  Typography,
  Button,
  Select,
  MenuItem,
} from '../../../../components';
import COUNTRIES from '../../../../commons/constants/countries';
import { CardPanelContentStyled, ItemStyled } from '../style';

interface MenuItemRenderProps {
  value: string;
  label: string;
  flag: string;
}
interface PanelProps {
  updateAt: string;
  onChange(
    event: ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode,
  ): void;
  data: {
    cases: number;
    todayDeaths: number;
    recovered: number;
    deaths: number;
    todayCases: number;
  };
  country: string;
  getCovidData(find: string): void;
}

const Panel: React.FC<PanelProps> = ({
  updateAt,
  onChange,
  data,
  country,
  getCovidData,
}) => {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  const renderCountries = (
    countryItem: MenuItemRenderProps,
    index: number,
  ): any => (
    <MenuItem key={`country-${index}`} value={countryItem.value}>
      <ItemStyled>
        <div>{countryItem.label}</div>
        <img src={countryItem.flag} alt={`País-${countryItem.label}`} />
      </ItemStyled>
    </MenuItem>
  );

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">
            COVID19
          </Typography>
          <Typography variant="h6" component="span" color="primary">
            Painel Coronavírus
          </Typography>
          <Typography variant="body2" component="span" color="primary">
            {`Atualizado em: ${updateAt}`}
          </Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {/* {navigator.share ? renderShareButton : renderCopyButton} */}
      </CardPanelContentStyled>
    </Card>
  );
};

Panel.propTypes = {
  updateAt: PropTypes.string.isRequired,
  data: PropTypes.shape({
    cases: PropTypes.number.isRequired,
    todayDeaths: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired,
    deaths: PropTypes.number.isRequired,
    todayCases: PropTypes.number.isRequired,
  }).isRequired,
  country: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  getCovidData: PropTypes.func.isRequired,
};

export default memo(Panel);
