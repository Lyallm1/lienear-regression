import Chart from 'chart.js/auto';

export function drawChart(element: HTMLCanvasElement | null, data: { x: number, y: number }[], options: { label: string }) {
  new Chart(element ?? document.querySelector('canvas'), { type: 'scatter', data: { datasets: [{ label: options.label, data, backgroundColor: 'rgb(255, 99, 132)' }] }, options: { scales: { x: { type: 'linear', position: 'bottom' } } } } as any);
}
