import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = useRef();

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div className=" h-[10%] flex overflow-x-hidden p-5 lg:p-0">
      <label
        className="btn btn-circle swap swap-rotate lg:hidden"
        onChange={toggleMenu}
      >
        <input type="checkbox" />

        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      {/*Movile/Tablet Navigation  */}

      {menuOpen ? (
        <nav
          className="w-[200px] top-[75px] left-0 h-full bg-[black] absolute overflow-x-hidden z-10"
          ref={menu}
        >
          <ul className="flex flex-col justify-evenly h-[50%] pl-5">
            <li>
              {" "}
              <Link to="/books">Books</Link>
            </li>
            <li>
              {" "}
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              {" "}
              <Link to="/characters">Chracters</Link>
            </li>
            <li>
              {" "}
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}

      {/*Desktop Navigation */}

      <nav className=" hidden lg:flex  flex w-full justify-evenly items-center h-[10vh]">
        <Link to="/books">Books</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>
    </div>
  );
};

export default Navbar;
