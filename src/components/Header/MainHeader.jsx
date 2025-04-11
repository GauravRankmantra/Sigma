import { FaSearch } from "react-icons/fa";
import logo from "../../assets/Images/Sigma_Logo.png";

const MainHeader = () => {
  return (
    <div className="bg-[#262B40] sticky top-0 z-50 text-white py-2">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-32" />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-[#B49C6A]">Home</a>
          <a href="#" className="hover:text-[#B49C6A] transition">Acoustic Testing</a>
          <a href="#" className="hover:text-[#B49C6A] transition">Endoscope Testing</a>
          <a href="#" className="hover:text-[#B49C6A] transition">Materials Testing</a>
          <a href="#" className="hover:text-[#B49C6A] transition">Electrical Testing</a>
          <a href="#" className="hover:text-[#B49C6A] transition">About Us</a>
          <a href="#" className="hover:text-[#B49C6A] transition">Contact Us</a>
        </nav>

        {/* Search Icon */}
        <div className="text-white cursor-pointer hover:text-[#B49C6A] transition">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
