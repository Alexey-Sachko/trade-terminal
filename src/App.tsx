import React from "react";
import { MarketDepth } from "./components/MarketDepth";
import { depthStubData } from "./data/depthData";

export const App = React.memo(() => {
  return (
    <div className="root-container">
      <MarketDepth list={depthStubData} />
    </div>
  );
});

App.displayName = "App";
