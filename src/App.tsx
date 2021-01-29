import React from "react";
import { MarketDepth } from "./market-depth/view";

export const App = React.memo(() => {
  return (
    <div className="root-container">
      <MarketDepth />
    </div>
  );
});

App.displayName = "App";
