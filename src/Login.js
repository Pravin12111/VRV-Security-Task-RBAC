import { useEffect,useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [username,usernameupdate] = useState('');
    const [password,passwordupdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
    },[]);

    const ProceedLogin = (e) =>{
        e.preventDefault();
        
    }

    return (  
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>

                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input value={username} onChange={e=> usernameupdate(e.target.value)} className="form-control" />
                            </div>

                            <div className="form-group">
                                <label>Password<span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e=> passwordupdate(e.target.value)} className="form-control" />
                            </div>
                        </div>

                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;