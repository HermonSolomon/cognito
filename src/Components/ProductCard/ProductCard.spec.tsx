import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  store,
  screen,
  render,
  fireEvent,
  waitFor,
  act,
} from "../../test-util";
import App from "../../App";
import { mockProduct, fetchedData } from "../../mocks/mockGroceriesData";
import { getProducts } from "../../store/productSlice/productSlice";

const API_URL =
  "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });

const mockNetworkRequests = () => {
  mock.onGet(API_URL).reply(200, fetchedData);
};

const unMockNetworkRequests = () => {
  mock.resetHistory();
};

const mockedStore = store();

describe("Product Card", () => {
  beforeEach(() => {
    mockNetworkRequests();
  });

  afterEach(() => {
    unMockNetworkRequests();
  });

  describe("API Calls", () => {
    it("should fetch groceries", async () => {
      const { data } = await axios.get(API_URL);

      render(<App />);

      expect(screen.queryByText(/Loading.../i)).toBeInTheDocument();
      expect(
        screen.queryByText(/Gala Apples (5 lbs)/i)
      ).not.toBeInTheDocument();

      await waitFor(() => {
        expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
      });

      await waitFor(() => {
        expect(data).toEqual(fetchedData);
      });
    });

    it("should render loading followed by error message", async () => {
      // Mock the network error
      mock.onGet(API_URL).networkError();

      render(<App />);

      await waitFor(() => {
        expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Something went wrong/i)).toBeInTheDocument();
      });
    });
  });

  describe("Rendering Product detail", () => {
    it("should navigate to the correct product detail page", async () => {
      mock.onGet(API_URL).reply(200, fetchedData);

      const initialState = {
        grocery: {
          data: [mockProduct],
          status: "succeeded",
        },
      };

      render(<App />, { initialState });

      await act(async () => {
        await mockedStore.dispatch(getProducts());
      });

      const productLink = screen.getByText(fetchedData[0].name);

      expect(productLink).toBeInTheDocument();

      fireEvent.click(productLink);

      expect(window.location.pathname).toBe(`/product/${mockProduct.id}`);
    });
  });
});
