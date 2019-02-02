import { Line } from "vue-chartjs";

Chart.defaults.global.defaultFontColor = "#727180";
Chart.defaults.global.defaultFontFamily = "Chivo";
//Chart.defaults.global.legend.labels.usePointStyle = true;

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Humidity %",
            borderColor: "#8864CE",
            backgroundColor: "#8864CE",
            fill: false,
            data: [40, 39, 10, 40, 39, 80, 40],
            yAxisID: "y1"
          },
          {
            label: "Temperature (°C)",
            borderColor: "#3B81BC",
            backgroundColor: "#3B81BC",
            fill: false,
            data: [60, 55, 32, 10, 2, 12, 53],
            yAxisID: "y2"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        fontFamily: "Chivo",
        scales: {
          yAxes: [
            {
              id: "y1",
              type: "linear",
              position: "left"
            },
            {
              id: "y2",
              type: "linear",
              position: "right",
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    );
  }
};
