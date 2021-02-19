import { observer, useAsObservableSource } from "mobx-react-lite";
import React from "react";
import { useQuery } from "react-query";
import { depthService } from "../../App/services";
import { MarketDepthView } from "./MarketDepthView";

export const MarketDepth1 = () => {
  const { data } = useQuery("depth", () => depthService.getViewDepth());

  if (!data) {
    return null;
  }

  return <MarketDepthView asks={data.asks} bids={data.bids} />;
};

MarketDepth1.displayName = "MarketDepth1";
