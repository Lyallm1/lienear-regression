export const pats = [1, 3, 5];
export const wagsStatistics = [1, 6, 11];

export let w = Math.random();
export let b = Math.random();

const learningRate = 0.01;

export function wags(wN: number, bN: number, pats: number) {
  return wN * pats + bN;
}

export function cost(wN: number, bN: number, pats: number, target: number) {
  return (wags(wN, bN, pats) - target) ** 2;
}

export function dcostdw(wN: number, bN: number, pats: number, target: number) {
  return 2 * (wN * pats + bN - target) * pats;
}

export function dcostdb(wN: number, bN: number, pats: number, target: number) {
  return 2 * (wN * pats + bN - target);
}

export function makeConclusion(dcostdw: number, docstdb: number) {
  w = w - learningRate * dcostdw;
  b = b - learningRate * docstdb;
}

// squared error cost function
export function costTotal(
  wN: number,
  bN: number,
  pats: number[],
  target: number[]
) {
  let errorTotal = 0;

  pats.forEach((p, index) => {
    errorTotal += cost(wN, bN, p, target[index]);
  });

  return errorTotal / pats.length;
}

export function train(
  wN: number,
  bN: number,
  pats: number[],
  target: number[]
) {
  let dcostdwTotal = 0;
  let dcostdbTotal = 0;
  // let errorTotal = 0;

  pats.forEach((p, index) => {
    dcostdwTotal += dcostdw(wN, bN, p, target[index]);
    dcostdbTotal += dcostdb(wN, bN, p, target[index]);
    // errorTotal += cost(wN, bN, p, target[index]);
  });

  makeConclusion(dcostdwTotal, dcostdbTotal);

  // return errorTotal / pats.length;
}

console.log(costTotal(w, b, pats, wagsStatistics), "initial total error");

for (let i = 0; i < 1000; i += 1) {
  train(w, b, pats, wagsStatistics);
}

console.log(costTotal(w, b, pats, wagsStatistics), "final total error");
