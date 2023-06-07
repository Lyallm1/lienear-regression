export let w = Math.random(), b = Math.random();
export const pats = [1, 3, 5], wagsStatistics = [1, 6, 11];

export function wags(wN: number, bN: number, pats: number) {
  return wN * pats + bN;
}
export function cost(wN: number, bN: number, pats: number, target: number) {
  return (wags(wN, bN, pats) - target)**2;
}
export function dcostdw(wN: number, bN: number, pats: number, target: number) {
  return 2 * (wN * pats + bN - target) * pats;
}
export function dcostdb(wN: number, bN: number, pats: number, target: number) {
  return 2 * (wN * pats + bN - target);
}
export function makeConclusion(dcostdw: number, docstdb: number) {
  w -= dcostdw / 100;
  b -= docstdb / 100;
}
export function costTotal(wN: number, bN: number, pats: number[], target: number[]) {
  let errorTotal = 0;
  pats.forEach((p, i) => errorTotal += cost(wN, bN, p, target[i]));
  return errorTotal / pats.length;
}
export function train(wN: number, bN: number, pats: number[], target: number[]) {
  let dcostdwTotal = 0, dcostdbTotal = 0;
  pats.forEach((p, i) => {
    dcostdwTotal += dcostdw(wN, bN, p, target[i]);
    dcostdbTotal += dcostdb(wN, bN, p, target[i]);
  });
  makeConclusion(dcostdwTotal, dcostdbTotal);
}

console.log(costTotal(w, b, pats, wagsStatistics), "initial total error");
for (let i = 0; i < 1000; i += 1) train(w, b, pats, wagsStatistics);
console.log(costTotal(w, b, pats, wagsStatistics), "final total error");
