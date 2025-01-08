import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const EngagedUsersChart = () => {
  const [activeTab, setActiveTab] = useState("weekly");

  // Chart data for each tab
  const chartData = {
    weekly: {
      series: [
        { name: "Professionals", data: [20, 25, 30, 35, 40, 45, 50] },
        { name: "Users", data: [15, 20, 25, 30, 35, 40, 45] },
      ],
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    monthly: {
      series: [
        { name: "Professionals", data: [40, 50, 60, 70] },
        { name: "Users", data: [35, 45, 55, 65] },
      ],
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    yearly: {
      series: [
        { name: "Professionals", data: [300, 400, 500, 600, 700, 800, 900] },
        { name: "Users", data: [250, 350, 450, 550, 650, 750, 850] },
      ],
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
  };

  const { series, categories } = chartData[activeTab];

  // Chart options
  const chartOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 10, // Rounded corners for bars
        barHeight: "70%", // Space between individual bars
        distributed: false, // Grouped bars
      },
    },
    colors: ["#2ecc71", "#9b59b6"], // Green for Professionals, Purple for Users
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: "#8a8a8a",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}k`,
        style: {
          colors: "#8a8a8a",
        },
      },
    },
    grid: {
      borderColor: "#e7e7e7",
      strokeDashArray: 4,
    },
    tooltip: {
      y: {
        formatter: (value) => `${value}k`,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      markers: {
        radius: 30, // Circular markers
      },
    },
  };

  return (
    <div className="p-6 border-[1px] border-[#e6e4e4] rounded-lg mt-6 shadow-md mx-auto">
      {/* Title */}
      <div className="flex justify-between items-center ">
        <h2 className="text-xl font-semibold text-gray-700">Engaged Users</h2>
        {/* Dropdown */}
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="px-4 py-2 text-sm font-medium rounded border border-gray-300 mb-2 bg-white text-gray-600"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Chart */}
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default EngagedUsersChart;
