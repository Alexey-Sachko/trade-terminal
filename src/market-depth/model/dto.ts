import * as io from "io-ts";

type PriceTuple = [number, number]; // [PRICE, QTY]

export type DepthResponse = {
  lastUpdateId: number;
  bids: PriceTuple[];
  asks: PriceTuple[];
};

export const DepthResponseIO: io.Type<DepthResponse> = io.type({
  lastUpdateId: io.number,
  bids: io.array(io.tuple([io.number, io.number])),
  asks: io.array(io.tuple([io.number, io.number])),
});
