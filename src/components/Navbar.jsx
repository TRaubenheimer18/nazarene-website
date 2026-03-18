import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b border-sky">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo / Title */}
       <h1 className="text-xl font-bold text-navy">
  Nazarene <span className="text-logo-teal">District</span>
</h1>

        {/* Navigation Links */}
        <div className="space-x-6 font-medium">

          <Link to="/" className="text-navy hover:text-teal transition">
            Home
          </Link>

          <Link to="/about" className="text-navy hover:text-teal transition">
            About
          </Link>

          <Link to="/churches" className="text-navy hover:text-teal transition">
            Locations
          </Link>

          <Link to="/ministries" className="text-navy hover:text-teal transition">
            Ministries
          </Link>

          <Link to="/events" className="text-navy hover:text-teal transition">
            Events
          </Link>

          <Link to="/college" className="text-navy hover:text-teal transition">
            College
          </Link>

          <Link to="/contact" className="text-navy hover:text-teal transition">
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}