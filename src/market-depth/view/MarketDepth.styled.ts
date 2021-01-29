import styled from "styled-components";

export const Root = styled.div``;

export const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid rgb(200, 200, 200);
  font-size: 14px;
`;

export const TableRow = styled.tr``;

export type TableCellProps = {
  head?: boolean;
};

export const TableCell = styled.td`
  padding: 0;
  padding-left: 5px;
  padding-right: 5px;
`;

export const PriceCell = styled(TableCell)`
  border-left: 1px solid rgb(190, 190, 190);
`;

export const TableHead = styled.th`
  border: 1px solid rgb(190, 190, 190);
  padding: 5px;
`;
