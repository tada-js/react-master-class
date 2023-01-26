import axios from "axios";

const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
  const response = await axios.get(`${BASE_URL}/coins`);
  return response.data;
};
export const fetchCoinInfo = async (coinId: string) => {
  const response = await axios.get(`${BASE_URL}/coins/${coinId}`);
  return response.data;
};

export const fetchCoinTickers = async (coinId: string) => {
  const response = await axios.get(`${BASE_URL}/tickers/${coinId}`);
  return response.data;
};

export const fetchCoinHistroy = async (coinId: string) => {
  // const endDate = Math.floor(Date.now() / 1000);
  // const startDate = endDate - 60 * 60 * 24 * 7;
  const response = await axios.get(
    `https://ohlcv-api.nomadcoders.workers.dev`,
    {
      params: {
        coinId: coinId,
      },
    }
  );
  return response.data;
};
