import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.f64e6283.png";
import { Link } from "react-router-dom";
import { auth, logOut } from "../auth/auth";

function Account() {
  const [isActive, setIsActive] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserData(user);
      } else {
        setUserData(null);
      }
    });
  }, []);

  return (
    <>
      <div className="relative">
        <img
          className="rounded-full w-12 cursor-pointer"
          src={avatar}
          alt=""
          onClick={() => setIsActive(!isActive)}
        />
        <div
          className={`${
            isActive ? "active" : ""
          } bg-slate-700 p-8 absolute top-[50px] right-full w-max rounded-xl user_account z-[1000]`}
        >
          <div className="flex items-center pb-4 border-b border-gray-400">
            <img className="rounded-full w-16" src={avatar} alt="" />
            <div className="ml-4">
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {userData ? userData.displayName : "Login Please!"}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {userData ? userData.email : ""}
              </p>
            </div>
          </div>
          <div className="flex mt-4 md:mt-6">
            {!userData ? (
              <>
                <Link
                  to="/sign"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </Link>
                <Link
                  to="sign-up"
                  className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Create Account
                </Link>
              </>
            ) : (
              <button
                className="w-full items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => logOut()}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
