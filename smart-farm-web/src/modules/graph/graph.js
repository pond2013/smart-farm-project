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
    fetch("http://localhost:8080/api/Sample/graphsify", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        for (let item of data) {
          console.log(item.entries);
          setApiData((list) => [...list, item.entries]);
          setTempList((list) => [...list, item.entries.temperature]);
          setHumidList((list) => [...list, item.entries.airMoisture]);
          setSoilHumidList((list) => [...list, item.entries.soilMoisture]);
          setWindList((list) => [...list, item.entries.windSpeed]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [apiData]);

  const [apiData, setApiData] = useState([]);
  const [tempList, setTempList] = useState([]);
  const [humidList, setHumidList] = useState([]);
  const [soilHumidList, setSoilHumidList] = useState([]);
  const [windList, setWindList] = useState([]);

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
        position: "left",
        min: 0,
        max: 40,
        stepSize: 5,
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
        position: "left",
        min: 0,
        max: 100,
        stepSize: 10,
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
        position: "left",
        min: 0,
        max: 100,
        stepSize: 10,
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
        position: "left",
        min: 0,
        max: 20,
        stepSize: 2,
      },
    },
  };

  const labels = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

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
            <Line
              options={tempOptions}
              data={{
                labels,
                datasets: [
                  {
                    label: "อุณหภูมิ",
                    data: tempList,
                    borderColor: "rgb(229, 29, 69)",
                    backgroundColor: "rgb(229, 29, 69)",
                    yAxisID: "y",
                    fill: false,
                    tension: 0.1,
                  },
                ],
              }}
            />
          </Col>
          <Col xs={6}>
            <Line options={humidOptions} data={{
                labels,
                datasets: [
                  {
                    label: "ความชื้น",
                    data: humidList,
                    borderColor: "rgb(13, 63, 241)",
                    backgroundColor: "rgb(13, 63, 241)",
                    yAxisID: "y",
                    fill: false,
                    tension: 0.1,
                  },
                ],
              }} />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Line options={soilHumidOptions} data={{
                labels,
                datasets: [
                  {
                    label: "ความชื้นในดิน",
                    data: soilHumidList,
                    borderColor: "rgb(137, 114, 112)",
                    backgroundColor: "rgb(137, 114, 112)",
                    yAxisID: "y",
                    fill: false,
                    tension: 0.1,
                  },
                ],
              }} />
          </Col>
          <Col xs={6}>
            <Line options={windOptions} data={{
                labels,
                datasets: [
                  {
                    label: "ความเร็วลม",
                    data: windList,
                    borderColor: "rgb(8, 181, 8)",
                    backgroundColor: "rgb(8, 181, 8)",
                    yAxisID: "y",
                    fill: false,
                    tension: 0.1,
                  },
                ],
              }} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Graph;
