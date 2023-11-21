import "@testing-library/jest-dom/extend-expect";
import reducer, {
  addToCart,
  removeFromCart,
} from "../../store/cartSlice/cartSlice";
import { store, screen, render } from "../../test-util";
import { GroceryItem } from "../../types";
import { getProducts } from "../productSlice/productSlice";
import Cart from "../../Components/Cart/Cart";

const initialCartItems = [
  { id: 1, name: "Item 1", description: "Item 1 description", price: 10 },
  { id: 2, name: "Item 2", description: "Item 2 description", price: 20 },
];

const mockedStore = store();

// Sample grocery item for testing
const sampleGroceryItem: GroceryItem = {
  id: 3,
  name: "Item 3",
  description: "Item 3 description",
  price: 30,
};

describe("cartSlice", () => {
  it("should handle addToCart action", () => {
    const initialState = [...initialCartItems];
    const nextState = reducer(initialState, addToCart(sampleGroceryItem));

    expect(nextState).toHaveLength(initialState.length + 1);
    expect(nextState).toContainEqual(sampleGroceryItem);
  });

  it("should handle removeFromCart action", () => {
    const initialState = [...initialCartItems];
    mockedStore.dispatch(addToCart(sampleGroceryItem));

    const nextState = reducer(initialState, removeFromCart(sampleGroceryItem));

    expect(nextState).toHaveLength(initialState.length);
    expect(nextState).not.toContainEqual(sampleGroceryItem);
  });

  it("should render no items added when cart is empty", () => {
    render(<Cart />);

    mockedStore.dispatch(getProducts());
    const { data } = mockedStore.getState().grocery;
    expect(data).toEqual([]);
    expect(screen.queryByText(/No items added/i)).toBeInTheDocument();
  });
});
