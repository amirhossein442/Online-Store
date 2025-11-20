import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormControlContext } from "../Context/FormControl";


export const LoginPage = ({ darkMode }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { handelLogin } = useContext(FormControlContext);
  function Login(data) {
    handelLogin(data);
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Login</h1>

      <div className="flex justify-center px-4">
        <form
          onSubmit={handleSubmit(Login)}
          className={`w-full max-w-sm p-8 rounded-xl shadow-lg space-y-4 
        ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`border rounded-lg px-3 py-2 outline-none 
            ${
              darkMode
                ? "border-gray-600 bg-gray-700 focus:ring-2 focus:ring-blue-400"
                : "border-gray-300 bg-white focus:ring-2 focus:ring-blue-500"
            }`}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className={`border rounded-lg px-3 py-2 outline-none 
            ${
              darkMode
                ? "border-gray-600 bg-gray-700 focus:ring-2 focus:ring-blue-400"
                : "border-gray-300 bg-white focus:ring-2 focus:ring-blue-500"
            }`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => navigate("/signin")}
            className={`w-full py-2 rounded-lg border transition 
          ${
            darkMode
              ? "border-gray-500 hover:bg-gray-700"
              : "border-gray-400 hover:bg-gray-100"
          }`}
          >
            Go to Sign In
          </button>
        </form>
      </div>
    </>
  );
};
