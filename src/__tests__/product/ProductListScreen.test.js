import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import ProductList from "../../pages/product/component/ProductList"

describe("Product List Screen", ()=>{
    afterEach(cleanup);
    it('Should Get List data successfully when no data list', () => {
        const bloc = jest.fn()
        const getListProductMock = jest.fn()
        const addProductMock = jest.fn()
        bloc.mockReturnValue({
            // Nanti beri contoh listnya array kosong []
            // maka handle delete dan update tidak ditemukan
            list : [],
            getListProduct : getListProductMock,
            handleDelete : jest.fn(),
            handleUpdate : jest.fn(),
            handleAdd : addProductMock
        });

        render(
            <ProductList bloc={bloc}/>
        )
        expect(getListProductMock.mock.calls.length).toBe(1)
        fireEvent.click(screen.getByText('Add Product'));
        expect(addProductMock.mock.calls.length).toBe(1)
    })
    it('Should Get List data successfully', () => {
        const bloc = jest.fn()
        const getListProductMock = jest.fn()
        const addProductMock = jest.fn()
        const deleteProductMock = jest.fn()
        const updateProductMock = jest.fn()
        bloc.mockReturnValue({
            list : [{id: "001", name: "shampoo"}],
            getListProduct : getListProductMock,
            handleDelete : deleteProductMock,
            handleUpdate : updateProductMock,
            handleAdd : addProductMock
        });

        render(
            <ProductList bloc={bloc}/>
        )
        expect(getListProductMock.mock.calls.length).toBe(1)
        fireEvent.click(screen.getByText('Add Product'));
        expect(addProductMock.mock.calls.length).toBe(1)
        fireEvent.click(screen.getByText('Update'));
        expect(updateProductMock.mock.calls.length).toBe(1)
        fireEvent.click(screen.getByText('Delete'));
        expect(deleteProductMock.mock.calls.length).toBe(1)
    })

})