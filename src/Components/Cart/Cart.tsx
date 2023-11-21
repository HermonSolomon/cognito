import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/cartSlice/cartSlice";
import { GroceryItem, RootState } from "../../types";

const Cart = () => {
  const productCart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product: GroceryItem) => {
    dispatch(removeFromCart(product));
  };

  if (productCart.length === 0) {
    return <p>No items added</p>;
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {productCart.map((cart) => (
        <div key={cart.id} className="group relative">
          <div className="mt-4 flex justify-between flex-col gap-2 text-left">
            <div>
              <h3 className="text-sm text-gray-700">{cart.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{cart.description}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">£ {cart.price}</p>
            <button
              className="bg-red-500 text-white rounded-md px-3 py-2 text-sm font-medium w-32"
              aria-current="page"
              onClick={() => handleRemoveFromCart(cart)}
            >
              Remove Item
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
