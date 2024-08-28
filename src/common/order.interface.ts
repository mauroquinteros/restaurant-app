export interface IOrder {
  id: string;
  quantity: number;
  state: string;
  recipes: { id: string; name: string }[];
  createdAt: string;
}

export type GroupedOrdersByStatus = {
  requested?: IOrder[];
  preparing?: IOrder[];
  prepared?: IOrder[];
} | null;
