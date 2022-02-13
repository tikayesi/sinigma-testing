import { useState } from "react";
import { deleteProduct, getProducts } from "../services/ProductService";

const ProductListBloc = () => {
    const [list, setList] = useState([]);
  
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