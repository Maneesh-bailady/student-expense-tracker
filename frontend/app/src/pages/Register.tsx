import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>

        <div className="flex items-center border rounded-lg mb-4 px-3 py-2 focus-within:ring-2 focus-within:ring-black">
          <User className="text-gray-500 mr-2" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex items-center border rounded-lg mb-4 px-3 py-2 focus-within:ring-2 focus-within:ring-black">
          <Mail className="text-gray-500 mr-2" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex items-center border rounded-lg mb-6 px-3 py-2 focus-within:ring-2 focus-within:ring-black">
          <Lock className="text-gray-500 mr-2" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full outline-none bg-transparent"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
