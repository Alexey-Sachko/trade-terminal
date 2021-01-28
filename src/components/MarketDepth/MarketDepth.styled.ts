import styled, { css } from "styled-components";

export const Root = styled.div``;

export const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid rgb(200, 200, 200);
`;

export const TableRow = styled.tr``;

export type TableCellProps = {
  head?: boolean;
};

export const TableCell = styled.td`
  border: 1px solid rgb(190, 190, 190);
  padding: 5px;
`;

export const TableHead = styled.th`
  border: 1px solid rgb(190, 190, 190);
  padding: 5px;
`;
