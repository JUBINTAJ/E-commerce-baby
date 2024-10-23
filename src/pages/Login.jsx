

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/user");
      if (!response.ok) throw new Error("Network response was not ok");
      const users = await response.json();
  

      const user = users.find(
        (user) => user.email === mail && user.password === pass
      );
      if(mail == 'admintaj@gmail.com' &&pass == '4102005')
      {
        navigate('/Adminhome')
        return
      } 
      
      
      
      if (user.block == true){
        alert("your id is admin is blocked ")
        navigate('/')
        return
      }




        if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate('/');
      } else {
        alert("Failed to login. Enter valid details or please register.");
        navigate("/Registration");
      }
    } catch (error) {
      alert("Failed to login. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto bg-white shadow-2xl rounded-lg p-6 lg:p-12">
        <form
          className="flex flex-col items-center border-gray-800 rounded-xl sm:max-w-96 m-auto mt-14 gap-4 text-gray-600"
          onSubmit={handleSignIn}
        >
          <div className="inline-flex items-center gap-2 mb-2 mt-10">
            <p className="text-4xl">Login</p>
          </div>
          <input
            type="email"
            id="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-800 rounded-xl"
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full px-3 py-2 border border-gray-800 rounded-xl"
            placeholder="Enter your password"
            required
          />
          <p>Don't have an account?</p>
          <Link to={"/Registration"}>
            <p>Register</p>
          </Link>
          <button
            className="bg-blue-600 text-white py-1 px-2 rounded-xl"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
