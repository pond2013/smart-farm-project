import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graph() {
  useEffect(() => {
    // setChartData(data)
    // console.log(chartData);
  }, []);

  const [chartData, setChartData] = useState({});

  const tempOptions = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "อุณหภูมิ",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  const humidOptions = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "ความชื้น",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  const soilHumidOptions = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "ความชื้นในดิน",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  const windOptions = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "ความเร็วลม",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  const labels = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00"
  , "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

  const data = {
    labels,
    datasets: [
      {
        label: "อุณหภูมิ",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 40 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
    ],
  };

  return (
    <>
      <div>
        <Row>
          <Col xs={6}>
            <Line options={tempOptions} data={data} />
          </Col>
          <Col xs={6}>
          <Line options={humidOptions} data={data} />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Line options={soilHumidOptions} data={data} />
          </Col>
          <Col xs={6}>
          <Line options={windOptions} data={data} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Graph;
