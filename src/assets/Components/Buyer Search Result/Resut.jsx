/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import Steps from "./Steps";
import Testimonials from "../BuyerScreen/Testimonials";
import { Link } from "react-router-dom";

const Resut = () => {
    window.scrollTo(0, 0)
    const properties = [
        {
            image: "/image/Rectangle 20.png",
            name: "3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi",
            price: 300000,
            location: "Meadowshire Park, Greenfield, USA",
            area: 891,
            status: "Ready to move"
        },

    ];
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;
    const totalPages = Math.ceil(15 / pageSize);
    const handlePageClick = (page) => {
        setCurrentPage(page);
    };
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    return (
        <div className="max-w-screen-xl mx-auto px-3 my-14">
            <div className="flex gap-8">
                <span className="p-2 text-lg bg-[#0059B1] text-white rounded">properties (400)</span>
                <span className="p-2 text-lg ">New Projects (400)</span>
                <span className="p-2 text-lg ">Pre-launch offers</span>
            </div>
            <p className="text-2xl font-medium my-8">400 results for rental property</p>
            <div className="text-black max-w-3xl ">


                {[...Array(totalPages)].map((_, pageIndex) => (
                    <div key={pageIndex} style={{ display: pageIndex + 1 === currentPage ? 'block' : 'none' }}>
                        {/* Render properties for the current page */}
                        {[...Array(5)].map((_, index) => (
                            <div key={index}>
                                {

                                    properties.map((property, ind) => (
                                        <div key={ind}  >
                                            <Link to='/details'>
                                                <div className="md:flex gap-5 p-6"><img className="mx-auto" src={property.image} alt="" />
                                                    <div>
                                                        <div className="flex justify-between items-center gap-4">
                                                            <p className="text-lg font-semibold">{property.name}</p>
                                                            <p className="text-2xl font-semibold">${property.price}</p>
                                                        </div>
                                                        <div className="flex justify-between items-center my-4 gap-3">
                                                            <div className="flex gap-2" >
                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clip-path="url(#clip0_1107_1493)">
                                                                        <path d="M9.99981 0.017334C7.77597 0.0199809 5.64399 0.904626 4.07158 2.47719C2.49916 4.04976 1.61473 6.18183 1.6123 8.40567C1.6123 12.8007 8.41731 18.6798 9.19564 19.3365L10.0015 20.0173L10.8073 19.3365C11.584 18.6798 18.3906 12.8007 18.3906 8.40567C18.3882 6.18125 17.5033 4.04868 15.9302 2.47602C14.3571 0.903354 12.2242 0.0190986 9.99981 0.017334ZM9.99981 16.7198C7.44564 14.3932 4.11064 10.6132 4.11064 8.40567C4.11064 6.84376 4.7311 5.34583 5.83554 4.2414C6.93997 3.13696 8.4379 2.5165 9.99981 2.5165C11.5617 2.5165 13.0596 3.13696 14.1641 4.2414C15.2685 5.34583 15.889 6.84376 15.889 8.40567C15.889 10.609 12.5531 14.3907 9.99981 16.7198Z" fill="#EE6611" />
                                                                        <path d="M10.0004 10.8321C11.3798 10.8321 12.4979 9.71398 12.4979 8.33465C12.4979 6.95532 11.3798 5.83716 10.0004 5.83716C8.6211 5.83716 7.50293 6.95532 7.50293 8.33465C7.50293 9.71398 8.6211 10.8321 10.0004 10.8321Z" fill="#EE6611" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_1107_1493">
                                                                            <rect width="20" height="20" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                                <p className="text-[#606060]">{property.location}</p>
                                                            </div>
                                                            <button className="p-2 border-2 border-black rounded">Bid Property</button>
                                                        </div>
                                                        <p className="font-medium mb-3">Property details</p>
                                                        <div className="flex justify-between">
                                                            <div className="flex gap-2 items-center">
                                                                <svg className="p-1 rounded bg-[#EE6611]" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clip-path="url(#clip0_1107_1510)">
                                                                        <path d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z" fill="white" />
                                                                        <path d="M5.00656 2.02307L2.02344 5.0062L6.00092 8.98368L8.98405 6.00056L5.00656 2.02307ZM4.01216 5.0062L5.00656 4.01184L6.99533 6.00056L6.00092 6.99496L4.01216 5.0062Z" fill="white" />
                                                                        <path d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z" fill="white" />
                                                                        <path d="M6.00092 15.0162L2.02344 18.9937L5.00656 21.9768L8.98405 17.9994L6.00092 15.0162ZM4.01216 18.9937L6.00092 17.005L6.99533 17.9994L5.00656 19.9881L4.01216 18.9937Z" fill="white" />
                                                                        <path d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z" fill="white" />
                                                                        <path d="M17.9997 15.0162L15.0166 17.9994L18.9941 21.9768L21.9772 18.9937L17.9997 15.0162ZM18.994 19.9881L17.0053 17.9994L17.9997 17.005L19.9884 18.9938L18.994 19.9881Z" fill="white" />
                                                                        <path d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z" fill="white" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_1107_1510">
                                                                            <rect width="24" height="24" rx="4" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                                <div>
                                                                    <p className="font-medium">Total Area</p>
                                                                    <p className="text-[#535353]">{property.area}  sqft </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-2 items-center">
                                                                <svg className="p-1 bg-[#EE6611] rounded" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clip-path="url(#clip0_1107_1538)">
                                                                        <path d="M0 0V24H24V0H0ZM22.5938 22.5938H1.40625V1.40625H22.5938V22.5938Z" fill="white" />
                                                                        <path d="M7.3125 18.8438H5.15625V16.6875H3.75V20.25H7.3125V18.8438Z" fill="white" />
                                                                        <path d="M18.8438 7.3125H20.25V3.75H16.6875V5.15625H18.8438V7.3125Z" fill="white" />
                                                                        <path d="M15.0469 8.95312H8.95312V15.0469H15.0469V8.95312ZM13.6406 13.6406H10.3594V10.3594H13.6406V13.6406Z" fill="white" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_1107_1538">
                                                                            <rect width="24" height="24" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                                <div>
                                                                    <p className="font-medium">Status</p>
                                                                    <p className="text-[#535353]">{property.status}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-2 items-center">
                                                                <svg className="p-1 bg-[#EE6611] rounded" width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect width="40" height="40" rx="4" fill="#EE6611" />
                                                                    <path d="M9.2 11V9.2H11H11.2V9V8V7.8H11H8H7.8V8V11V11.2H8H9H9.2V11Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M11.2 31V30.8H11H9.2V29V28.8H9H8H7.8V29V32V32.2H8H11H11.2V32V31Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M9.2 13V12.8H9H8H7.8V13V15V15.2H8H9H9.2V15V13Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M9.2 17V16.8H9H8H7.8V17V19V19.2H8H9H9.2V19V17Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M9.2 21V20.8H9H8H7.8V21V23V23.2H8H9H9.2V23V21Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M9.2 25V24.8H9H8H7.8V25V27V27.2H8H9H9.2V27V25Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M30.8 29V30.8H29H28.8V31V32V32.2H29H32H32.2V32V29V28.8H32H31H30.8V29Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M28.8 9V9.2H29H30.8V11V11.2H31H32H32.2V11V8V7.8H32H29H28.8V8V9Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M32.2 25V24.8H32H31H30.8V25V27V27.2H31H32H32.2V27V25Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M32.2 21V20.8H32H31H30.8V21V23V23.2H31H32H32.2V23V21Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M32.2 17V16.8H32H31H30.8V17V19V19.2H31H32H32.2V19V17Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M32.2 13V12.8H32H31H30.8V13V15V15.2H31H32H32.2V15V13Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M27.2 8V7.8H27H25H24.8V8V9V9.2H25H27H27.2V9V8Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M23.2 8V7.8H23H21H20.8V8V9V9.2H21H23H23.2V9V8Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M19.2 8V7.8H19H17H16.8V8V9V9.2H17H19H19.2V9V8Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M15.2 8V7.8H15H13H12.8V8V9V9.2H13H15H15.2V9V8Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M15.2 31V30.8H15H13H12.8V31V32V32.2H13H15H15.2V32V31Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M19.2 31V30.8H19H17H16.8V31V32V32.2H17H19H19.2V32V31Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M23.2 31V30.8H23H21H20.8V31V32V32.2H21H23H23.2V32V31Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                    <path d="M27.2 31V30.8H27H25H24.8V31V32V32.2H25H27H27.2V32V31Z" fill="white" stroke="white" stroke-width="0.4" />
                                                                </svg>
                                                                <div>
                                                                    <p className="font-medium">Total Area</p>
                                                                    <p className="text-[#535353]">{property.area}  sqft</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                ))}
                <div className="flex  gap-3 px-2 md:px-7">
                    <button onClick={handlePrevPage} hidden={currentPage === 1} className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                    >Previous</button>

                    {[...Array(totalPages)].map((_, pageIndex) => (
                        <button key={pageIndex} onClick={() => handlePageClick(pageIndex + 1)} className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${pageIndex + 1 === currentPage ? 'bg-blue-500 hover:bg-blue-600 text-white' : ''}`}>{pageIndex + 1}</button>
                    ))}
                    <button className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                        onClick={handleNextPage} hidden={currentPage === totalPages}>Next</button>
                </div>
            </div>

            <Steps></Steps>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Resut;