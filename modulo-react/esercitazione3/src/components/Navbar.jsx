import { Link } from "react-router-dom";

const Navbar = () => { 
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">
        <Link to="/">MyApp</Link>
      </div>
      <div className="space-x-4">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-600 transition duration-300"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
