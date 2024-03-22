import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["2022", "2023", "2024"],
  datasets: [
    {
      label: "# of Votes",
      data: [35, 35, 30],
      backgroundColor: ["#25628f", "#f36d38", "#13deb9"],
    },
  ],
};

const labels = ["Mon", "Tues", "Wed", "Thu ", "Fri", "Sat", "Sun"];

const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const lineData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1000, 1500, 2000, 1800, 1500, 2000, 2200],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [500, 1300, 2500, 2200, 3000, 2500, 2800],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const DashboardCharts = () => {
  return (
    <div className="row" style={{ marginBottom: "1.5rem" }}>
      <div className="col-md-4">
        <div className="dataContainerBox">
          <p className="contentTitle mb-0">Yearly Updates</p>
          <p className="contentSubtitle">Total Projects</p>
          <div className="position-relative" style={{ padding: "0.5rem 5rem" }}>
            <Doughnut
              data={data}
              options={{
                cutout: "90%",
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      usePointStyle: true,
                      pointStyle: "circle",
                      padding: 40,
                    },
                  },
                },
              }}
            />
            <div className="chartTitle">
              <p>
                Projects<br></br>660
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="dataContainerBox">
          <p className="contentTitle mb-0">Performance</p>
          <p className="contentSubtitle">Overview</p>
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
