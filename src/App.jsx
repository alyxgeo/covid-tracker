import React, { useEffect, useState } from 'react';
import CovidTable from './components/CovidTable.jsx';
import PieChart from './components/PieChart.jsx';
import LineChart from './components/LineChart.jsx';
import CovidMap from './components/CovidMap.jsx';
import fetchCovidData from './fetchCovidData';

const App = () => {
  const [covidData, setCovidData] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    // Fetch mock data on component mount
    fetchCovidData().then((data) => setCovidData(data));
  }, []);

  // Filter data based on selected state
  const filteredData = selectedState
    ? covidData.filter((state) => state.state === selectedState)
    : [];

  return (
    <div>
      <h1>COVID Tracker - India</h1>
      <div>
        <CovidTable data={covidData} setSelectedState={setSelectedState} />
      </div>
      <div className='section-b'>
        {selectedState &&
          <div className='main-container'>
            <div className='sub-container '><PieChart data={filteredData} /></div>
            <div className='sub-container '><LineChart data={filteredData} /></div>
            <div className='sub-container'><CovidMap data={filteredData} /></div>
          </div>
        }
      </div>
    </div>
  );
};

export default App;
