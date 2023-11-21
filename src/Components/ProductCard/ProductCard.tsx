import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice/cartSlice";
import { getProducts } from "../../store/productSlice/productSlice";
import { GroceryItem, RootState } from "../../types";

const ProductCard = () => {
  const dispatch = useDispatch<any>();
  const { data: grocery, status } = useSelector(
    (state: RootState) => state.grocery
  );

  const memoizedDispatch = useCallback(dispatch, [dispatch]);

  useEffect(() => {
    memoizedDispatch(getProducts());
  }, [memoizedDispatch]);

  const handleAddToCart = (product: GroceryItem) => {
    memoizedDispatch(addToCart(product));
  };

  if (status === "loading") {
    return <p>Loading ...</p>;
  }

  if (status === "error") {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {grocery?.map((product) => {
            return (
              <li key={product.id} className="group relative list-none">
                <div className="mt-4 flex justify-between flex-col gap-2 text-left">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <button
                      className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium w-32"
                      aria-current="page"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to cart
                    </button>
                    <p className="text-sm font-medium text-gray-900">
                      £ {product.price}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
