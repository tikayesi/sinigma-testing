import ProductFormBloc from "../../pages/product/bloc/ProductFormBloc";

describe('Product Form Bloc', () => {
    let data = {id : "001", name: "Indomie"}
    let productsFormRepoMock = jest.fn();
    let navigationMock = jest.fn();
    let paramsNavMock = jest.fn();
    let createProductMock = jest.fn()
    let updateProductMock = jest.fn()
    let getProductMock = jest.fn()

    beforeEach(() => {
        paramsNavMock.mockReturnValue({
            id : '001'
        })

        productsFormRepoMock.mockReturnValue({
            createProduct: createProductMock,
            updateproduct : updateProductMock,
            getProduct: getProductMock
        })

        navigationMock.mockReturnValue({
            navigateTo : jest.fn(),
            paramsNav: paramsNavMock
        })
    })

    it('Should create product successfully', async () => {

        let bloc = ProductFormBloc(productsFormRepoMock, navigationMock)
        await bloc.handleSubmit(data)
        expect(createProductMock).toBeCalledTimes(1)


    })

    it('Should update product successfully', async () => {

        let bloc = ProductFormBloc(productsFormRepoMock, navigationMock)
        await bloc.handleUpdate(data)
        expect(updateProductMock).toBeCalledTimes(1)
    })

    it('Should handle error when submit rejected', async() => {
        createProductMock.mockRejectedValue("Error")
        let bloc = ProductFormBloc(productsFormRepoMock, navigationMock)
        try{
                await bloc.handleSubmit(data);
            }catch(e){
                expect(e).toEqual("Error")
            }
    })

    it('Should handle error when update rejected', async() => {
        updateProductMock.mockRejectedValue("Error")
        let bloc = ProductFormBloc(productsFormRepoMock, navigationMock)
        try{
                await bloc.handleUpdate(data);
            }catch(e){
                expect(e).toEqual("Error")
            }
    })

    it("Should return data successfully when get product by id", async() => {
        let bloc = ProductFormBloc(productsFormRepoMock, navigationMock)
        bloc.getProductById("001")
        expect(getProductMock).toHaveBeenCalledWith("001")
    })

    it("Should call navigate To when cancel form", () => {
        let bloc = ProductFormBloc(productsFormRepoMock, navigationMock)
        bloc.handleCancel()
        expect(navigationMock).toHaveBeenCalledTimes(1)
    })

    it("Should return readable true when params id", async () => {
        let bloc = ProductFormBloc(productsFormRepoMock, navigationMock)
        expect(bloc.readable).toEqual(true)
    })




})