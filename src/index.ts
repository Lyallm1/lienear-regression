import { drawChart } from "./chart";
import { pats, wags, wagsStatistics, w, b } from "./model";

function createChartData(pats: number[], wags: number[]) {
  return pats.map((p, index) => ({ x: p, y: wags[index] }));
}

drawChart(
  null,
  createChartData(
    pats,
    pats.map((p) => wags(w, b, p))
  ),
  { label: "Wags over pats (model)" }
);

drawChart(
  document.getElementById("statistics") as HTMLCanvasElement,
  createChartData(pats, wagsStatistics),
  { label: "Wags over pats (real)" }
);
