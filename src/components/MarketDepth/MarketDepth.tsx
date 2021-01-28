import React from "react";
import { Root } from "./MarketDepth.styled";

export const MarketDepth = React.memo(() => {
  return (
    <Root>
      <table>
        <tbody>
          <tr>
            <td>40,67</td>
            <td>31500</td>
          </tr>
        </tbody>
      </table>
    </Root>
  );
});

MarketDepth.displayName = "MarketDepth";
