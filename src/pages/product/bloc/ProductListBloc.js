// import { useNavigate } from "react-router-dom";

const ProductListBloc = (useProductList, productRepository, navigation) => {
  // const navigate = useNavigate();
  let { list, setList } = useProductList();
  let { getProducts, deleteProduct } = productRepository();
  // Setelah dicoba menggunakan navigation error, maka kita bisa copot navigasinya
  const {navigateTo} = navigation()
  // Dokumentasi navigasi terpisah di react testing
  // https://callstack.github.io/react-native-testing-library/docs/react-navigation/

  const getListProduct = async () => {
    try {
      // contoh mengirimkan query param
      // const response = await getProducts({id : "001"});
      const response = await getProducts();
      setList(response.data.data);
      console.log(list);
    } catch (error) {
      // console.error(error);
    }
  };

  const handleDelete = async (e) => {
    try {
      await deleteProduct(e.id);
      getListProduct();
    } catch (error) {
      // console.error(error);
    }
  };

  const handleUpdate = (id) => {
    navigateTo(`form/${id}`)
  }

  const handleAdd = () => {
    navigateTo('form')
  }

  return {
    list,
    getListProduct,
    handleDelete,
    handleUpdate,
    handleAdd
  };
};

export default ProductListBloc;
