import {act, renderHook} from "@testing-library/react-hooks";
import UseProductList from "../../pages/product/bloc/UseProductList";
//npm install --save-dev @testing-library/react-hooks

test('set product list', () => {
    const products = [{id: "001", name: "Saus"}, {id: "002", name: "Susu"}]
    const {result} = renderHook(() => UseProductList([]));
    act(() => {
        result.current.setList( products)
    })
    expect(result.current.list).toBe( products)
    // kalo yang dibandingin stringnya pake ini, kalo contoh diatas yang dibandingin sama2 reff value object
    // expect(result.current.list).toStrictEqual( products)
})