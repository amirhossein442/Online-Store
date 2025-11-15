import { useForm } from "react-hook-form";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { FormControlContext } from "../Context/FormControl";

export const SignInPage = ({ darkMode }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { handleSignup } = useContext(FormControlContext);

  const SignIn = (data) => {
    handleSignup(data);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Sign In</h1>

      <div className="flex justify-center px-4">
        <form
          onSubmit={handleSubmit(SignIn)}
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
                ? "border-gray-600 bg-gray-700 focus:ring-2 focus:ring-green-400"
                : "border-gray-300 bg-white focus:ring-2 focus:ring-green-500"
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
                ? "border-gray-600 bg-gray-700 focus:ring-2 focus:ring-green-400"
                : "border-gray-300 bg-white focus:ring-2 focus:ring-green-500"
            }`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className={`w-full py-2 rounded-lg border transition 
          ${
            darkMode
              ? "border-gray-500 hover:bg-gray-700"
              : "border-gray-400 hover:bg-gray-100"
          }`}
          >
            Go to Login
          </button>
        </form>
      </div>
    </>
  );
};
