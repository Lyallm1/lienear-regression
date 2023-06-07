import { b, pats, w, wags, wagsStatistics } from "./model/index.js";

import { drawChart } from "./chart/index.js";

function createChartData(pats: number[], wags: number[]) {
  return pats.map((x, index) => ({ x, y: wags[index] }));
}

drawChart(null, createChartData(pats, pats.map(p => wags(w, b, p))), { label: "Wags over pats (model)" });
drawChart(document.getElementById("statistics") as HTMLCanvasElement, createChartData(pats, wagsStatistics), { label: "Wags over pats (real)" });
