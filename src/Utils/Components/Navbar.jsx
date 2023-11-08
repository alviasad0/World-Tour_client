import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const links = (
        <>
            <li className="text-xl font-medium">
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? `text-blue-600 border-blue-800 underline border-2 `
                            : "text-blue-600"
                    }
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li className="text-xl font-medium">
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? `text-blue-600 border-blue-800 underline border-2`
                            : "text-blue-600"
                    }
                    to="/allPackages"
                >
                    Packages
                </NavLink>
            </li>
            {user ? <li className="text-xl font-medium">
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? `text-blue-600 border-blue-800 `
                            : "text-blue-600"
                    }

                >
                    <div className="dropdown dropdown-bottom">
                        <label tabIndex={0} className="border-none">Dashboard</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/myPackages'>My_Packages</Link></li>
                            <li><Link to='/addService'>Add_Packages</Link></li>
                            <li><Link to='/mySchedules'>My_Schedules</Link></li>
                            
                        </ul>
                    </div>
                </NavLink>
            </li>
                :
                ''}
        </>
    );


    return (
      <div className="mx-auto max-w-screen-2xl  ">
        <div
          className="bg-blue-150 rounded-xl mt-6 mb-10 "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="">
            <div className="navbar py-5">
              <div
                className="navbar-start"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="3000"
              >
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    {links}

                    <div className="md:hidden">
                      {user ? (
                        <div className="mt-28">
                          <img
                            className="w-10 rounded-full mx-auto mt-2 mb-2"
                            src={user.photoURL}
                            alt=""
                          />
                          <li className="text-center text-lg font-semibold">
                            {user.displayName}
                          </li>
                          <button
                            onClick={logOut}
                            className=" btn tracking-widest btn-success bg-blue-300 border-blue-600 text-lg border-2 text-blue-800 font-semibold  w-full mt-3 "
                          >
                            Log Out
                          </button>
                        </div>
                      ) : (
                        <button className="btn tracking-widest btn-success bg-blue-300 border-blue-600 text-lg border-2 text-blue-800 font-semibold  w-full mt-3">
                          <Link to="/login">Login</Link>
                        </button>
                      )}
                    </div>
                  </ul>
                </div>
                <img
                  src="https://i.postimg.cc/DZ88FvC8/logo-for-a11.png"
                  className="w-[200px] h-[100px]"
                  alt=""
                />
              </div>
              <div
                className="navbar-center hidden lg:flex"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="3000"
              >
                <ul className="menu menu-horizontal px-1">{links}</ul>
              </div>
              <div
                className="navbar-end"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="3000"
              >
                {user ? (
                  <div className="flex gap-4 items-center ">
                    <div className="invisible lg:visible">
                      <img
                        className="rounded-full w-10 mx-auto "
                        src={user.photoURL}
                        alt=""
                      />
                      <p className="font-semibold">{user?.displayName}</p>
                    </div>
                    <button
                      onClick={logOut}
                      className="invisible md:visible btn tracking-widest btn-success bg-blue-300 border-blue-600 text-lg border-2 text-blue-800 font-semibold"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <button className=" invisible md:visible  btn tracking-widest btn-success bg-blue-300 border-blue-600 text-lg border-2 text-blue-800 font-semibold">
                    <Link to="/login">Login</Link>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
