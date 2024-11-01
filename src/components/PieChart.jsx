import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register ArcElement and other components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
    // Ensure data is available
    if (!data.length) {
        return <p>No data available to display the chart.</p>;
    }

    const { active, recovered, deaths } = data[0];

    // Calculate total cases
    const total = active + recovered + deaths;

    // Calculate percentages
    const activePercentage = total ? ((active / total) * 100).toFixed(2) : 0;
    const recoveredPercentage = total ? ((recovered / total) * 100).toFixed(2) : 0;
    const deathsPercentage = total ? ((deaths / total) * 100).toFixed(2) : 0;

    const chartData = {
        labels: [
            `Active (${activePercentage}%)`,
            `Recovered (${recoveredPercentage}%)`,
            `Deaths (${deathsPercentage}%)`,
        ],
        datasets: [
            {
                data: [activePercentage, recoveredPercentage, deathsPercentage],
                backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
            },
        ],
    };

    return (
        <div style={{ width: '300px', height: '300px' }}>
            <Pie data={chartData} />
        </div>
    );
};

export default PieChart;
