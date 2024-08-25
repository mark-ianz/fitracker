import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col justify-center items-center gap-4 mt-40 text-gray-600">
        {/* <div className="flex flex-row gap-4 mb-6">
        <Link to="/" className="p-2 border-solid rounded-full border">
          <img src="/logo192.png" alt="logo" className="w-7" />
          </Link>
        <Link to="/" className="p-2 border-solid rounded-full border">
          <img src="/logo192.png" alt="logo" className="w-7" />
          </Link>
          <Link to="/" className="p-2 border-solid rounded-full border">
          <img src="/logo192.png" alt="logo" className="w-7" />
          </Link>
          <Link to="/" className="p-2 border-solid rounded-full border">
          <img src="/logo192.png" alt="logo" className="w-7" />
          </Link>
        </div> */}
        <ul className="flex flex-row justify-between w-full max-w-[300px] max-xsm:flex-col max-xsm:items-center max-xsm:gap-2">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/splits"}>Splits</Link>
          </li>
          <li>
            <Link to={"/features"}>Features</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
        <p className="copyright">Fitracker © 2024</p>
      </footer>
    </>
  );
};

export default Footer;
