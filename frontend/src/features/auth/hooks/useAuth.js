import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login, register } from "../services/auth.api";

export const useAuth = () => {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async (username, password) => {
    try {
      setLoading(true);

      const response = await login(username, password);

      setUser(response.user);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (username, email, password) => {
    try {
      setLoading(true);

      const response = await register(username, email, password);

      setUser(response.user);
    } catch (error) {
      console.error("Register failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    handleLogin,
    handleRegister
  };
};