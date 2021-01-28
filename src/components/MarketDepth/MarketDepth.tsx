import React from "react";
import {
  Root,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "./MarketDepth.styled";

export const MarketDepth = React.memo(() => {
  return (
    <Root>
      <Table>
        <thead>
          <TableRow>
            <TableHead>amount</TableHead>
            <TableHead>price</TableHead>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>40,67</TableCell>
            <TableCell>31500</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </Root>
  );
});

MarketDepth.displayName = "MarketDepth";
