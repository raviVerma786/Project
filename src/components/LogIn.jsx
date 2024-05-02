import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/ContextApi";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const LogIn = () => {
  let navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongUser,setWrongUser] = useState(false);

  const store = useContext(UserContext);

  const NavigateToHome = () => {
    let path = `/`;
    navigate(path);
  };

  const SignInHandle = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        store.setSignedIn(true);
        store.setEmail(userEmail);
        localStorage.setItem("token", userCredentials._tokenResponse.idToken);
        localStorage.setItem("userId", userCredentials._tokenResponse.localId);
        localStorage.setItem("email",userCredentials.user.email);
        store.setUser(localStorage.getItem("userId"));
        NavigateToHome();
      })
      .catch((error) => {
        console.log(error);
        // alert("User does not exist ! \nPlease Sign up !");
        setWrongUser(true);
      });
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if(userId){
      store.setSignedIn(true);
      store.setUser(localStorage.getItem("userId"));
      store.setEmail(localStorage.getItem("email"));
      NavigateToHome();
    }
    document.getElementById("email").select();
  }, []);

  return (
    <section id="loginwindow" className="bg-gray-200 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            {wrongUser && <p className="text-red-600 font-semibold">Wrong credentials !</p>}
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  onChange={(e)=>{setUserEmail(e.target.value);setWrongUser(false);}}
                  value={userEmail}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e)=>{setPassword(e.target.value);setWrongUser(false);}}
                  value={password}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={SignInHandle}
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
