import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import PropTypes from "prop-types";
import { rootReducer } from "./store/store";

const store = ({ preloadedState } = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: { cart: preloadedState },
  });
};

function render(ui, { initialState, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return (
      <Provider store={store({ preloadedState: initialState })}>
        {children}
      </Provider>
    );
  }

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
export { store };
