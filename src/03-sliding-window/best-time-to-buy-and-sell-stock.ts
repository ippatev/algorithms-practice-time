/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
export function maxProfit(_prices: number[]): number {
  let minP = _prices[0];
  let maxP = 0;

  for (let i = 1; i < _prices.length; i++) {
    minP = Math.min(_prices[i], minP);
    maxP = Math.max(_prices[i] - minP, maxP);
  }

  return maxP;

  throw new Error("not implemented");
}
