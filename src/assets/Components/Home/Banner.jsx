/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>

            <div className="hero min-h-[80vh]" style={{ position: 'relative', overflow: 'hidden' }}>
                <video autoPlay muted loop style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '100%', minHeight: '100%', width: 'auto', height: 'auto', objectFit: 'cover', zIndex: -1 }}>
                    <source src="/image/headerVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl text-white p-3">
                        <p className="">Seamlessly connecting you to the heartbeat of India's prime properties.</p>
                        <h1 className="my-12 text-6xl font-bold">Your Portal to India's Exquisite Real Estate</h1>

                       <Link to='/buyer'> <button className="btn btn-accent text-lg font-normal  capitalize border-0 text-white hover:text-black   bg-[#0059B1] "> <svg className="hover:text-black" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.5" cy="11.5" r="9.5" stroke="white"  />
                            <path d="M18.5 18.5L22 22" stroke="white"  />
                        </svg> Find Property</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;