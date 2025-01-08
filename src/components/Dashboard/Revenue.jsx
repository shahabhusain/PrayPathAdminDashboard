import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Revenue = () => {
  const [activeTab, setActiveTab] = useState("weekly");

  // Data for Weekly, Monthly, and Yearly charts
  const chartData = {
    weekly: {
      series: [
        {
          name: "Revenue",
          data: [200, 400, 600, 800, 400, 700, 900],
        },
      ],
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    monthly: {
      series: [
        {
          name: "Revenue",
          data: [1000, 1500, 1200, 2000, 1800, 2200, 2500],
        },
      ],
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    yearly: {
      series: [
        {
          name: "Revenue",
          data: [12000, 15000, 14000, 18000, 20000, 22000, 25000, 27000],
        },
      ],
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
  };

  // Current chart data based on activeTab
  const { series, categories } = chartData[activeTab];

  const chartOptions = {
    chart: {
      height: 350,
      type: "area",
      toolbar: { show: false },
    },
    colors: ["#2ecc71"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    xaxis: { categories, axisBorder: { show: false }, axisTicks: { show: false } },
    yaxis: { labels: { formatter: (value) => `${value}k` } },
    tooltip: { x: { show: false }, y: { formatter: (value) => `${value}k` } },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    grid: { borderColor: "#e7e7e7", strokeDashArray: 4 },
  };

  return (
    <div className="p-6 border-[1px] border-[#e6e4e4] rounded-lg shadow-md mr-8 mt-6">
   <div className=" flex items-center justify-between">
   <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
        Revenue Graph View: <span className="text-purple-600">2000$</span>
      </h2>

      {/* Dropdown for selecting Weekly, Monthly, Yearly */}
      <div className="flex justify-center">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="px-4 py-2 text-sm font-medium rounded border border-gray-300 bg-white text-gray-600"
        >
          {["weekly", "monthly", "yearly"].map((tab) => (
            <option key={tab} value={tab}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </option>
          ))}
        </select>
      </div>
   </div>

      {/* Chart */}
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default Revenue;
