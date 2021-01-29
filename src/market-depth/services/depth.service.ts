import { depthStubData } from "../../data/depthData";
import { DepthViewData } from "../model/view";

export class DepthService {
  async getViewDepth(): Promise<DepthViewData> {
    return {
      asks: depthStubData,
      bids: depthStubData,
    };
  }
}
