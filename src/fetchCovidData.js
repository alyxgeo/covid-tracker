import covidData from './mockData.json';

const fetchCovidData = async () => {
  // Simulating API call by returning mock data
  return new Promise((resolve) => {
    setTimeout(() => resolve(covidData), 500);
  });
};

export default fetchCovidData;
