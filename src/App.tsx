import React from "react";
import "./App.css";

export const App = React.memo(() => {
  return <div className="root-container">App</div>;
});

App.displayName = "App";
