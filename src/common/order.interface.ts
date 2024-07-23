export interface IOrder {
  id: string;
  quantity: number;
  state: string;
  recipes: { id: string; name: string }[];
  createdAt: string;
}

export type GroupedOrdersByStatus = {
  prepared?: IOrder[];
  requested?: IOrder[];
  preparing?: IOrder[];
} | null;
