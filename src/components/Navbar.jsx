import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/ContextApi";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const store = useContext(UserContext);
  const userEmail = String(store.email);
  const index = userEmail.lastIndexOf("@");
  const userName = userEmail.substring(0, index);

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    if (document.getElementById("logoutbutton").value === "2") {
      console.log("Log out called");
      signOut(auth).then((res) => {
        console.log("Successfully logged out!");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("email");
        store.setSignedIn(false);
        store.setUser(null);
        store.setEmail(null);
        navigate("/login");
      });
    }
  };

  return (
    <div className="max-w-[1640px] flex justify-between items-center p-4 bg-gray-800 border border-gray-500">
      {/* Left side */}
      <div className="flex items-center gap-10">
        {/* <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div> */}

        <h1 id="avinyaLogo" className="text-2xl sm:text-3xl lg:text-4xl px-2">
          <span className="font-bold text-white">Avinya</span>
        </h1>

        {store.signedIn && <div className="flex items-center justify-center text-gray-200 px-4 gap-10 ms-5">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/contacts" className="hover:text-white">Contacts</Link>
          <Link to="categories" className="hover:text-white">Categories</Link>
        </div>}
        {/* <div className='hidden  md:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Multiutility</p>
          <p className='p-2'>App</p>
        </div> */}
      </div>

      {/* Search Input */}
      {/* <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input className='bg-transparent p-2 w-full focus:outline-none'  type='text'  placeholder='Search foods'/>
      </div> */}

      {/* Cart button */}
      {/* <a href="#Tools">
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          {" "}
          <BsFillCartFill size={20} className="mr-2" /> App
        </button>
      </a> */}
      {!store.signedIn ? (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSignIn}
        >
          LogIn/SignUp
        </button>
      ) : (
        <select
          name="logoutoptions"
          id="logoutbutton"
          className="p-2 rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
          onClick={handleLogOut}
        >
          <option
            value="1"
            className="p-2 cursor-pointer"
            selected
            style={{ display: "none" }}
          >
            {userName}
          </option>
          <option value="2" id="logoutoption" className="cursor-pointer">
            Log out
          </option>
        </select>
      )}
    </div>
  );
};

export default Navbar;
