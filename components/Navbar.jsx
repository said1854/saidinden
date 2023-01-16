import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-700 border-gray-200 px-2 py-4 sm:px-4 dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto w-10/12">
          <a href="/" className="flex  items-center">
            <span className="self-center text-2xl bg-yellow-300 font-semibold whitespace-nowrap dark:text-white">
              saidinden.com
            </span>
          </a>
          <div className="px-4">
            <input
              className="bg-gray-800 text-gray-300"
              type="text"
              value="Kelime ile ara"
            />
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex text-white">
              <li className="mr-4  text-slate-400">
                <a href="/login" />
                <button> Giriş Yap</button>
              </li>
              <li className="mr-12 text-slate-400 border-orange-700">
                <a href="/signup" />
                <button> Hesap Aç</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;