import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Graphic Temperature
const TemperatureChart = ({ data }) => {
    const displayedData = data.slice(-10); // Last 10 data points
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={displayedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[20, 40]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temperature" stroke="#214001" name="Temperatura (°C)" />
            </LineChart>
        </ResponsiveContainer>
    );
};

// Graphic Humidity
const HumidityChart = ({ data }) => {
    const displayedData = data.slice(-10); // Last 10 data points
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={displayedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="humidity" stroke="#214001" name="Umidade (%)" />
            </LineChart>
        </ResponsiveContainer>
    );
}

// Graphic PM 2.5
const Pm25Chart = ({ data }) => {
    const displayedData = data.slice(-10); // Last 10 data points
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={displayedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 1]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pm2.5" stroke="#214001" name="Particles PM 2.5 (n)" />
            </LineChart>
        </ResponsiveContainer>
    );
}

// Graphic PM 10
const Pm10Chart = ({ data }) => {
    const displayedData = data.slice(-10); // Last 10 data points 
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={displayedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date"/>
                <YAxis domain={[0, 0.1]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pm10" stroke="#214001" name="Particles PM 10 (n)" />
            </LineChart>
        </ResponsiveContainer>
    );

}


// Render Graphics
const Dashboard = () => {
    const [selectedChart, setSelectedChart] = useState('temperature');
    const [data, setData] = useState([]);

    const chartOptions = [
        { value: 'temperature', label: 'Temperature', component: TemperatureChart },
        { value: 'humidity', label: 'Humidity', component: HumidityChart },
        { value: 'pm2.5', label: 'Particles PM 2.5', component: Pm25Chart },
        { value: 'pm10', label: 'Particles PM 10', component: Pm10Chart},
    ];

    
    const handleChartChange = (e) => {
        setSelectedChart(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/weatherData');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className='flex flex-col h-dvh items-center justify-center gap-5 bg-off-white'>
            <h1 className='font-bold uppercase text-2xl md:text-6xl text-green-1'>Dashboard</h1>

            <select
                onChange={handleChartChange} value={selectedChart}
                className='z-0 cursor-pointer bg-off-white text-green-1'
            >
                {chartOptions.map((option) => (
                    <option
                    className='text-green-2'
                        key={option.value} 
                        value={option.value}
                        >
                        {option.label}
                    </option>
                ))}
            </select>

            <div className="chart-container w-full p-4 xl:p-8 overflow-hidden">
                {chartOptions.map((chart) => {
                    if (chart.value === selectedChart) {
                        const ChartComponent = chart.component;
                        return <ChartComponent key={chart.value} data={data} />;
                    }
                    else{
                        return null;
                    }                         
                })}
            </div>
        </section>
    );
};

export default Dashboard;
