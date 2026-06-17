import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../utils/validators/loginSchema";
import { loginUser } from "../services/authService";

export function useLogin() {
  const username = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const [send, setSend] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);


  const [rememberMe, setRememberMe] = useState(false);



  async function validate() {
    try {
      setErrors([]);

      const data = {
        username: username.current.value,
        password: password.current.value,
      };

      return await loginSchema.validate(data, { abortEarly: false });
    } catch (error) {
      setErrors(error.errors);
      return null;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await validate();
    if (!result) return;

    try {
      setSend(true);

      const data = await loginUser(result);


      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data));

      if (rememberMe) {
        localStorage.setItem("rememberUser", result.username);
      } else {
        localStorage.removeItem("rememberUser");
      }

      navigate("/dashboard", { replace: true });
    } catch {
      setErrors(["Invalid username or password"]);
    } finally {
      setSend(false);
    }
  }

  return {
    username,
    password,
    send,
    errors,
    showPassword,
    setShowPassword,
    handleSubmit,
    rememberMe,
    setRememberMe,
  };
}