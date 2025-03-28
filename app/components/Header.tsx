import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            SiliconAgent.ai
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/flow" className="hover:text-blue-500">
              Flow
            </Link>
            <Link to="/transform" className="hover:text-blue-500">
              Transform
            </Link>
            <Link to="/about" className="hover:text-blue-500">
              About Us
            </Link>
            <Link to="/blog" className="hover:text-blue-500">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-blue-500">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
