import { DepthDataItem } from "../components/MarketDepth";

export const depthStubData: DepthDataItem[] = [];

const startPrice = 31500;
const step = 0.01;

for (let i = 0; i < 30; i++) {
  const price = startPrice - step * i;
  const amount = Math.round(Math.random() * 10000) / 100;
  depthStubData.push({ price, amount });
}
