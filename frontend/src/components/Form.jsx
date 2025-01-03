// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import api from "../api";
import {Link, useNavigate} from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Header from "./Header.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Slide, toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Form({ route, method }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const showToast = (message, type) => {
        toast[type](message);
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const formData =
            method === "login"
                ? { username, password }
                : { first_name: firstName, last_name: lastName, username, password };

        try {
            const res = await api.post(route, formData);
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                showToast("Login successful.", "success");
                navigate("/");
            } else {
                showToast("Registration successful. Redirecting to login...", "success");
                navigate("/login");
            }
        } catch (error) {
            const errorMessage =
                error.response?.data || "An unexpected error occurred. Please try again.";
            showToast(errorMessage, "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-white">
                <Header />
                <div className="relative min-h-[100vh] mx-auto px-4 py-16">
                    <div className="absolute inset-0 bg-landingBg bg-no-repeat bg-cover opacity-50 z-0"></div>
                    <div className="relative z-10">
                        <h1 className="text-4xl font-zcool font-semibold text-center mb-12">
                            {name} here
                        </h1>
                        <div className="mx-auto w-full max-w-xl rounded-lg bg-[#ddd3a6] p-8 shadow-lg">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {method === "register" && (
                                    <>
                                        <div className="space-y-1">
                                            <label
                                                htmlFor="firstName"
                                                className="block text-lg font-open-sans font-medium text-gray-800"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                className="font-open-sans form-control w-full bg-white border border-[#CBD5E0] rounded-md"
                                                type="text"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                placeholder="Eg John"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label
                                                htmlFor="lastName"
                                                className="block text-lg font-open-sans font-medium text-gray-800"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                className="font-open-sans form-control w-full bg-white border border-[#CBD5E0] rounded-md"
                                                type="text"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                placeholder="Eg Doe"
                                            />
                                        </div>
                                    </>
                                )}
                                <div className="space-y-1">
                                    <label
                                        htmlFor="username"
                                        className="block text-lg font-open-sans font-medium text-gray-800"
                                    >
                                        Username
                                    </label>
                                    <input
                                        className="font-open-sans form-control w-full bg-white border border-[#CBD5E0] rounded-md"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Eg john_doe"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between items-center">
                                        <label
                                            htmlFor="password"
                                            className="text-lg font-open-sans font-medium text-gray-800"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            className="font-open-sans form-control w-full bg-white border border-[#CBD5E0] rounded-md"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="@#*%"
                                        />
                                        <FontAwesomeIcon
                                            icon={showPassword ? faEye : faEyeSlash}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                            onClick={togglePasswordVisibility}
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`font-open-sans block w-full rounded-full bg-black px-5 py-2.5 text-white text-xl ${
                                        loading ? "opacity-50 cursor-not-allowed" : "hover:bg-black/90"
                                    }`}
                                >
                                    {loading ? "loading..." : name}
                                </button>

                                <div className="font-open-sans text-center mt-4">
                                    {method === "login" ? (
                                        <p className="text-gray-700">
                                            Don't have an account yet?{" "}
                                            <Link
                                                to="/register"
                                                className="text-[#AB9222] underline"
                                            >
                                                Register
                                            </Link>
                                        </p>
                                    ) : (
                                        <p className="text-gray-700">
                                            Already have an account?{" "}
                                            <Link
                                                to="/login"
                                                className="text-[#AB9222] underline"
                                            >
                                                Login
                                            </Link>
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Slide}
            />
        </>
    );
}

export default Form
