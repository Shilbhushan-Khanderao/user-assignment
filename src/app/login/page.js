"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/userService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
// import register from "../register/page";

function login() {
  const router = useRouter();
  // const [loginData, setLoginData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   setLoginData({ ...loginData, [e.target.name]: e.target.value });
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    // e.preventDefault();
    try {
      const result = await loginUser(data);
      console.log(result);
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
          <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
              Sign In
            </h1>

            <div className="items-center mt-8">
              <label>Email</label>
              <input
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                name="email"
                value={register.email}
                {...register("email", {
                  required: true,
                  pattern: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                })}
              />
              {errors?.email?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p className="text-red-500">Please provide valid email</p>
              )}
            </div>

            <div className="items-center mt-4">
              <label>Password</label>
              <input
                type="password"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                name="password"
                value={register.password}
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                })}
              />
              {errors?.password?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
              {errors?.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must contain 1 uppercase, 1 lowercase, 1 number &
                  special characters
                </p>
              )}
            </div>

            <div className="mt-6">
              <button className="btn btn-primary">Sign in</button>

              <div className="mt-6 text-center ">
                <a
                  href="/register"
                  className="text-sm text-blue-500 hover:underline dark:text-indigo-300"
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
