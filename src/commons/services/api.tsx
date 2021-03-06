import axios from 'axios';

const api = axios.create({
  baseURL: 'https://coronavirus-19-api.herokuapp.com/countries',
});

interface Headers {
  mode: 'cors';
  cache: 'default';
}

export interface ResponseApi {
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
}

const headers: Headers = {
  mode: 'cors',
  cache: 'default',
};

async function getCountry(country: string): Promise<any> {
  const response = await api.get(`/${country}`, { headers });
  return response.data;
}

export default {
  getCountry,
};
