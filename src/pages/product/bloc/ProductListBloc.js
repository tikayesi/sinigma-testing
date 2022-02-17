// import { useNavigate } from "react-router-dom";

const ProductListBloc = (useProductList, productRepository, navigation) => {
  // const navigate = useNavigate();
  let { screenState, setScreenState } = useProductList();
  let { getProducts, deleteProduct } = productRepository();
  // Setelah dicoba menggunakan navigation error, maka kita bisa copot navigasinya
  const {navigateTo} = navigation()
  // Dokumentasi navigasi terpisah di react testing
  // https://callstack.github.io/react-native-testing-library/docs/react-navigation/

  const getListProduct = async () => {
    try {
      // contoh mengirimkan query param
      // const response = await getProducts({id : "001"});
      setScreenState({isLoading : true});
      const response = await getProducts();
      setScreenState({list : response.data.data,  isLoading : false});
    } catch (error) {
      // console.error(error);
      setScreenState({list : [], error: "Error", isLoading : false})
    }
  };

  const handleDelete = async (e) => {
    try {
      setScreenState({isLoading : true})
      await deleteProduct(e.id);
      getListProduct();
    } catch (error) {
      setScreenState({list : [], error: "Error", isLoading : false})
      // console.log(error);
    }
  };

  const handleUpdate = (id) => {
    navigateTo(`form/${id}`)
  }

  const handleAdd = () => {
    navigateTo('form')
  }

  return {
    screenState,
    getListProduct,
    handleDelete,
    handleUpdate,
    handleAdd
  };
};

export default ProductListBloc;
