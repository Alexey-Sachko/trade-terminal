import React from "react";
import { depthStubData } from "../../data/depthData";
import { MarketDepthView } from "./MarketDepthView";

export const MarketDepth = React.memo(() => {
  return <MarketDepthView asks={depthStubData} bids={depthStubData} />;
});

MarketDepth.displayName = "MarketDepth";
