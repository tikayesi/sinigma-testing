import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getProducts } from "../services/ProductService";

const ProductList = () => {
  const [list, setList] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  },[]);

  const getProduct = async () => {
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
       getProduct()
    }else{
        getProduct()
    }

    // await confirmAlert({
    //     title: 'Confirm to delete',
    //     // String interpolation
    //     message: `Are you sure to do this ${e.name}?`,
    //     buttons: [
    //       {
    //         label: 'Yes',
    //         onClick: async () => {
    //             await axios.delete(`http://localhost:3000/products/${e.id}`)
    //             getProduct();
    //         }
    //       },
    //       {
    //         label: 'No',
    //         onClick: () => {
    //             getProduct();
    //         }
    //       }
    //     ]
    //   });
}

  return (
    <>
      <div>
        <h2>Product List</h2>
        <button type="button" className="btn btn-success" onClick={() => navigate('form')}>
          Add Product
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((product, index) => {
              return (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                    <button type="button" className="btn btn-warning btn-sm" 
                    onClick={() => navigate(`form/${product.id}`)}>
                      Update
                    </button>
                    <button value={product} onClick={() => handleDelete(product)} type="button" className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
