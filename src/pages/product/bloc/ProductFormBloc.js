import { useNavigate, useParams } from "react-router-dom";
import { createProduct, getProduct, updateproduct } from "../services/ProductService";

const ProductFormBloc = () => {
    let params = useParams();
    const readable = params.id ? true : false;
    const navigate = useNavigate();

    const getProductById = async() =>{
        const res = await getProduct(params.id)
            return res;
      }
  
      const handleSubmit = async (values) => {
          try{
             let res = await createProduct(values);
              console.log(res);
              console.log(res.data);
            navigate("/protected/products");
          } catch (error) {
            console.error(error);
          }
      }
  
      const handleUpdate = async (values) => {
          try{
              let res = await updateproduct(values)
               console.log(res);
               console.log(res.data);
             navigate("/protected/products");
           } catch (error) {
             console.error(error);
           }
      }

      return {
          params,
          readable,
          getProductById,
          handleSubmit,
          handleUpdate
      }

}

export default ProductFormBloc;