import ProductListBloc from "../../pages/product/bloc/ProductListBloc";

describe("Product List Bloc", () => {
  let productListRepositoryMock;
  let useProductListMock;
  let navigationMock;

  beforeEach(() => {
    productListRepositoryMock = jest.fn();
    useProductListMock = jest.fn();
    navigationMock = jest.fn();
  });

  test("getProductList handler", async () => {
    let products = [
      { id: "001", name: "Saus" },
      { id: "002", name: "Susu" },
    ];
    let resp = {"isLoading": false, list: products}
    let getProductListReturnMock = jest
      .fn()
      .mockResolvedValue({ data: { data: products } });
    productListRepositoryMock.mockReturnValue({
      getProducts: getProductListReturnMock,
    });

    let setProductListMock = jest.fn();
    useProductListMock.mockReturnValue({
      screenState: resp,
      setScreenState: setProductListMock,
    });

    navigationMock.mockReturnValue({
      navigationTo: jest.fn(),
    });

    let bloc = ProductListBloc(
      useProductListMock,
      productListRepositoryMock,
      navigationMock
    );
    await bloc.getListProduct();
    expect(setProductListMock).toBeCalledTimes(2);
    expect(setProductListMock).toHaveBeenCalledWith(resp);
    // jika ada pertanyaan
    // memastikan bahwa list yang di set sama dengan list yang dikirim
    // sebenarnya sudah dilakukan test di useProductListTest
    // Jadi tidak relate dengan test getListProduct
    expect(useProductListMock().screenState.list.length).toEqual(2)
  });

  test("handle delete", async () => {
    let products = [{ id: "001", name: "Saus" }];
    let deleteProductMock = jest.fn();
    productListRepositoryMock.mockReturnValue({
      getProducts: jest.fn(),
      deleteProduct: deleteProductMock,
    });
    let setProductListMock = jest.fn();
    useProductListMock.mockReturnValue({
      list: products,
      setScreenState: setProductListMock,
    });
    navigationMock.mockReturnValue({
      navigationTo: jest.fn(),
    });
    let bloc = ProductListBloc(
      useProductListMock,
      productListRepositoryMock,
      navigationMock
    );
    await bloc.handleDelete("002");

    expect(deleteProductMock).toBeCalledTimes(1);
  });

  test("handle delete with resolve reject", async () => {
    let products = [{ id: "001", name: "Saus" }];
    let deleteProductMock = jest.fn();
    // let deleteRes = {
    //     status:"200",
    //     message:"Data has been deleted",
    //     data:{}
    //   }
    // deleteProductMock.mockResolvedValue(deleteRes)
    productListRepositoryMock.mockReturnValue({
      getProducts: jest.fn(),
      deleteProduct: deleteProductMock,
    });
    let setProductListMock = jest.fn();
    useProductListMock.mockReturnValue({
      list: products,
      setScreenState: setProductListMock,
    });
    navigationMock.mockReturnValue({
      navigationTo: jest.fn(),
    });
    let bloc = ProductListBloc(
      useProductListMock,
      productListRepositoryMock,
      navigationMock
    );
    await bloc.handleDelete("002");

    expect(deleteProductMock).toBeCalledTimes(1);
    // await expect(deleteProductMock()).resolves.toEqual(deleteRes)
  });
  test("handle delete error when delete product rejected", async () => {
    let products = [{ id: "001", name: "Saus" }];
    let resp = {error: 'Error', isLoading : false, list : []}
    let deleteProductMock = jest.fn();
    deleteProductMock.mockRejectedValue("Error")
    productListRepositoryMock.mockReturnValue({
      getProducts: jest.fn(),
      deleteProduct: deleteProductMock,
    });
    let setProductListMock = jest.fn();
    useProductListMock.mockReturnValue({
      screenState: resp,
      setScreenState: setProductListMock,
    });
    navigationMock.mockReturnValue({
      navigationTo: jest.fn(),
    });
    let bloc = ProductListBloc(
      useProductListMock,
      productListRepositoryMock,
      navigationMock
    );
    // const res = await bloc.handleDelete("002");
    // expect.assertions(1)
        // try{
        //     await bloc.handleDelete("002");
        // }catch(e){
        //     console.log("TESSS",e);
        //     expect(e).toEqual("Error")
        // }
        // await bloc.handleDelete("002").catch(e => expect(e).toEqual(""))
        await bloc.handleDelete("002");
        expect(setProductListMock).toHaveBeenCalledWith(resp)
  });

  it("Should call navigate To when update form", () => {
    productListRepositoryMock.mockReturnValue({
      getProducts: jest.fn(),
    });

    let setProductListMock = jest.fn();
    useProductListMock.mockReturnValue({
      list: [],
      setScreenState: setProductListMock,
    });

    navigationMock.mockReturnValue({
      navigateTo: jest.fn(),
    });
    let bloc = ProductListBloc(useProductListMock, productListRepositoryMock, navigationMock)
    bloc.handleUpdate()
    expect(navigationMock).toHaveBeenCalledTimes(1)
})
it("Should call navigate To when add form", () => {
  productListRepositoryMock.mockReturnValue({
    getProducts: jest.fn(),
  });

  let setProductListMock = jest.fn();
  useProductListMock.mockReturnValue({
    list: [],
    setScreenState: setProductListMock,
  });

  navigationMock.mockReturnValue({
    navigateTo: jest.fn(),
  });
  let bloc = ProductListBloc(useProductListMock, productListRepositoryMock, navigationMock)
  bloc.handleAdd()
  expect(navigationMock).toHaveBeenCalledTimes(1)
})
});
