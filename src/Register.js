import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [country, countrychange] = useState("");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in ';
    if (id === null || id === '') {
        isproceed = false;
        errormessage += ' Username';
    }
    if (name === null || name === '') {
        isproceed = false;
        errormessage += ' Fullname';
    }
    if (password === null || password === '') {
        isproceed = false;
        errormessage += ' Password';
    }
    if (email === null || email === '') {
        isproceed = false;
        errormessage += ' Email';
    }

    if(!isproceed){
        toast.warning(errormessage)
    }else{
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

        }else{
            isproceed = false;
            toast.warning('Please enter the valid email')
        }
    }
    return isproceed;
}

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = {id,name,password,email,country,address,gender};
    //console.log(regobj);
    if(IsValidate()){
      fetch("http://localhost:8000/user",{
        method: "POST",
        headers:{'content-type':'application/json'},
        body: JSON.stringify(regobj)
      }).then((res)=>{
          toast.success('Registered successfully.')
          navigate('/login');
      }).catch((err)=>{
        toast.error('Failed : '+err.message);
      });
    }
  };
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">User Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="formgroup">
                    <label htmlFor="">
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => idchange(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="formgroup">
                    <label htmlFor="">
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => passwordchange(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="formgroup">
                    <label htmlFor="">
                      Full Name <span className="errmsg">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="formgroup">
                    <label htmlFor="">
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="formgroup">
                    <label htmlFor="">
                      Phone <span className="errmsg">*</span>
                    </label>
                    <input
                      className="form-control"
                      value={phone}
                      onChange={(e) => phonechange(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="formgroup">
                    <label htmlFor="">
                      Country <span className="errmsg">*</span>
                    </label>

                    <select value={country} onChange={e => countrychange(e.target.value)}  className="form-control">
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="Singapore">Singapore</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="formgroup">
                    <label htmlFor="">Address</label>
                    <textarea
                      className="form-control"
                      value={address}
                      onChange={(e) => addresschange(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="formgroup">
                    <label>Gender</label>
                    <br></br>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="app-check"
                      checked={gender === "male"}
                      onChange={(e) => genderchange(e.target.value)}
                    />
                    <label>Male</label>

                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="app-check"
                      checked={gender === "female"}
                      onChange={(e) => genderchange(e.target.value)}
                    />
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <Link className="btn btn-danger" to={'/login'}>Back</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
