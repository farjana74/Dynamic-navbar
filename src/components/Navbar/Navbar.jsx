import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu5Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
  const [showNavIcon, setShowNavIcon] = useState(false);

  // const handleClick = ()=>{
  //     setShowNavIcon(true)

  // }
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Service", path: "/service" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Not Found", path: "*" },
  ];
  return (
    <nav className="bg-yellow-300  p-6 text-black">
      <div onClick={() => setShowNavIcon(!showNavIcon)} className=" md:hidden">
        {showNavIcon === true ? (
          <IoCloseOutline className="text-3xl " />
        ) : (
          <RiMenu5Line className="text-3xl" />
        )}
      </div>
      <ul
        className={`md:flex absolute  md:static   ${
          showNavIcon ? "" : "hidden"
        } bg-yellow-300 px-6`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
