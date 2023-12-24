import Link from 'next/link';
import {
  MdSearch,
  MdOutlineAccountCircle,
  MdOutlineShoppingCart,
} from 'react-icons/md';

export default function Header() {
  const navLink = (
    <>
      <li>
        <details>
          <summary>Men</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Women</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Accessories</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 hidden lg:flex text-lg">
          {navLink}
        </ul>
      </div>
      <div className="navbar-center">
        <Link
          href="/"
          className="text-4xl bg-black text-gray-100 font-bold px-4 py-2"
        >
          Jutaa
        </Link>
      </div>
      <div className="navbar-end gap-4 pr-5 text-4xl text-gray-600">
        <MdSearch />
        <MdOutlineAccountCircle />
        <MdOutlineShoppingCart />
      </div>
    </div>
  );
}
