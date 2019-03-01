import { Line, mixins } from "vue-chartjs";

Chart.defaults.global.defaultFontColor = "#727180";
Chart.defaults.global.defaultFontFamily = "Chivo";
Chart.defaults.global.hover.intersect = false;
//Chart.defaults.global.legend.labels.usePointStyle = true;

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ["options"],
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
