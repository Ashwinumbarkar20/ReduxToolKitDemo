import { Button } from "@/components/ui/button";

import "./App.css";
import { Routes, Route } from "react-router-dom";


import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./components/ui/Navbar";
import Listuser from "./Pages/User/Listuser";
import Setting from "./Pages/Setting";
import AssetList from "./Pages/Asset/AssetList";
import AppLayout from "./Pages/AppLayout";
import Protected from "./components/ui/Protected";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        {/* <Route path="/Login" element={<Login />}></Route> */}
      
          <Route path="/app" element={<Protected><AppLayout /></Protected>}>

          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="user" element=<Listuser />></Route>
          <Route path="setting" element=<Setting /> />
          <Route path="asset" element=<AssetList /> />
        </Route>
       
        
      </Routes>
    </>
  );
}

export default App;
