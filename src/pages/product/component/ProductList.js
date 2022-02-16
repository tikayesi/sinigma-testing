import { useEffect } from "react";

const ProductList = ({bloc}) => {
  const {list, getListProduct, handleDelete, handleUpdate,
    handleAdd} = bloc();

  useEffect(() => {
    getListProduct();
  },[]);


  return (
    <>
      <div>
        <h2>Product List</h2>
        <button type="button" className="btn btn-success" onClick={() => handleAdd()}>
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
                    onClick={() => handleUpdate(product.id)}>
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
