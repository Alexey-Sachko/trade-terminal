import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ServiceProvider } from "../market-depth/services/ctx";
import { MarketDepth } from "../market-depth/view";
import { MarketDepth1 } from "../market-depth/view/MarketDepth1";
import { depthService } from "./services";

const queryClient = new QueryClient();

export const App = React.memo(() => {
  return (
    <div className="root-container">
      <QueryClientProvider client={queryClient}>
        <ServiceProvider value={depthService}>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "20px" }}>
              <MarketDepth />
            </div>
            <MarketDepth1 />
          </div>
        </ServiceProvider>
      </QueryClientProvider>
    </div>
  );
});

App.displayName = "App";
