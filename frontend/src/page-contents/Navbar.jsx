import { Menu, X } from "lucide-react";
import { useState } from "react"; 
import logo from "../assets/logo.png";
import { navItems } from "../constants/needs";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false); 
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">StartHub</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="hover:underline hover:underline-offset-4 hover:text-orange-500 transition duration-200"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-5 items-center">
                        <a
                            href="/FAQs"
                            className="py-2 px-5 border rounded-md hover:bg-gradient-to-r from-orange-500 to-orange-800 hover:text-white transition duration-300"
                        >
                            FAQs
                        </a>
                        <a
                            href="/login"
                            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:from-orange-600 hover:to-orange-900 transition duration-300"
                        >
                            Sign In
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a
                                        href={item.href}
                                        className="hover:underline hover:underline-offset-4 hover:text-orange-500 transition duration-200"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="py-2 px-5 border rounded-md hover:bg-gradient-to-r from-orange-500 to-orange-800 hover:text-white transition duration-300"
                            >
                                FAQs
                            </a>
                            <a
                                href="/login"
                                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-600 hover:to-orange-900 transition duration-300"
                            >
                                Sign In
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
