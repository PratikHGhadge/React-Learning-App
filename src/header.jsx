import { NavLink } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 border border-white">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">My React Projects</h1>
        <nav>
          <ul className="flex space-x-28">
            <li>
              <NavLink to="/" className="text-gray-300 hover:text-white">
                Movie review
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/RecordKepping"
                className="text-gray-300 hover:text-white"
              >
                RecordKepping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Datafeatching"
                className="text-gray-300 hover:text-white"
              >
                Datafeatching
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

function Footer() {
  return (
    <footer className="bg-gray-600 py-4">
      <div className="container mx-auto text-center">
        <p className="text-white">©2023 My App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export { Header, Footer };
