import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export const ProductForm = ({bloc}) =>{
 const {
          params,
          readable,
          getProductById,
          handleSubmit,
          handleUpdate
  } = bloc();

    const formik = useFormik({
      initialValues:{
        id: "",
        name: ""
      },
      validationSchema : Yup.object({
        name: Yup.string().required("Required!").min(5, "minimum 5 character"),
    }),
      onSubmit: () => {
        if(params.id){
          handleUpdate(formik.values)
        }else{
         handleSubmit(formik.values)
        }
      }
    })

    useEffect(() => {
      if(params.id){
        getProduct()
    }
    }, []);

    const getProduct = async() =>{
      const res = await getProductById()
      formik.values.id = res.data.id;
      formik.values.name = res.data.name;
      formik.setFieldValue(res);
    }

        return(
            <div>
            <h2>Product Form</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group row">
                <label htmlFor="id" className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm-10">
                <input type="text" name="id" className="form-control" id="id" placeholder="Id"
                value={formik.values.id}
                onChange={formik.handleChange} readOnly={readable}/>
                </div>
            </div>
            <br></br>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input type="text" name="name" className="form-control" id="name" placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                 {formik.errors.name && formik.touched.name && (
            <small className="text-danger">{formik.errors.name}</small>)}
                </div>
            </div>
            <br></br>
            <Link to={"/products"}><button className="btn btn-warning">Cancel</button></Link> {' '}
            <input className="btn btn-primary" type="submit" value="Submit"/> 
            </form>
            </div>
        )
    }