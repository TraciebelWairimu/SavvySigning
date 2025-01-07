// eslint-disable-next-line no-unused-vars
// noinspection BadExpressionStatementJS

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
    const isAuthorized = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/landing';

    return (
        <header className="bg-[#AB9222]">
            <div className="px-4 mx-auto flex justify-between items-center ">
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

                {!isAuthorized ? (
                    <>
                        <div className="hidden lg:flex space-x-6 ml-auto">
                            <NavLink
                                to="/"
                                className={({isActive}) =>
                                    `font-open-sans text-lg ${isActive ? 'text-[#666]' : 'text-white'}`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/instructions"
                                className={({isActive}) =>
                                    `font-open-sans text-lg ${isActive ? 'text-[#666]' : 'text-white'}`
                                }
                            >
                                Instructions
                            </NavLink>
                            <NavLink
                                to="/signs"
                                className={({isActive}) =>
                                    `font-open-sans text-lg ${isActive ? 'text-[#666]' : 'text-white'}`
                                }
                            >
                                Basic Signs
                            </NavLink>
                            <NavLink
                                to="/login"
                                className={({isActive}) =>
                                    `font-open-sans text-lg ${isActive ? 'text-[#666]' : 'text-white'}`
                                }
                            >
                                Logout
                            </NavLink>
                        </div>
                    </>
                    ) : (
                    <>
                        <div className="hidden lg:flex space-x-6 ml-auto">
                            <NavLink
                                to="/login"
                                className={({isActive}) =>
                                    `font-open-sans text-lg ${isActive ? 'text-[#666]' : 'text-white'}`
                                }
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className={({isActive}) =>
                                    `font-open-sans text-lg ${isActive ? 'text-[#666]' : 'text-white'}`
                                }
                            >
                                Register
                            </NavLink>
                        </div>
                    </>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
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
                    {!isAuthorized ? (
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
                                    to="/instructions"
                                    className={({isActive}) =>
                                        `font-open-sans text-lg ${isActive ? 'text-[#AB9222]' : ''}`
                                    }
                                >
                                    Instructions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/signs"
                                    className={({ isActive }) =>
                                        `font-open-sans text-lg ${isActive ? 'text-[#AB9222]' : ''}`
                                    }
                                >
                                    Basic Signs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        `font-open-sans text-lg ${isActive ? 'text-[#AB9222]' : ''}`
                                    }
                                >
                                    Logout
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
