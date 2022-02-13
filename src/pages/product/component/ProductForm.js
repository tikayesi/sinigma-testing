import axios from "axios";
import React, {useEffect, useRef, useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createProduct, getProduct, updateproduct } from "../services/ProductService";

export const ProductForm = () =>{
    let params = useParams();
    const [newId, setNewId] = useState('');
    const [newName, setNewName] = useState('');
    const readable = params.id ? true : false;

    useEffect(() => {
      if(params.id){
        getProduct(params.id)
        .then(res => {
          setNewId(res.data.id);
          setNewName(res.data.name)
        })
    }
    }, []);

    const navigate = useNavigate();

    const handleChangeId = (event) => {
        setNewId(event.target.value)
    }

    const handleChangeName = (event) => {
        setNewName(event.target.value)
    }

    const handleSubmit = async (event) => {
        try{
           let res = await createProduct({ id : newId, name : newName });
            console.log(res);
            console.log(res.data);
          navigate("/products");
        } catch (error) {
          console.error(error);
        }
        event.preventDefault()
    }

    const handleUpdate = async (event) => {
        try{
            let res = await updateproduct( { id : newId, name : newName })
             console.log(res);
             console.log(res.data);
           navigate("/products");
         } catch (error) {
           console.error(error);
         }
        event.preventDefault()
    }

        return(
            <div>
            <h2>Product Form</h2>
                <div className="form-group row">
                <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="inputId" placeholder="Id"
                value={newId}
                onChange={e => handleChangeId(e)} readOnly={readable}/>
                </div>
            </div>
            <br></br>
            <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="inputName" placeholder="Name"
                value={newName}
                onChange={e => handleChangeName(e)}/>
                </div>
            </div>
            <br></br>
            <Link to={"/products"}><button className="btn btn-warning">Cancel</button></Link> {' '}
            <input className="btn btn-primary" type="submit" value="Submit" onClick={(e) => params.id ? handleUpdate(e) : handleSubmit(e)}/> 
            </div>
        )
    }