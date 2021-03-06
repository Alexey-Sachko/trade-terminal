import React from "react";
import { DepthService } from "./depth.service";

const ServiceCTX = React.createContext<DepthService>(undefined as any);

export const ServiceProvider = ServiceCTX.Provider;

export const useDepthService = (): DepthService => {
  return React.useContext(ServiceCTX);
};
