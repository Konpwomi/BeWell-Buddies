import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto"; // Import Chart.js

function BmiChart({ bmiData }) {
  const [bmiChart, setBmiChart] = useState(null); // Reference to the BMI chart

  useEffect(() => {
    // Initialize the BMI chart
    const ctx = document.getElementById("bmiChart").getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [], // Labels will be updated dynamically
        datasets: [
          {
            label: "Weight",
            data: [], // Data will be updated dynamically
            borderColor: "rgb(27, 164, 255)",
            backgroundColor :"rgb(156, 216, 255)",
            fill: true,
          },
        ],
        datasets2: [
            {
              label: "Bmi",
              data: [21], // Data will be updated dynamically
              borderColor: "rgb(27, 164, 255)",
              backgroundColor :"rgb(156, 216, 255)",
              fill: true,
            },
          ],
      },
      
    });

    setBmiChart(chart); // Save the chart reference
  }, []);

  useEffect(() => {
    if (bmiChart && bmiData) {
      // Update the chart data
      bmiChart.data.labels = bmiData.map((_, index) => `Day ${index + 1}`);
      bmiChart.data.datasets[0].data = bmiData;

      // Update the chart options with dynamic max
      const maxBmi = Math.max(...bmiData);
      bmiChart.options.scales.y.max = maxBmi + 1; // Add a slight buffer

      // Update the chart
      bmiChart.update();
    }
  }, [bmiChart, bmiData]);

  return <canvas id="bmiChart"></canvas>;
}

export default BmiChart;
