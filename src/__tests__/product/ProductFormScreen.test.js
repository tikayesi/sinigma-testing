import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { ProductForm } from "../../pages/product/component/ProductForm";

describe('ProductForm Screen', () => {
    afterEach(cleanup);
    let bloc = jest.fn()
    let handleSubmitMock;
    let handleUpdateMock;

    beforeEach(() => {
        handleSubmitMock = jest.fn();
        handleUpdateMock = jest.fn();
        bloc.mockReturnValue({
            handleSubmit : handleSubmitMock,
            handleUpdate : handleUpdateMock,
            params: {}
        });
    })
    it('Should submit successfully', async () =>{
        bloc.mockReturnValue({
            handleSubmit : handleSubmitMock,
            params: {}
        });
        render(
            <ProductForm bloc={bloc}/>
        )

        fireEvent.change(screen.getByPlaceholderText("Id"), {target: {value: "dummyId"}})
        fireEvent.change(screen.getByPlaceholderText("Name"), {target: {value: "dummyName"}})
        fireEvent.click(screen.getByText('Submit'))

        await waitFor(() => {
            expect(handleSubmitMock.mock.calls.length).toBe(1);
            expect(handleSubmitMock).toHaveBeenCalledWith({"id": "dummyId", "name": "dummyName"});
            expect(screen.queryByText('Required!')).toBeNull();
        })
    })

    it('Should update successfully', async () =>{
        let getProductById = jest.fn()
        getProductById.mockReturnValue({data:{
            id: "001",
            name : "Shampo"
        }})
        bloc.mockReturnValue({
            handleUpdate : handleUpdateMock,
            params: {id : "001"},
            getProductById : getProductById
        });
        render(
            <ProductForm bloc={bloc}/>
        )

        fireEvent.change(screen.getByPlaceholderText("Id"), {target: {value: "dummyId"}})
        fireEvent.change(screen.getByPlaceholderText("Name"), {target: {value: "dummyName"}})
        fireEvent.click(screen.getByText('Submit'))

        await waitFor(() => {
            expect(handleUpdateMock.mock.calls.length).toBe(1);
            expect(handleUpdateMock).toHaveBeenCalledWith({"id": "dummyId", "name": "dummyName"});
            expect(screen.queryByText('Required!')).toBeNull();
        })
    })

    it('Should cancel successfully', async () =>{
        let handleCancelMock = jest.fn()
        bloc.mockReturnValue({
            handleSubmit : handleSubmitMock,
            params: {},
            handleCancel : handleCancelMock
        });
        render(
            <ProductForm bloc={bloc}/>
        )

        fireEvent.click(screen.getByText('Cancel'))

        await waitFor(() => {
            expect(handleCancelMock.mock.calls.length).toBe(1);
        })
    })


})