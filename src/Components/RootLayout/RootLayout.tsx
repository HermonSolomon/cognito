import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Provider } from "react-redux";
import { persistor, store } from "../../store/store";
import { PersistGate } from "redux-persist/integration/react";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Outlet />
        </PersistGate>
      </Provider>
    </>
  );
};

export default RootLayout;
