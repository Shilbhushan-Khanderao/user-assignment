"use client";
import React, { useState } from "react";
import { registerUser } from "@/services/userService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function register() {
  const router = useRouter();
  const [address, setAddress] = useState({
    apartment_no: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [registerData, setRegisterData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
    mobilenumber: "",
    role: "",
    address: address,
  });

  const handleRoleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { ...registerData, address: address };
    // console.log(userData);
    try {
      const result = await registerUser(userData);
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
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center mt-6">
              <a
                href="#"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
              >
                sign up
              </a>
            </div>

            <div className="relative flex items-center mt-8">
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="First name"
                name="firstname"
                value={registerData.firstname}
                onChange={handleChange}
              />
            </div>

            <div className="relative flex items-center mt-8">
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Middle name"
                name="middlename"
                value={registerData.middlename}
                onChange={handleChange}
              />
            </div>

            <div className="relative flex items-center mt-8">
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Last name"
                name="lastname"
                value={registerData.lastname}
                onChange={handleChange}
              />
            </div>

            <div className="relative flex items-center mt-6">
              <input
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                name="email"
                value={registerData.email}
                onChange={handleChange}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <input
                type="password"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                name="password"
                value={registerData.password}
                onChange={handleChange}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <input
                type="number"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Mobile no."
                name="mobilenumber"
                value={registerData.mobilenumber}
                onChange={handleChange}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <input
                type="text"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Apartment No."
                name="apartment_no"
                value={address.apartment_no}
                onChange={handleAddressChange}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <input
                type="text"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Street"
                name="street"
                value={address.street}
                onChange={handleAddressChange}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <input
                type="text"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="City"
                name="city"
                value={address.city}
                onChange={handleAddressChange}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <input
                type="text"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="State"
                name="state"
                value={address.state}
                onChange={handleAddressChange}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <input
                type="number"
                className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Pincode"
                name="pincode"
                value={address.pincode}
                onChange={handleAddressChange}
              />
            </div>
            <div className="relative flex items-center mt-4">
              <div className="relative flex items-center">
                <label className="py-3 text-gray-200 ms-5">Role:</label>
                <input
                  className="ms-2"
                  type="radio"
                  name="role"
                  value="Admin"
                  onChange={handleRoleChange}
                  checked={registerData.role === "Admin"}
                />
                <span className="ms-2 text-gray-200">Admin</span>
              </div>
              <div className="relative flex items-center">
                <input
                  className="ms-6"
                  type="radio"
                  name="role"
                  value="User"
                  onChange={handleRoleChange}
                  checked={registerData.role === "User"}
                />
                <span className="ms-2 text-gray-200">User</span>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign Up
              </button>

              <div className="mt-6 text-center ">
                <a
                  href="/login"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
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
