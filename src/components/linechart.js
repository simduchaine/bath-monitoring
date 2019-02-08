import { Line } from "vue-chartjs";

Chart.defaults.global.defaultFontColor = "#727180";
Chart.defaults.global.defaultFontFamily = "Chivo";
//Chart.defaults.global.legend.labels.usePointStyle = true;

export default {
  extends: Line,
  props: ["labels", "tempArray", "humidArray"],
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: "Humidity %",
            borderColor: "#8864CE",
            backgroundColor: "#8864CE",
            fill: false,
            data: this.humidArray,
            yAxisID: "y1"
          },
          {
            label: "Temperature (°C)",
            borderColor: "#3B81BC",
            backgroundColor: "#3B81BC",
            fill: false,
            data: this.tempArray,
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
