import Chart from 'chart.js/auto';

type ChartData = {x: number; y: number;}[];

interface ChartOptions {
  label: string;
}

function createChartData(data: ChartData, options: ChartOptions) {
  return {
    datasets: [{
      label: options.label,
      data,
      backgroundColor: 'rgb(255, 99, 132)'
    }],
  }
}

function createConfig(data: ChartData, options: ChartOptions) {
  return {
    type: 'scatter',
    data: createChartData(data, options),
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        }
      }
    }
  }
}

export function drawChart(element: HTMLCanvasElement | null, data: ChartData, options: ChartOptions) {
  const ctx = element ?? document.querySelector('canvas');
  // @ts-ignore
  new Chart(ctx, createConfig(data, options));
}
