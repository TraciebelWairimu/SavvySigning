// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import Header from "../components/Header.jsx";

const Translate = () => {
    const videoRef = useRef(null);
    const translationRef = useRef(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        startCamera();
    }, []);

    const translateSign = () => {
        // Placeholder logic for sign translation
        if (translationRef.current) {
            translationRef.current.innerText = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Euismod ipsum lectus cras congue felis euismod tempor nullam amet. Sem vestibulum fames pharetra aliquet sed egestas ex cras senectus.';
        }
    };

    useEffect(() => {
        const interval = setInterval(translateSign, 3000); // Simulate translation every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <>
            <div className="min-h-screen bg-white relative">
                <Header />
                <div className="relative min-h-[100vh] flex flex-col">
                    <div className="absolute inset-0 bg-landingBg bg-no-repeat bg-cover opacity-50 z-0"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-4 p-8">
                        <div className="md:p-8 w-full flex items-center justify-center">
                            <div className="w-72 h-72 md:w-screen md:h-96 bg-[#aeaeae] border-2 border-[#797979] rounded-lg flex items-center justify-center">
                                <video ref={videoRef} autoPlay className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                        <div className="w-full p-4 bg-[#ddd3a6] rounded-lg text-left mt-4 lg:mt-0">
                            <h2 className="text-lg font-bold mb-2 text-center uppercase">translation</h2>
                            <p ref={translationRef} className="text-center">Show a sign to start translation...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Translate;
