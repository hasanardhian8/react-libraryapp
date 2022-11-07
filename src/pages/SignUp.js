import React, {useState} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../component/Header";
import Footer from "../component/Footer";

const SignUp = () => {

  const [values, setValues] = useState({
    username : " ",
    email : " ",
    password : " "
  });

  const {username,email, password} = values;

  const handlechange = name =>(e)=>{
    //console.log(e.target.value);
    setValues({...values,[name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const {data} = await axios.post("/api/signup",{
        username,
        email,
        password
      });
      
      console.log(data);

      if (data.success === true) {
        setValues({username:"",email:"",password:""})
        toast.success("signup successfully, please login")
      }

    } catch (err) {
      console.log(err.response.data.error);
      toast.error(err.response.data.error)
    }
  }

  return (
    <div>
      <Header/>
      <form>
        <div>
          <label>username</label>
          <input onChange={handlechange("username")} id="username" type="text" placeholder="username" value={username}></input>
        </div>
        <div>
          <label>email</label>
          <input onChange={handlechange("email")} id="email" type="email" placeholder="E-mail" value={email}></input>
        </div>
        <div>
          <label>password</label>
          <input onChange={handlechange("password")} id="password" type="text" placeholder="********" value={password}></input>
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">register</button>
        </div>
      </form>
      <Footer/>
    </div>
  );
};

export default SignUp;
