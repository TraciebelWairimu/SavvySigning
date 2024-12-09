// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from "../components/Header.jsx";

const Landing = () => {
    return (
        <>
            <div className="min-h-screen bg-white">
                <Header/>
                <div className="relative min-h-[100vh] mx-auto px-4 py-16">
                    <div className="absolute inset-0 bg-landingBg bg-no-repeat bg-cover opacity-50 z-0"></div>
                    <div className="relative z-10">
                        <h1 className="text-4xl font-zcool font-semibold uppercase text-center mb-12">
                            How It Works
                        </h1>

                        <div
                            className="max-w-4xl mx-auto bg-gray-500 bg-opacity-90 text-white p-8 rounded-lg shadow-lg">
                            <p className="text-lg leading-relaxed">
                                To Use The Savvy Signing Application, Start By Logging In Or Registering Through The
                                Buttons In The Top-Right Corner Of The Homepage. Once Logged In, Ensure Your Camera Is
                                Enabled, As The Application Requires Real-Time Gesture Recognition. Navigate To The Main
                                Interface And Position Your Hand Gestures Within The Camera's Frame, Ensuring Good
                                Lighting For Accurate Detection. The Application Will Recognize Your Sign Language
                                Gestures And Instantly Translate Them Into Text Displayed On The Screen. You Can Also
                                Explore Features Like Learning Common Signs, Reviewing Saved Translations, Or Accessing
                                Tutorials To Improve Your Signing Skills. With Its Intuitive Design, Savvy Signing Makes
                                Communication Seamless And Accessible For All Users!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;
