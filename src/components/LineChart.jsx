import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const LineChart = ({ data }) => {

    if (!data || data.length === 0) {
        return <p>No data available</p>;
    }

    const stateData = data[0];

    const maxValue = Math.max(
        stateData.totalCases,
        stateData.active,
        stateData.recovered,
        stateData.deaths
    );

    const chartData = [
        { metric: 'Total', value: stateData.totalCases },
        { metric: 'Active', value: stateData.active },
        { metric: 'Recovered', value: stateData.recovered },
        { metric: 'Deaths', value: stateData.deaths },
    ];

    return (
        <div className='line-bar'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis
                        domain={[0, maxValue]}
                        tickFormatter={(value) => {
                            if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
                            if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
                            return value;
                        }}
                    />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChart;
