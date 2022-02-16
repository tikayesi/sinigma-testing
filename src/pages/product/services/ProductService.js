import client from "../../../shared/http-client/Client";

const ProductService = () => {
 async function getProducts(data){
    const response =  await client.get('/products', {params:data})
    return response;
  }
  
   async function getProduct(id){
      const response = await client.get(`/products/${id}`)
      return response;
  }
  
   async function createProduct(product){
      const response = await client.post('/products', product)
      return response;
  }
  
   async function updateproduct(product){
      const response = await client.put('/products', product)
      return response;
  }
  
   async function deleteProduct(id){
      const response = await client.delete(`/products/${id}`)
      return response;
  }

  return {
      getProducts,
      getProduct,
      createProduct,
      updateproduct,
      deleteProduct
  }
}

export default ProductService;