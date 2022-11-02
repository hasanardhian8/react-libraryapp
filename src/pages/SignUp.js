import React, {useState} from "react";

const SignUp = () => {

  const [values, setValues] = useState({
    name : " ",
    email : " ",
    password : " "
  });

  const (name,email, password)=values;

  return (
    <div>
      <form>
        <div>
          <label>username</label>
          <input id="username" type="text" placeholder="Username"></input>
        </div>
        <div>
          <label>email</label>
          <input id="email" type="email" placeholder="E-mail"></input>
        </div>
        <div>
          <label>password</label>
          <input id="password" type="text" placeholder="********"></input>
        </div>
        <div>
          <button type="submit">register</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
