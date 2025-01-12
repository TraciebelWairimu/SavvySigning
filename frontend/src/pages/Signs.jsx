// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from "../components/Header.jsx";
import Signs1 from "../../../Images/Alphabet_signs-removebg-preview.png"
import Signs2 from "../../../Images/more signs.jpg"

const Signs = () => {
    return (
        <>
            <div className="min-h-screen bg-white ">
                <Header/>
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-8">
                    <div>
                        <img src={Signs1} alt="Signs1" className="mx-auto lg:mx-0 w-full"/>
                    </div>

                    <div>
                        <img src={Signs2} alt="Signs2" className="mx-auto lg:mx-0 w-full"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signs;
