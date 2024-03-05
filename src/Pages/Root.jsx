import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useState } from "react";

export const MyContext = createContext("");

const Root = () => {
  const [bg, setBg] = useState(false);
  return (
    <div className="bg-[#f4f4d98d] h-full">
      <MyContext.Provider value={{ bg, setBg }}>
        <Outlet></Outlet>
      </MyContext.Provider>
      <ToastContainer position="top-center" autoClose={1300} theme="dark" />
    </div>
  );
};

export default Root;
