import React from 'react';

const CovidTable = ({ data, setSelectedState }) => (
  <div>
    <select onChange={(e) => setSelectedState(e.target.value)}>
      <option value="">All States</option>
      {data.map((state, index) => (
        <option key={index} value={state.state}>
          {state.state}
        </option>
      ))}
    </select>

    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Total Cases</th>
            <th>Active Cases</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {data.map((state, index) => (
            <tr key={index}>
              <td>{state.state}</td>
              <td>{state.totalCases}</td>
              <td>{state.active}</td>
              <td>{state.recovered}</td>
              <td>{state.deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>
);
export default CovidTable;
