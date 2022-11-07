import React, {useState} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../component/Header";
import Footer from "../component/Footer";

const SignIn = () => {
  const [values, setValues] = useState({
    email : " ",
    password : " "
  });

  const {email, password} = values;

  const handlechange = name =>(e)=>{
    //console.log(e.target.value);
    setValues({...values,[name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const {data} = await axios.post("/api/signin",{
        email,
        password
      });
      
      console.log(data);

      if (data.success === true) {
        setValues({email:"",password:""})
        toast.success("signin successfully")
      }

    } catch (err) {
      console.log(err.response.data.error);
      toast.error(err.response.data.error)
    }
  }
  return (
    <div>
      <Header />
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            />{" "}
            email
            <input
              onChange={handlechange("email")}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            />
            Password
            <input
              onChange={handlechange("password")}
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            {/* <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        ></a> */}
            Forgot Password?
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
