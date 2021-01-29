type PriceTuple = [number, number]; // [PRICE, QTY]

export type DepthResponse = {
  lastUpdateId: number;
  bids: PriceTuple[];
  asks: PriceTuple[];
};
