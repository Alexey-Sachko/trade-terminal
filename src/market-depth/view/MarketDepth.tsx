import { observer, useAsObservableSource } from "mobx-react-lite";
import React from "react";
import { useQuery } from "react-query";
import { depthService } from "../../App/services";
import { MarketDepthView } from "./MarketDepthView";

export const MarketDepth = () => {
  const { data } = useQuery("depth", () => depthService.getViewDepth(), {
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  if (!data) {
    return null;
  }

  return <MarketDepthView asks={data.asks} bids={data.bids} />;
};

MarketDepth.displayName = "MarketDepth";
