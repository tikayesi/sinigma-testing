const ProductFormBloc = (productRepository, navigation) => {
  const {paramsNav, navigateTo} = navigation();
  const params = paramsNav()
    const readable = params.id ? true : false;
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
            await createProduct(values);
            navigateTo("..");
          } catch (error) {
            throw(error);
          }
      }
  
      const handleUpdate = async (values) => {
          try{
             await updateproduct(values)
             navigateTo("..");
           } catch (error) {
             throw(error);
           }
      }

      const handleCancel = async () => {
        navigateTo("..")
      }

      return {
          params,
          readable,
          getProductById,
          handleSubmit,
          handleUpdate,
          handleCancel
      }

}

export default ProductFormBloc;