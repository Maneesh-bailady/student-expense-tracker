import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { token, setToken } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative">
      <Link to="/" className="text-xl font-bold text-black">💸 Expense Tracker</Link>

      {/* Desktop links */}
      <div className="hidden md:flex space-x-4 items-center">
        {token ? (
          <button
            onClick={handleLogout}
            className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="text-black font-medium hover:underline">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>

      {/* Hamburger menu for mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-black focus:outline-none"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4 md:hidden z-10">
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-black font-medium hover:underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
