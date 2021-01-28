import React from "react";
import "./App.css";

import { MarketDepth } from "./components/MarketDepth";

export const App = React.memo(() => {
  return (
    <div className="root-container">
      <MarketDepth />
    </div>
  );
});

App.displayName = "App";
