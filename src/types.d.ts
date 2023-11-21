export type GroceryItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type Grocery = {
  data: GroceryItem[];
  status: string;
};

export type RootState = {
  cart: GroceryItem[];
  grocery: Grocery;
};
