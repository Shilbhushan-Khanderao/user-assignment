"use client";
import React, { useState } from "react";
import { registerUser } from "@/services/userService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function register() {
  const router = useRouter();
  // const [address, setAddress] = useState({
  //   apartment_no: "",
  //   street: "",
  //   city: "",
  //   state: "",
  //   pincode: "",
  // });
  // const [registerData, setRegisterData] = useState({
  //   firstname: "",
  //   middlename: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  //   mobilenumber: "",
  //   gender: "",
  //   address: address,
  // });

  // const handleGenderChange = (e) => {
  //   setRegisterData({ ...register, [e.target.name]: e.target.value });
  // };

  // const handleAddressChange = (e) => {
  //   setAddress({ ...address, [e.target.name]: e.target.value });
  // };
  // const onChange = (e) => {
  //   setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      password: "",
      mobilenumber: "",
      gender: {},
      address: {
        apartment_no: "",
        street: "",
        city: "",
        state: "",
        pincode: "",
      },
    },
  });

  const onSubmit = async (data) => {
    // e.preventDefault();
    // const userData = data;
    console.log(data);
    try {
      const result = await registerUser(data);
      // console.log(result);
      if (result.status === "success") {
        toast.success("Registration successfully");
        router.push("/login");
      } else if (result.status === "error") {
        toast.error("Registration failed!!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration failed!!");
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-center mt-6">
              <a
                href="#"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2  border-indigo-100 dark:border-indigo-400 dark:text-white"
              >
                sign up
              </a>
            </div>

            <div className="items-center mt-3">
              <label>First Name</label>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={register.firstname}
                {...register("firstname", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.firstname?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
              {errors?.firstname?.type === "maxLength" && (
                <p className="text-red-500">
                  First name cannot exceed 20 characters
                </p>
              )}
              {errors?.firstname?.type === "pattern" && (
                <p className="text-red-500">Alphabetical characters only</p>
              )}
            </div>

            <div className="items-center mt-3">
              <label>Middle Name</label>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={register.middlename}
                {...register("middlename", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.middlename?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
              {errors?.middlename?.type === "maxLength" && (
                <p className="text-red-500">
                  First name cannot exceed 20 characters
                </p>
              )}
              {errors?.middlename?.type === "pattern" && (
                <p className="text-red-500">Alphabetical characters only</p>
              )}
            </div>

            <div className="items-center mt-3">
              <label>Last Name</label>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={register.lastname}
                {...register("lastname", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.lastname?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
              {errors?.lastname?.type === "maxLength" && (
                <p className="text-red-500">
                  First name cannot exceed 20 characters
                </p>
              )}
              {errors?.lastname?.type === "pattern" && (
                <p className="text-red-500">Alphabetical characters only</p>
              )}
            </div>

            <div className="items-center mt-3">
              <label>Email</label>
              <input
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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

            <div className="items-center mt-3">
              <label>Password</label>
              <input
                type="password"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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

            <div className="items-center mt-3">
              <label>Mobile no.</label>
              <input
                type="number"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="mobilenumber"
                value={register.mobilenumber}
                {...register("mobilenumber", {
                  required: true,
                  pattern: /[6789]\d{9}/g,
                })}
              />
              {errors?.mobilenumber?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
              {errors?.mobilenumber?.type === "pattern" && (
                <p className="text-red-500">
                  Please provide correct mobile number
                </p>
              )}
            </div>

            <div className="items-center mt-3">
              <label>Apartment No.</label>
              <input
                type="text"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="apartment_no"
                value={register.apartment_no}
                {...register("address.apartment_no", {
                  required: true,
                })}
              />
              {errors?.address?.apartment_no?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>

            <div className="items-center mt-3">
              <label>Street</label>
              <input
                type="text"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="street"
                value={register.street}
                {...register("address.street", {
                  required: true,
                })}
              />
              {errors?.address?.street?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>

            <div className="items-center mt-3">
              <label>City</label>
              <input
                type="text"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="city"
                value={register.city}
                {...register("address.city", {
                  required: true,
                  pattern: /^[A-Za-z]+$/,
                })}
              />
              {errors?.address?.city?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
              {errors?.address?.city?.type === "pattern" && (
                <p className="text-red-500">Please input correct name</p>
              )}
            </div>

            <div className="items-center mt-3">
              <label>State</label>
              <input
                type="text"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="state"
                value={register.state}
                {...register("address.state", {
                  required: true,
                  pattern: /^[A-Za-z]+$/,
                })}
              />
              {errors?.address?.state?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
              {errors?.address?.state?.type === "pattern" && (
                <p className="text-red-500">Please input correct name</p>
              )}
            </div>

            <div className="items-center mt-3">
              <label className="py-1">Pincode</label>
              <input
                type="number"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="pincode"
                value={register.pincode}
                {...register("address.pincode", {
                  required: true,
                })}
              />
              {errors?.address?.pincode?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <div className="items-center mt-3">
              <label className="py-1">Gender</label>
              <select
                {...register("gender")}
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value={(register.gender = "Female")}>Female</option>
                <option value={(register.gender = "Male")}>Male</option>
                <option value={(register.gender = "Other")}>Other</option>
              </select>
              {errors?.gender?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <div className="mt-6">
              <button className="btn btn-primary">Sign Up</button>

              <div className="mt-6 text-center ">
                <a
                  href="/login"
                  className="text-sm text-500 hover:underline dark:text-indigo-300"
                >
                  Already have an account?
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default register;
