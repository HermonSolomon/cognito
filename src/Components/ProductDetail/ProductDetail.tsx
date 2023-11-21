import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../store/productSlice/productSlice";
import { RootState } from "../../types";
import { addToCart } from "../../store/cartSlice/cartSlice";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<any>();
  const product = useSelector((state: RootState) =>
    state.grocery.data.find((p) => p.id.toString() === id)
  );

  const memoizedDispatch = useCallback(dispatch, [dispatch]);

  useEffect(() => {
    if (!product) {
      memoizedDispatch(getProducts());
    }
  }, [memoizedDispatch, product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
        </div>
        <p className="text-gray-700">{product.description}</p>
        <h6 className="text-2xl font-semibold">{product.price}</h6>
        <div className="flex flex-row justify-center items-center gap-12">
          <button
            className="bg-gray-900 text-white font-semibold py-3 px-16 rounded-xl h-full "
            onClick={() => memoizedDispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
