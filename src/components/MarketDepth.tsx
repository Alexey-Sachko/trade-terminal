import React from "react";

export const MarketDepth = React.memo(() => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>40,67</td>
            <td>31500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});

MarketDepth.displayName = "MarketDepth";
