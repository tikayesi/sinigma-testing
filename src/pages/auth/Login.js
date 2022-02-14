import axios, { Axios } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginSubmit = (event) => {
        event.preventDefault();
        let body = {
            username : username,
            password : password
        };
        axios.post('http://localhost:3000/auth', body,  { responseType: 'json' })
        .then(res=>{
            console.log("res ", res.data);
            const dataToken = res.data.token;
            sessionStorage.setItem('token', dataToken);
            console.log("sesion token",sessionStorage.getItem('token'));
            console.log("token: " + dataToken);
            navigate("/protected",{ replace: true });
        }).catch(res=>{
            alert("Username atau password salah!")
        })
    }

    const handleusername = event =>{
        setUsername(event.target.value)
      }

      const handlePassword = event =>{
        setPassword(event.target.value)
      }
    return(
            <div className='login main'>
                 <form onSubmit={loginSubmit}>
                <div className="d-flex flex-column login container">
                    <div className="d-flex align-items-center login containerCenter">
                        <div className="d-flex justify-content-end login containerEnd">
                            <div className="card w-50 login backgroundColorCard">
                                <div className="card-body">
                                <h2 className="login"><i className="fas fa-unlock-alt"></i> Login Page
                                    </h2>
                                    <br />
                                    <div>
                                        <div className={`form-group`}>
                                            <label htmlFor="exampleInputusername1">Username</label>
                                            <input type="text" className="form-control" id="exampleInputusername1" aria-describedby="usernameHelp" placeholder="Enter username"
                                          onChange={handleusername}   />
                                        </div>
                                        <label htmlFor="exampleInputusername1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="usernameHelp" placeholder="Enter password"
                                          onChange={handlePassword} />
                                    </div>
                                    <br></br>
                                    <div>
                                        <button type=" submit"
                                            className={`btn btn-primary login inputButtonawesome-button-sm`}><i
                                                className="fas fa-sign-in" ></i> Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        )
}
