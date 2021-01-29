import React from "react";
import { DepthDataViewItem } from "../model/view";
import {
  PriceCell,
  Root,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "./MarketDepth.styled";

export type Props = {
  bids: DepthDataViewItem[];
  asks: DepthDataViewItem[];
};

export const MarketDepthView = React.memo<Props>(({ bids, asks }) => {
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
          {asks.map(({ amount, price }, idx) => (
            <TableRow key={idx} style={{ background: "green" }}>
              <TableCell>{amount}</TableCell>
              <PriceCell>{price}</PriceCell>
            </TableRow>
          ))}
          {bids.map(({ amount, price }, idx) => (
            <TableRow key={idx} style={{ background: "red" }}>
              <TableCell>{amount}</TableCell>
              <PriceCell>{price}</PriceCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Root>
  );
});

MarketDepthView.displayName = "MarketDepthView";
