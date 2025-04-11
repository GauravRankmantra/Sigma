import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import logo from "../assets/Images/Sigma_Logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#1c1e2f] text-white pt-16 pb-6 px-4">
      <hr className="text-gray-600 my-4"></hr>
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-4 sm:grid-cols-2">
        {/* Brand Info */}
        <div>
          <img className="w-28 h-10 object-cover" src={logo}></img>
          <p className="text-gray-400 text-sm">
            We provide compliant medical device testing and consulting services
            for startups and manufacturers around the globe.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Our Process</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        {/* Capabilities */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Core Capabilities</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#">Device Testing</a>
            </li>
            <li>
              <a href="#">Biocompatibility</a>
            </li>
            <li>
              <a href="#">Sterilization Validation</a>
            </li>
            <li>
              <a href="#">Regulatory Consulting</a>
            </li>
            <li>
              <a href="#">ISO/FDA Compliance</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 text-sm mb-2">
            Sigma Labs HQ
            <br />
            456 MedTech Park, Austin, TX 78701, USA
          </p>
          <p className="text-gray-300 text-sm">Phone: +1 (888) 456-7890</p>
          <p className="text-gray-300 text-sm">Email: info@sigmalabs.com</p>
          <div className="flex gap-4 mt-4">
            <a href="#">
              <Facebook className="w-5 h-5 hover:text-[#c5b690]" />
            </a>
            <a href="#">
              <Twitter className="w-5 h-5 hover:text-[#c5b690]" />
            </a>
            <a href="#">
              <Linkedin className="w-5 h-5 hover:text-[#c5b690]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Sigma Scientific Labs. All rights
        reserved. |{" "}
        <a href="#" className="hover:text-[#c5b690]">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
