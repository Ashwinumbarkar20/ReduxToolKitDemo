import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Slices/Authslices";
import { useDispatch } from "react-redux";
import { setUser } from "../Slices/UserSlice";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name, "-->", value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    dispatch(login({ userEmail: formData.email }));
    dispatch(
      setUser({
        userName: "Admin",
        userEmail: formData.userEmail,
        userId: "sjhkjmkhalskjdhflkajs",
        userRoles: "Admin",
      }),
    );
    navigate("/app/dashboard");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-start flex-col gap-2 border-solid border-2 p-1">
          <label className="container" htmlFor="email">
            Email
            <input
              className=" container border-solid border-2 rounded"
              type="text"
              name="email"
              onChange={handlechange}
            />
          </label>
          <label className="container" htmlFor="password">
            Password
            <input
              className="container  border-solid border-2 rounded"
              type="password"
              name="password"
              onChange={handlechange}
            />
          </label>
          <div className="container flex justify-evenly items-center ">
            <button className="border-solid   text-amber-700" type="submit">
              Login
            </button>
            <button className="border-solid  text-amber-700">
              {" "}
              New Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
