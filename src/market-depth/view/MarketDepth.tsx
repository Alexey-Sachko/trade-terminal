import React from "react";
import { depthStubData } from "../../data/depthData";
import { useDepthService } from "../services/ctx";
import { MarketDepthView } from "./MarketDepthView";

export const MarketDepth = React.memo(() => {
  const service = useDepthService();

  React.useEffect(() => {
    service.getViewDepth();
  }, []);

  return <MarketDepthView asks={depthStubData} bids={depthStubData} />;
});

MarketDepth.displayName = "MarketDepth";
