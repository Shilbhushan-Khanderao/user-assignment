"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/userService";
import toast from "react-hot-toast";

function login() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(loginData);
      // console.log(result);
      if (result.status === "success") {
        toast.success("Login successful");
        router.push("/dashboard");
      } else {
        toast.error("Login failed!!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed!!");
    }
  };
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
              sign In
            </h1>

            <div className="relative flex items-center mt-8">
              <input
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <input
                type="password"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign in
              </button>

              <div className="mt-6 text-center ">
                <a
                  href="/register"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Don’t have an account yet? Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default login;
