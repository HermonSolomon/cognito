import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import RootLayout from "./Components/RootLayout/RootLayout";
import Home from "./Components/Home/Home";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path={"/product/:id"} element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
