import { store } from "../../test-util";
import { fetchedData } from "../../mocks/mockGroceriesData";
import { getProducts } from "../../store/productSlice/productSlice";

const mockedStore = store();

describe("Thunks", () => {
  it("should fetch groceries with the getProducts thunk", async () => {
    await mockedStore.dispatch(getProducts());
    const { data } = mockedStore.getState().grocery;
    expect(data).toEqual(fetchedData);
    expect(data).toHaveLength(fetchedData.length);
  });
});
