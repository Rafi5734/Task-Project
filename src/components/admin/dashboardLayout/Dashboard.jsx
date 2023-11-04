import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AllUsers from "../AllUsers/AllUsers";
import Invoice from "../invoices/Invoice";
import Navbar2 from "../../reuseableComponent/navbar2/Navbar2";
const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [urlPath, setUrlPath] = useState();
  const Menus = [
    { title: "Dashboard", src: "menu", path: "/" },
    { title: "User List", src: "user", path: "/user" },
    { title: "Invoices", src: "invoice", path: "/invoice" },
  ];
  const handleOptionClick = (path) => {
    console.log("Current URL:", path);
    setUrlPath(path);
  };
  console.log(window.location.pathname);
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "md:w-72 sm:w-80" : "w-20"
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300 border-2 border-r-[#F3F3F3]`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/paper.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-[#4E5D78] sm:pe-5 origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            stack
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              onClick={() => handleOptionClick(Menu.path)}
              key={index}
              to={`${Menu.path}`}
            >
              <li
                className={`whitespace-no-wrap hover:bg-[#F0F5FA] flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img src={`./src/assets/${Menu.src}.png`} />
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-[#A7AFBC] whitespace-no-wrap `}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-full h-screen flex-1 ps-5 pe-3 pt-5">
        <Navbar2 />
        {window.location.pathname === "/" && (
          <p className="mt-5">Blank Dashboard</p>
        )}
        {window.location.pathname === "/user" && <AllUsers />}
        {window.location.pathname === "/invoice" && <Invoice />}
      </div>
    </div>
  );
};

export default Dashboard;
