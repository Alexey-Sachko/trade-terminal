import { observer, useAsObservableSource } from "mobx-react-lite";
import React from "react";
import { marketDepthStore } from "../store/store";
import { MarketDepthView } from "./MarketDepthView";

export const MarketDepth = observer(() => {
  const mStore = useAsObservableSource(marketDepthStore);

  React.useEffect(() => {
    const id = setInterval(() => {
      mStore.fetchDepth();
    }, 1000);

    return () => clearInterval(id);
  }, []);

  if (!mStore.data) {
    return null;
  }

  return <MarketDepthView asks={mStore.data.asks} bids={mStore.data.bids} />;
});

MarketDepth.displayName = "MarketDepth";
