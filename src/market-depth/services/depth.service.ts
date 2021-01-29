import { DepthResponse } from "../model/dto";
import { DepthViewData } from "../model/view";

const apiBaseURL = "/api/v3";

const symbol = "BTCUSDT";

async function getViewDepth(): Promise<DepthResponse> {
  const res = await fetch(`${apiBaseURL}/depth?symbol=${symbol}&limit=20`);
  const body = await res.json();
  return body;
}

export class DepthService {
  async getViewDepth(): Promise<DepthViewData> {
    const res = await getViewDepth();

    return {
      asks: res.asks.map(([price, amount]) => ({ amount, price })).reverse(),
      bids: res.bids.map(([price, amount]) => ({ amount, price })),
    };
  }
}
