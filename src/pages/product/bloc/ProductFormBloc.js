import { useNavigate, useParams } from "react-router-dom";

const ProductFormBloc = (productRepository) => {
    let params = useParams();
    const readable = params.id ? true : false;
    const navigate = useNavigate();
    let {
      getProduct,
      createProduct,
      updateproduct,
    } = productRepository()

    const getProductById = async() =>{
        const res = await getProduct(params.id)
            return res;
      }
  
      const handleSubmit = async (values) => {
          try{
             let res = await createProduct(values);
              console.log(res);
              console.log(res.data);
            navigate("/products");
          } catch (error) {
            console.error(error);
          }
      }
  
      const handleUpdate = async (values) => {
          try{
              let res = await updateproduct(values)
               console.log(res);
               console.log(res.data);
             navigate("/products");
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