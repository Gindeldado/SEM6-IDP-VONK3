import { Link } from "react-router-dom";
import logo from "../assets/Redesign/groeneknooppunt.png"; // pas het pad aan als nodig

const navLinks = [
  { label: "Over ons", to: "/" },
  { label: "Waarnemingen Portaal", to: "/waarnemingen-portaal" },
  { label: "10 van 010", to: "/10van010" },
  { label: "Biodiversiteit tips", to: "/biodiversiteit-tips" },
  { label: "Dashboard", to:"/dashboard"},
];

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-8 px-4 md:px-12 pt-8 bg-white">
      <div className="flex items-center gap-8 w-full md:w-auto">
        <img src={logo} alt="logo" className="w-16 h-16" />

        <nav className="hidden md:flex gap-6 text-lg font-medium">
          {navLinks.map(({ label, to }, index) => (
            <Link
              key={index}
              to={to}
              className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#5F7447] after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
