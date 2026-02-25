import React from "react";
import { useSelector } from "react-redux";
import { Button } from "/src/components/ui/button";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Slices/Authslices";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const isLoggedIN = useSelector((state) => state.Auth.isLoggedIn);
  const userName=useSelector((state)=>state.User.userName)
const handleLogout=()=>{
dispatch(logout())
 navigate('/')
}
  return (
    <>
      <div className="px-2 flex justify-between items-center p-1 bg-amber-700 text-amber-50 h-10">
        <spam>Logo</spam>
        <ul className="flex justify-center item-center gap-1.5 ">
        
          
          {/* {isLoggedIN?"":<li className="cursor-pointer hover:border-solid-2-text-amber-100 transition " onClick={()=>{
            navigate('/Login')
          }}>Login</li>} */}
          
       
        </ul>
        <div>
       
       <span className="mr-2">{isLoggedIN?`welcome ${userName}`:""}</span>
           {isLoggedIN ? <Button onClick={handleLogout} >Logout</Button> : ""}
        </div>
      </div>
    </>
  );
}
