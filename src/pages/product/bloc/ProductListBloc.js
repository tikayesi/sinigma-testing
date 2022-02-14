import { useState } from "react";

const ProductListBloc = (productRepository) => {
    const [list, setList] = useState([]);

    let {
      getProducts,
      getProduct,
      createProduct,
      updateproduct,
      deleteProduct
    } = productRepository()
  
    const getListProduct = async () => {
        try {
          const response = await getProducts();
          setList(response.data.data);
          console.log(list);
        } catch (error) {
          console.error(error);
        }
      };

      const handleDelete = async(e) => {
        console.log(e);
        if ( window.confirm(`Are you sure to do this ${e.name}?`)){
        await deleteProduct(e.id)
           getListProduct()
        }else{
            getListProduct()
        }
    }

    return {
        list,
        getListProduct,
        handleDelete
    }
}

export default ProductListBloc;