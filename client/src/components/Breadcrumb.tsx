import React from "react";
import { Link, useLocation } from "react-router-dom";

const breadcrumbNameMap: Record<string, string> = {
  "/": "Home",
  "/about": "About Us",
  "/offers": "Offers",
  "/login": "Login",
  "/register": "Register",
  "/contact": "Contact",
  // Add more routes as needed
};

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  let path = "";

  return (
    <nav className="text-sm py-2 px-4" aria-label="breadcrumb">
      <ol className="list-none flex flex-wrap text-[#024e49]">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          path += `/${value}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={path} className="flex items-center">
              <span className="mx-2">&gt;</span>
              {isLast ? (
                <span className="font-semibold">{breadcrumbNameMap[path] || value}</span>
              ) : (
                <Link to={path} className="hover:underline">{breadcrumbNameMap[path] || value}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
