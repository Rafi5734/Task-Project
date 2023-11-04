import { useEffect, useRef, useState } from "react";

const SideBar = () => {
const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    };
    
     useEffect(() => {
       const handleClickOutside = (event) => {
         if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
           setIsOpen(false);
         }
       };

       document.addEventListener("mousedown", handleClickOutside);

       return () => {
         document.removeEventListener("mousedown", handleClickOutside);
       };
     }, []);

//   console.log(isSidebarOpen);

  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white p-4 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:translate-x-0`}
    >
      <p>I am from sidebar</p>
      <button className="md:hidden" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
    </div>
  );
};

export default SideBar;
