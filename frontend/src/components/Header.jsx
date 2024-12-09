// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from "../assets/logo.png";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const location = useLocation();

    // Determine if the current path is /login or /register
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

    return (
        <header className="bg-[#AB9222]">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={Logo}
                        alt="Savvy Signing Logo"
                        width={120}
                        height={40}
                        className="object-contain"
                    />
                </Link>

                {!isAuthPage ? (
                    <div className="hidden lg:flex space-x-6 ml-auto">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-open-sans text-lg ${isActive ? 'text-[#666]' : 'text-white'}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `font-open-sans text-lg ${isActive ? 'text-[#666]' : 'text-white'}`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `font-open-sans text-lg ${isActive ? 'text-[#666]' : 'text-white'}`
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `font-open-sans text-lg ${isActive ? 'text-[#666]' : 'text-white'}`
                            }
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `font-open-sans text-lg ${isActive ? 'text-[#666]' : 'text-white'}`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                ) : (
                    <div className="hidden lg:flex space-x-6 ml-auto">
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `font-open-sans text-lg ${isActive ? 'text-[#666]' : 'text-white'}`
                            }
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                `font-open-sans text-lg ${isActive ? 'text-[#666]' : 'text-white'}`
                            }
                        >
                            Register
                        </NavLink>
                    </div>
                )}

                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } lg:hidden`}
            >
                <button
                    onClick={toggleMobileMenu}
                    className="absolute top-4 right-4 p-2 rounded-lg"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <ul className="flex flex-col items-center space-y-4 mt-20">
                    {!isAuthPage ? (
                        <>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `font-open-sans text-lg ${isActive ? 'text-[#AB9222]' : ''}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `font-open-sans text-lg ${isActive ? 'text-[#AB9222]' : ''}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `font-open-sans text-lg ${isActive ? 'text-[#AB9222]' : ''}`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/projects"
                                    className={({ isActive }) =>
                                        `font-open-sans text-lg ${isActive ? 'text-[#AB9222]' : ''}`
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `font-open-sans text-lg ${isActive ? 'text-[#AB9222]' : ''}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        `font-open-sans text-lg ${isActive ? 'text-[#AB9222]' : ''}`
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) =>
                                        `font-open-sans text-lg ${isActive ? 'text-[#AB9222]' : ''}`
                                    }
                                >
                                    Register
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header;
