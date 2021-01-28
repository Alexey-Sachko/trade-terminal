import React from "react";
import {
  Root,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "./MarketDepth.styled";

export type DepthDataItem = {
  price: number;
  amount: number;
};

export type Props = {
  list: DepthDataItem[];
};

export const MarketDepth = React.memo<Props>(({ list }) => {
  return (
    <Root>
      <Table>
        <thead>
          <TableRow>
            <TableHead style={{ minWidth: "100px" }}>amount</TableHead>
            <TableHead>price</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {list.map(({ amount, price }, idx) => (
            <TableRow key={idx}>
              <TableCell>{amount}</TableCell>
              <TableCell>{price}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Root>
  );
});

MarketDepth.displayName = "MarketDepth";
