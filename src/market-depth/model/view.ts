export type DepthDataViewItem = {
  price: number;
  amount: number;
};

export type DepthViewData = {
  bids: DepthDataViewItem[];
  asks: DepthDataViewItem[];
};
