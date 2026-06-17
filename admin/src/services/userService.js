import axios from "axios";

export async function getUsers() {
  const response = await axios.get(
    "https://dummyjson.com/users?limit=12"
  );

  return response.data.users;
}