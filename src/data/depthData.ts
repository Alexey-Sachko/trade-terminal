import { DepthDataViewItem } from "../market-depth/model/view";

export const depthStubData: DepthDataViewItem[] = [];

const startPrice = 31500;
const step = 0.01;

for (let i = 0; i < 30; i++) {
  const price = startPrice - step * i;
  const amount = Math.round(Math.random() * 10000) / 100;
  depthStubData.push({ price, amount });
}
