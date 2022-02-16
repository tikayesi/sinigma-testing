import ProductService from "../../pages/product/services/ProductService"
import client from "../../shared/http-client/Client"

describe('Product list repository', () => {

    it('should return product list successfully', async () => {
        client.get = jest.fn()
        client.get.mockResolvedValue({data:{data: {id : 1}}})
        // const repo = await (await ProductService().getProducts()).data
        const repo = await (await ProductService().getProducts()).data
        const actualResponseId = repo.data.id
        expect(client.get).toHaveBeenCalledWith(`/products`, {});
        expect(actualResponseId).toBe(1);
    })

    it('should return product list with param successfully', async () => {
        client.get = jest.fn()
        const data = {
            id:1
        }
        client.get.mockResolvedValue({data:[{data: {id : "001"}}]})
        const repo = await (await ProductService().getProducts(data)).data
        const actualResponseId = repo[0].data.id
        expect(client.get).toHaveBeenCalledWith(`/products`,{params:data});
        expect(actualResponseId).toBe("001");
    })

    it('should return product object successfully', async () => {
        client.get = jest.fn()
        const id = "001"
        client.get.mockResolvedValue({data: {id : 1}})
        const repo = await (await ProductService().getProduct(id)).data
        const actualResponseId = repo.id
        // atau
        // const repo = await (await ProductService().getProduct(id))
        // const actualResponseId = repo.data.id
        expect(client.get).toHaveBeenCalledWith(`/products/${id}`)
        expect(actualResponseId).toBe(1)
    })

    it('should create product successfully', async() => {
        client.post = jest.fn()
        const product = {
            id : "001",
            name : "Shampoo"
        }
        client.post.mockResolvedValue({status: "201"})
        const repo = await ProductService().createProduct(product)
        const actualResponseStatus = repo.status
        expect(client.post).toHaveBeenCalledWith(`/products`, product)
        expect(actualResponseStatus).toBe("201")

    })

    it('should update product successfully', async() => {
        client.put = jest.fn()
        const product = {
            id : "001",
            name : "Shampoo"
        }
        client.put.mockResolvedValue({status: "200"})
        const repo = await ProductService().updateproduct(product)
        const actualResponseStatus = repo.status
        expect(client.put).toHaveBeenCalledWith(`/products`, product)
        expect(actualResponseStatus).toBe("200")

    })

    it('should delete product successfully', async() => {
        client.delete = jest.fn()
        const id = "001";
        client.delete.mockResolvedValue({status: "200"})
        const repo = await ProductService().deleteProduct(id)
        const actualResponseStatus = repo.status
        expect(client.delete).toHaveBeenCalledWith(`/products/${id}`)
        expect(actualResponseStatus).toBe("200")

    })

})