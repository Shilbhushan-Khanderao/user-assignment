import axios from "axios";

export async function registerUser(user) {
  try {
    const response = await axios.post(`http://localhost:8080/register`, user);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser(user) {
  try {
    const response = await axios.post(`http://localhost:8080/login`, user);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
