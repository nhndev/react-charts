import { useEffect, useState } from "react";
import data from "./data.json"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {

  const [chartData, setChartData] = useState({})

  useEffect(() => {

    setTimeout(() => {
      setChartData({
        labels: data.map(item => item.ngay_mua),
        datasets: [
          {
            label: 'Revenue',
            data: data.map((item) => item.trigia),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      })
    }, 1000)

  }, [])
  
  return (
    <div className="App">
      <div className='chart'>
        {
          chartData && chartData?.datasets && (
            <Bar 
              options={ {
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Revenue',
                    },
                  },
                }} 
              data={chartData} 
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
