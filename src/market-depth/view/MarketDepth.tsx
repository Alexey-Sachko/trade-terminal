import React from "react";
import { depthStubData } from "../../data/depthData";
import { DepthViewData } from "../model/view";
import { useDepthService } from "../services/ctx";
import { MarketDepthView } from "./MarketDepthView";

export const MarketDepth = React.memo(() => {
  const [data, setData] = React.useState<DepthViewData>();

  const service = useDepthService();

  React.useEffect(() => {
    setInterval(() => service.getViewDepth().then((d) => setData(d)), 1000);
  }, []);

  if (!data) {
    return null;
  }

  return <MarketDepthView asks={data?.asks} bids={data?.bids} />;
});

MarketDepth.displayName = "MarketDepth";
