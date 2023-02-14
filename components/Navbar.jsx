import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Navbar = ({ title }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <nav className="bg-gray-700 border-gray-200 px-2 py-4 sm:px-4 dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto w-10/12">
          <a href="/" className="flex  items-center">
            <span className="self-center text-2xl bg-yellow-300 font-semibold whitespace-nowrap dark:text-white">
              saidinden.com
            </span>
          </a>
          <p className="text-yellow-400 border">{title}</p>

          <div className="px-4">
            <input
              className="bg-gray-800 text-gray-300"
              type="text"
              defaultValue="Kelime ile ara"
            />
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex text-white">
              <li className="mr-4 bg-slate-900 rounded px-4 text-slate-400">
                <button
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                  }}
                >
                  Change Theme
                </button>
              </li>
              <li className="mr-4  text-slate-400">
                <p>{theme}</p>
              </li>
              <li className="mr-4  text-slate-400">
                <Link href="login">
                  <button> Giriş Yap</button>
                </Link>
              </li>
              <li className="mr-4  text-slate-400">
                <Link href="register">
                  <button>Kayit ol</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
