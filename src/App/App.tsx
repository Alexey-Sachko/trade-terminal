import React from "react";
import { ServiceProvider } from "../market-depth/services/ctx";
import { DepthService } from "../market-depth/services/depth.service";
import { MarketDepth } from "../market-depth/view";

const depthService = new DepthService();

export const App = React.memo(() => {
  return (
    <div className="root-container">
      <ServiceProvider value={depthService}>
        <MarketDepth />
      </ServiceProvider>
    </div>
  );
});

App.displayName = "App";
