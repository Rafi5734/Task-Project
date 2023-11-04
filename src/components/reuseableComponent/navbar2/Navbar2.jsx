import toast from "react-hot-toast";

const Navbar2 = () => {
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    toast.success("Successfully logged out!");
    location.reload();
    console.log('logout')
  }
  return (
    <div>
      <nav className="w-full bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto">
          <div className="relative mt-3 me-2">
            <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="md:me-[50px] sm:ms-4 xs:w-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M18.9269 16.9271H6.07302V18.4896H18.9269V16.9271ZM18.3074 9.2484L18.6666 12.4197L20.2192 12.2439L19.86 9.07251L18.3074 9.2484ZM6.33328 12.4197L6.69253 9.2484L5.13996 9.07251L4.78072 12.2439L6.33328 12.4197ZM5.23648 14.9643C5.8455 14.2474 6.22678 13.3599 6.33328 12.4197L4.78072 12.2439C4.70868 12.8797 4.45121 13.4753 4.04572 13.9525L5.23648 14.9643ZM18.6666 12.4197C18.7732 13.3599 19.1544 14.2474 19.7634 14.9643L20.9542 13.9525C20.5487 13.4753 20.2912 12.8797 20.2192 12.2439L18.6666 12.4197ZM6.07302 16.9271C5.14927 16.9271 4.56168 15.7584 5.23648 14.9643L4.04572 13.9525C2.56757 15.6924 3.72733 18.4896 6.07302 18.4896V16.9271ZM18.9269 18.4896C21.2726 18.4896 22.4324 15.6924 20.9542 13.9525L19.7634 14.9643C20.4382 15.7584 19.8507 16.9271 18.9269 16.9271V18.4896ZM19.86 9.07251C19.4275 5.25493 16.279 2.34375 12.5 2.34375V3.90625C15.4481 3.90625 17.9603 6.18435 18.3074 9.2484L19.86 9.07251ZM6.69253 9.2484C7.03962 6.18435 9.5518 3.90625 12.5 3.90625V2.34375C8.72091 2.34375 5.57241 5.25493 5.13996 9.07251L6.69253 9.2484Z"
                  fill="#B0B7C3"
                />
                <path
                  d="M16.3565 20.0658C16.508 19.6617 16.3032 19.2115 15.8991 19.0601C15.4951 18.9086 15.0449 19.1134 14.8934 19.5174L16.3565 20.0658ZM10.1065 19.5174C9.95511 19.1134 9.50483 18.9086 9.1008 19.0601C8.69677 19.2115 8.49199 19.6617 8.6434 20.0658L10.1065 19.5174ZM14.8934 19.5174C14.5573 20.4144 13.6298 21.0937 12.5 21.0937V22.6562C14.2557 22.6562 15.7829 21.5963 16.3565 20.0658L14.8934 19.5174ZM12.5 21.0937C11.3702 21.0937 10.4427 20.4144 10.1065 19.5174L8.6434 20.0658C9.217 21.5963 10.7442 22.6562 12.5 22.6562V21.0937Z"
                  fill="#B0B7C3"
                />
              </svg>
            </div>
            <div className="flex items-center md:order-2 ms-3 mt-1">
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-9 rounded-full"
                  src="https://i.ibb.co/xHJsVsJ/BF20127-u.jpg"
                  alt="user photo"
                />
              </button>

              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={handleLogOut}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
