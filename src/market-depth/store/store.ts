import { action, makeObservable, observable } from "mobx";
import { depthService } from "../../App/services";
import { DepthViewData } from "../model/view";
import { DepthService } from "../services/depth.service";

class MarketDepthStore {
  @observable
  data: DepthViewData | null = null;

  constructor(private readonly _depthService: DepthService) {
    makeObservable(this);
  }

  @action
  setDepthData(d: DepthViewData) {
    this.data = d;
  }

  async fetchDepth() {
    const res = await this._depthService.getViewDepth();
    console.log("request");

    this.setDepthData(res);
  }
}

export const marketDepthStore = new MarketDepthStore(depthService);
