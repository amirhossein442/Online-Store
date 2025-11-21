import { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const FormControlContext = createContext();

export const FormControlPovider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.getItem("user");
  }, []);

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
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
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

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("Logout failed:", error.message);
      toast.error("Logout failed!");
    } else {
      console.log("Logged out successfully.");
      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
    }
  };

  return (
    <FormControlContext.Provider
      value={{ handelLogin, handleSignup, handleLogout, user }}
    >
      <Toaster />
      {children}
    </FormControlContext.Provider>
  );
};
