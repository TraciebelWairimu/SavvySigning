// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from "../components/Header.jsx";

const Signs = () => {
    return (
        <>
            <div className="min-h-screen bg-white relative">
                <Header />
                <div className="relative min-h-[100vh] flex flex-col">
                    <div className="absolute inset-0 bg-landingBg bg-no-repeat bg-cover opacity-50 z-0"></div>
                </div>
            </div>
        </>
    )
}

export default Signs;
