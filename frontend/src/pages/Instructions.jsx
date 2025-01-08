// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from "../components/Header.jsx";

const Instructions = () => {

    return (
        <>
            <div className="min-h-screen bg-white relative">
                <Header />

                <div className="relative min-h-[100vh] flex flex-col">
                    <div className="absolute inset-0 bg-landingBg bg-no-repeat bg-cover opacity-50 z-0"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-4 p-8">
                        <div className="md:p-8 w-full flex items-center justify-center">
                            <div className="w-72 h-72 md:w-screen md:h-96 bg-[#aeaeae] border-2 border-[#797979] rounded-lg flex items-center justify-center relative">
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                                    <div className="text-white text-center">
                                        <h2 className="text-lg font-bold mb-2 uppercase">STEP 1: Activate your Camera</h2>
                                        <h4 className="text-lg font-bold mb-2 uppercase">STEP 2: Show a sign to start translation...</h4>
                                        <p>"Please position your hand gestures clearly in front of the camera, ensuring they are fully visible, for accurate and effective sign language translation."</p>
                                    </div>
                                </div>
                                <video autoPlay className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>


                        <div className="w-full p-4 bg-[#ddd3a6] rounded-lg text-left mt-4 lg:mt-0">
                            <h2 className="text-lg font-bold mb-2 text-center uppercase">STEP 3: translation text box</h2>
                            <p className="text-center">This section will display the translated sign language gestures as text.</p>
                            <p className="text-center"></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Instructions;
