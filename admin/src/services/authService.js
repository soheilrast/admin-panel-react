import axios from "axios";

export async function loginUser(data) {
  const response = await axios.post(
    "https://dummyjson.com/auth/login",
    data
  );

  return response.data;
}