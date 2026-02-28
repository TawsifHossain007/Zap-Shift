import React from "react";
import Logo from "../../../Components/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { role } = useRole();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  const navClass = ({ isActive }) =>
    `px-3 py-2 transition-all ${
      isActive ? "bg-primary text-black rounded-full" : ""
    }`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={navClass}>
          Services
        </NavLink>
      </li>

      <li>
        <NavLink to="/coverage" className={navClass}>
          Coverage
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/sendParcel" className={navClass}>
              Send A Parcel
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={navClass}>
              Dashboard
            </NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to="/aboutUs" className={navClass}>
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink to="/blogs" className={navClass}>
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile menu */}
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
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <span className="btn btn-ghost text-xl">
          <Logo />
        </span>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-2">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content z-[999] menu p-4 shadow-lg bg-base-100 rounded-xl w-72 
          backdrop-blur-lg border border-base-300"
              >
                <li className="text-center flex flex-col items-center">
                  <img
                    src={user.photoURL}
                    className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-200 ring-offset-2 mb-2"
                    alt="User"
                  />

                  <h3 className="font-bold text-lg">{user.displayName}</h3>
                  <p className="text-sm opacity-70">{user.email}</p>
                </li>

                <div className="divider"></div>

                <div>
                  <button
                    className="btn btn-primary w-full text-black"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>

                  <Link to="/dashboard">
                    <button className="btn btn-primary w-full text-black mt-2">
                      Dashboard
                    </button>
                  </Link>
                </div>
              </ul>
            </div>

            {/* If you ALSO want Sign Out button outside dropdown */}
            <button onClick={handleLogout} className="btn">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
        {role === "user" && (
          <>
            <Link to="/rider" className="btn btn-primary text-black">
              Be a Rider
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
