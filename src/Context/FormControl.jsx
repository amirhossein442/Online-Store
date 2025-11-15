import { createContext } from "react";
import { supabase } from "../supabaseClient";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const FormControlContext = createContext();

export const FormControlPovider = ({ children }) => {
  const navigate = useNavigate();

  const handelLogin = async (data) => {
    const { email, password } = data;
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log("Login failed:", error.message);
      toast.error("This didn't work.");
    } else {
      console.log("Login success:", authData.user);
      navigate("/shop");
    }
  };

  const handleSignup = async (data) => {
    const { email, password } = data;

    const { data: signupData, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.log("Signup Error:", error.message);
      toast.error("This didn't work.");
    } else {
      console.log("Signup Success:", signupData);
      navigate("/");
    }
  };

  return (
    <FormControlContext.Provider value={{ handelLogin, handleSignup }}>
      <Toaster />
      {children}
    </FormControlContext.Provider>
  );
};
