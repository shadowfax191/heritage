/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import Amenties from "./Amenties";
import Services from "../Home/Services";
import Carousel from "react-multi-carousel";


const Details = () => {
    const [value, setValue] = useState(280);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="max-w-screen-xl mx-auto px-3 text-black my-10">
            <div className="flex  items-center md:gap-32">
                <p className="text-lg font-semibold">3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad</p>
                <p className="text-2xl font-semibold">$300K</p>
            </div>
            <div className="flex  items-center my-2 gap-3">
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
                    <p className="text-[#606060]">Meadowshire Park, Greenfield, USA</p>
                </div>
            </div>

            <div className="lg:flex gap-8">
                <div className="max-w-[800px]">
                    <img className="mb-4" src="/image/Rectangle 20.jpg" alt="" />
                    <div className="grid md:grid-cols-3 gap-3 ">
                        <img src="/image/Rectangle 21(1).jpg" alt="" />
                        <img src="/image/Rectangle 21.jpg" alt="" />
                        <div className="bg-opacity-100 bg-black relative">
                            <img src="/image/Rectangle 23.jpg" alt="" className="opacity-60" />
                            <p className="absolute inset-0 flex items-center text-xl font-semibold justify-center text-white opacity-60">View more</p>
                        </div>
                    </div>
                    <p className="text-2xl font-semibold my-5">Overview</p>
                    <div className="flex justify-evenly pb-2 border border-b-slate-400">
                        <div className="flex gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_708_7434" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_708_7434)">
                                    <path d="M7 9C6.45 9 5.97917 8.80417 5.5875 8.4125C5.19583 8.02083 5 7.55 5 7C5 6.45 5.19583 5.97917 5.5875 5.5875C5.97917 5.19583 6.45 5 7 5C7.55 5 8.02083 5.19583 8.4125 5.5875C8.80417 5.97917 9 6.45 9 7C9 7.55 8.80417 8.02083 8.4125 8.4125C8.02083 8.80417 7.55 9 7 9ZM5 22C4.71667 22 4.47917 21.9042 4.2875 21.7125C4.09583 21.5208 4 21.2833 4 21C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V13H5V12.25C5 11.6167 5.21667 11.0833 5.65 10.65C6.08333 10.2167 6.61667 10 7.25 10C7.58333 10 7.89167 10.0667 8.175 10.2C8.45833 10.3333 8.71667 10.5167 8.95 10.75L10.35 12.3C10.4833 12.4333 10.6125 12.5583 10.7375 12.675C10.8625 12.7917 11 12.9 11.15 13H18V4.85C18 4.61667 17.9167 4.41667 17.75 4.25C17.5833 4.08333 17.3833 4 17.15 4C17.05 4 16.9542 4.02083 16.8625 4.0625C16.7708 4.10417 16.6833 4.16667 16.6 4.25L15.35 5.5C15.4333 5.78333 15.45 6.0625 15.4 6.3375C15.35 6.6125 15.25 6.86667 15.1 7.1L12.35 4.3C12.5833 4.15 12.8333 4.05417 13.1 4.0125C13.3667 3.97083 13.6333 4 13.9 4.1L15.15 2.85C15.4167 2.58333 15.7208 2.375 16.0625 2.225C16.4042 2.075 16.7667 2 17.15 2C17.95 2 18.625 2.275 19.175 2.825C19.725 3.375 20 4.05 20 4.85V13H22V19C22 19.55 21.8042 20.0208 21.4125 20.4125C21.0208 20.8042 20.55 21 20 21C20 21.2833 19.9042 21.5208 19.7125 21.7125C19.5208 21.9042 19.2833 22 19 22H5ZM4 19H20V15H4V19Z" fill="#1C1B1F" />
                                </g>
                            </svg>
                            <p>2 Beds</p>
                        </div>
                        <div className="flex gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_708_7439" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_708_7439)">
                                    <path d="M2 19V13C2 12.55 2.09167 12.1417 2.275 11.775C2.45833 11.4083 2.7 11.0833 3 10.8V8C3 7.16667 3.29167 6.45833 3.875 5.875C4.45833 5.29167 5.16667 5 6 5H10C10.3833 5 10.7417 5.07083 11.075 5.2125C11.4083 5.35417 11.7167 5.55 12 5.8C12.2833 5.55 12.5917 5.35417 12.925 5.2125C13.2583 5.07083 13.6167 5 14 5H18C18.8333 5 19.5417 5.29167 20.125 5.875C20.7083 6.45833 21 7.16667 21 8V10.8C21.3 11.0833 21.5417 11.4083 21.725 11.775C21.9083 12.1417 22 12.55 22 13V19H20V17H4V19H2ZM13 10H19V8C19 7.71667 18.9042 7.47917 18.7125 7.2875C18.5208 7.09583 18.2833 7 18 7H14C13.7167 7 13.4792 7.09583 13.2875 7.2875C13.0958 7.47917 13 7.71667 13 8V10ZM5 10H11V8C11 7.71667 10.9042 7.47917 10.7125 7.2875C10.5208 7.09583 10.2833 7 10 7H6C5.71667 7 5.47917 7.09583 5.2875 7.2875C5.09583 7.47917 5 7.71667 5 8V10ZM4 15H20V13C20 12.7167 19.9042 12.4792 19.7125 12.2875C19.5208 12.0958 19.2833 12 19 12H5C4.71667 12 4.47917 12.0958 4.2875 12.2875C4.09583 12.4792 4 12.7167 4 13V15Z" fill="#1C1B1F" />
                                </g>
                            </svg>
                            <p>2 Bath</p>
                        </div>
                        <div className="flex gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_708_7444" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_708_7444)">
                                    <path d="M8 12V10H10V12H8ZM14 12V10H16V12H14ZM3 22V14H4V10C4 8.9 4.20833 7.8625 4.625 6.8875C5.04167 5.9125 5.6125 5.0625 6.3375 4.3375C7.0625 3.6125 7.9125 3.04167 8.8875 2.625C9.8625 2.20833 10.9 2 12 2C13.1 2 14.1375 2.20833 15.1125 2.625C16.0875 3.04167 16.9375 3.6125 17.6625 4.3375C18.3875 5.0625 18.9583 5.9125 19.375 6.8875C19.7917 7.8625 20 8.9 20 10V14H21V22H3ZM5 20H7V16H5V20ZM9 20H11V16H9V20ZM6 14H11V4.075C9.56667 4.30833 8.375 4.97917 7.425 6.0875C6.475 7.19583 6 8.5 6 10V14ZM13 14H18V10C18 8.5 17.525 7.19583 16.575 6.0875C15.625 4.97917 14.4333 4.30833 13 4.075V14ZM13 20H15V16H13V20ZM17 20H19V16H17V20Z" fill="#1C1B1F" />
                                </g>
                            </svg>
                            <p>2 Balcony</p>
                        </div>
                        <div className="flex gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_708_7449" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_708_7449)">
                                    <path d="M3 23V1H5V3H19V1H21V23H19V21H5V23H3ZM5 11H7V7H13V11H19V5H5V11ZM5 19H11V15H17V19H19V13H5V19ZM9 11H11V9H9V11ZM13 19H15V17H13V19Z" fill="#1C1B1F" />
                                </g>
                            </svg>
                            <p>Fully Furnished</p>
                        </div>
                    </div>

                    <div className="flex justify-between my-5">
                        <div>
                            <p className="text-sm font-medium font-lg text-[#535353]">Carpet Area</p>
                            <p className="font-medium">2000 sqft</p>
                            <p className="text-sm font-medium text-[#535353]">$ 225/sqft</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium font-lg text-[#535353]">Floor</p>
                            <p className="font-medium">Second (Out of 6th floor)</p>

                        </div>
                        <div>
                            <p className="text-sm font-medium font-lg text-[#535353]">Transaction Type</p>
                            <p className="font-medium">Ready to move</p>

                        </div>
                        <div>
                            <p className="text-sm font-medium font-lg text-[#535353]">Lift</p>
                            <p className="font-medium">1</p>

                        </div>
                    </div>
                    <div className="flex justify-between my-5">
                        <div>
                            <p className="text-sm font-medium font-lg text-[#535353]">Facing</p>
                            <p className="font-medium">North - East</p>

                        </div>
                        <div>
                            <p className="text-sm font-medium font-lg text-[#535353]">Additional Rooms</p>
                            <p className="font-medium">1 servant room & 1 gust room</p>

                        </div>
                        <div>
                            <p className="text-sm font-medium font-lg text-[#535353]">Age of construction</p>
                            <p className="font-medium">New Construction</p>

                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <p className=" font-semibold text-[#6B7280]">property value</p>
                    <p className="text-2xl font-semibold">$ 300k - $ 310k</p>
                    <p className="text-lg font-semibold text-[#6B7280]">Your bid can not be than 10% of the property Minimum value.</p>
                    <p>Min</p>
                    <p className="p-3">$ 280k</p>
                    <p>Max</p>
                    <p className="p-3">$ 305k</p>
                    <div>
                        <input
                            type="range"
                            min="280"
                            max="305"
                            value={value}
                            onChange={handleChange}
                            className="w-full h-6 cursor-pointer"

                        />
                        <p className="p-3">${value}k</p>

                    </div>
                    <button className="p-2 px-3 justify-center mx-auto mb-5 flex bg-[#0059B1] text-white rounded">Bid Property</button>
                    <img src="/image/Rectangle 27.png" alt="" />
                </div>
            </div>

            <Amenties></Amenties>
            <Services></Services>
            <div className="mb-20">
                <div className="flex justify-between ">
                    <p className="text-3xl font-semibold">Others Nearby Properties</p>
                    <p className="text-[#0059B1] border border-b-[#0059B1] text-lg font-semibold">See all propeety</p>
                </div>

                <div>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        <div className="p-5">
                            <img src="/image/Banner Image.jpg" alt="" />

                            <div className="flex items-center w-14 h-7 bg-white absolute  gap-1 -mt-10 ml-5 p-2 rounded-md">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0003 6.66675C15.0003 7.58722 14.2541 8.33341 13.3337 8.33341C12.4132 8.33341 11.667 7.58722 11.667 6.66675C11.667 5.74627 12.4132 5.00008 13.3337 5.00008C14.2541 5.00008 15.0003 5.74627 15.0003 6.66675Z" fill="#EE6611" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.95251 1.04175H10.0481C11.9718 1.04174 13.4793 1.04173 14.6556 1.19987C15.8595 1.36174 16.8095 1.69952 17.5552 2.4452C18.3009 3.19087 18.6387 4.14089 18.8005 5.34484C18.9587 6.52108 18.9587 8.02861 18.9587 9.95227V10.0258C18.9587 11.6165 18.9587 12.9186 18.8723 13.9789C18.7855 15.0443 18.6076 15.9346 18.2094 16.674C18.0338 17.0002 17.818 17.2922 17.5552 17.555C16.8095 18.3006 15.8595 18.6384 14.6556 18.8003C13.4793 18.9584 11.9718 18.9584 10.0481 18.9584H9.95252C8.02885 18.9584 6.52132 18.9584 5.34508 18.8003C4.14113 18.6384 3.19111 18.3006 2.44544 17.555C1.78437 16.8939 1.44299 16.0711 1.26145 15.0504C1.08312 14.0478 1.05049 12.8003 1.04372 11.2513C1.04199 10.8573 1.04199 10.4406 1.04199 10.0009V9.95227C1.04198 8.02861 1.04197 6.52107 1.20011 5.34484C1.36198 4.14089 1.69976 3.19087 2.44544 2.4452C3.19111 1.69952 4.14113 1.36174 5.34508 1.19987C6.52132 1.04173 8.02886 1.04174 9.95251 1.04175ZM5.51164 2.43872C4.4463 2.58195 3.80404 2.85437 3.32932 3.32908C2.85461 3.80379 2.5822 4.44606 2.43897 5.5114C2.29332 6.59471 2.29199 8.01823 2.29199 10.0001C2.29199 10.2422 2.29199 10.4763 2.29228 10.703L3.12656 9.97301C3.88595 9.30855 5.03047 9.34665 5.74397 10.0602L9.31874 13.6349C9.89144 14.2076 10.7929 14.2857 11.4556 13.82L11.7041 13.6454C12.6576 12.9753 13.9477 13.0529 14.814 13.8325L17.1727 15.9554C17.4101 15.4567 17.5511 14.8016 17.6264 13.8773C17.7082 12.8736 17.7087 11.6216 17.7087 10.0001C17.7087 8.01823 17.7073 6.59471 17.5617 5.5114C17.4185 4.44606 17.146 3.80379 16.6713 3.32908C16.1966 2.85437 15.5543 2.58195 14.489 2.43872C13.4057 2.29308 11.9822 2.29175 10.0003 2.29175C8.01847 2.29175 6.59495 2.29308 5.51164 2.43872Z" fill="#EE6611" />
                                </svg>
                                <p>20</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="p-2">
                                    <span className="bg-[#C5E2FF] p-1 rounded">Apartment</span>

                                </p>
                                <div className="flex gap-2 items-center"> <div className="w-2 h-2 bg-[#EE6611]"></div> <p>Ready to Move</p></div>
                            </div>
                            <p className="text-xl font-semibold">SunnySlope Suites</p>
                            <div className="flex gap-1 items-center my-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1044_1621)">
                                        <path d="M9.99981 0.017334C7.77597 0.0199809 5.64399 0.904626 4.07158 2.47719C2.49916 4.04976 1.61473 6.18183 1.6123 8.40567C1.6123 12.8007 8.41731 18.6798 9.19564 19.3365L10.0015 20.0173L10.8073 19.3365C11.584 18.6798 18.3906 12.8007 18.3906 8.40567C18.3882 6.18125 17.5033 4.04868 15.9302 2.47602C14.3571 0.903354 12.2242 0.0190986 9.99981 0.017334ZM9.99981 16.7198C7.44564 14.3932 4.11064 10.6132 4.11064 8.40567C4.11064 6.84376 4.7311 5.34583 5.83554 4.2414C6.93997 3.13696 8.4379 2.5165 9.99981 2.5165C11.5617 2.5165 13.0596 3.13696 14.1641 4.2414C15.2685 5.34583 15.889 6.84376 15.889 8.40567C15.889 10.609 12.5531 14.3907 9.99981 16.7198Z" fill="#EE6611" />
                                        <path d="M10.0004 10.8321C11.3798 10.8321 12.4979 9.71398 12.4979 8.33465C12.4979 6.95532 11.3798 5.83716 10.0004 5.83716C8.6211 5.83716 7.50293 6.95532 7.50293 8.33465C7.50293 9.71398 8.6211 10.8321 10.0004 10.8321Z" fill="#EE6611" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1044_1621">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-[#6B7280]">Meadowshire Park, Greenfield, USA</p>
                            </div>
                            <p className="text-2xl font-semibold">$ 250000</p>

                        </div>
                        <div className="p-5">
                            <img src="/image/Banner Image(1).jpg" alt="" />

                            <div className="flex items-center w-14 h-7 bg-white absolute  gap-1 -mt-10 ml-5 p-2 rounded-md">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0003 6.66675C15.0003 7.58722 14.2541 8.33341 13.3337 8.33341C12.4132 8.33341 11.667 7.58722 11.667 6.66675C11.667 5.74627 12.4132 5.00008 13.3337 5.00008C14.2541 5.00008 15.0003 5.74627 15.0003 6.66675Z" fill="#EE6611" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.95251 1.04175H10.0481C11.9718 1.04174 13.4793 1.04173 14.6556 1.19987C15.8595 1.36174 16.8095 1.69952 17.5552 2.4452C18.3009 3.19087 18.6387 4.14089 18.8005 5.34484C18.9587 6.52108 18.9587 8.02861 18.9587 9.95227V10.0258C18.9587 11.6165 18.9587 12.9186 18.8723 13.9789C18.7855 15.0443 18.6076 15.9346 18.2094 16.674C18.0338 17.0002 17.818 17.2922 17.5552 17.555C16.8095 18.3006 15.8595 18.6384 14.6556 18.8003C13.4793 18.9584 11.9718 18.9584 10.0481 18.9584H9.95252C8.02885 18.9584 6.52132 18.9584 5.34508 18.8003C4.14113 18.6384 3.19111 18.3006 2.44544 17.555C1.78437 16.8939 1.44299 16.0711 1.26145 15.0504C1.08312 14.0478 1.05049 12.8003 1.04372 11.2513C1.04199 10.8573 1.04199 10.4406 1.04199 10.0009V9.95227C1.04198 8.02861 1.04197 6.52107 1.20011 5.34484C1.36198 4.14089 1.69976 3.19087 2.44544 2.4452C3.19111 1.69952 4.14113 1.36174 5.34508 1.19987C6.52132 1.04173 8.02886 1.04174 9.95251 1.04175ZM5.51164 2.43872C4.4463 2.58195 3.80404 2.85437 3.32932 3.32908C2.85461 3.80379 2.5822 4.44606 2.43897 5.5114C2.29332 6.59471 2.29199 8.01823 2.29199 10.0001C2.29199 10.2422 2.29199 10.4763 2.29228 10.703L3.12656 9.97301C3.88595 9.30855 5.03047 9.34665 5.74397 10.0602L9.31874 13.6349C9.89144 14.2076 10.7929 14.2857 11.4556 13.82L11.7041 13.6454C12.6576 12.9753 13.9477 13.0529 14.814 13.8325L17.1727 15.9554C17.4101 15.4567 17.5511 14.8016 17.6264 13.8773C17.7082 12.8736 17.7087 11.6216 17.7087 10.0001C17.7087 8.01823 17.7073 6.59471 17.5617 5.5114C17.4185 4.44606 17.146 3.80379 16.6713 3.32908C16.1966 2.85437 15.5543 2.58195 14.489 2.43872C13.4057 2.29308 11.9822 2.29175 10.0003 2.29175C8.01847 2.29175 6.59495 2.29308 5.51164 2.43872Z" fill="#EE6611" />
                                </svg>
                                <p>20</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="p-2">
                                    <span className="bg-[#C5E2FF] p-1 rounded">Apartment</span>

                                </p>
                                <div className="flex gap-2 items-center"> <div className="w-2 h-2 bg-[#EE6611]"></div> <p>Ready to Move</p></div>
                            </div>
                            <p className="text-xl font-semibold">SunnySlope Suites</p>
                            <div className="flex gap-1 items-center my-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1044_1621)">
                                        <path d="M9.99981 0.017334C7.77597 0.0199809 5.64399 0.904626 4.07158 2.47719C2.49916 4.04976 1.61473 6.18183 1.6123 8.40567C1.6123 12.8007 8.41731 18.6798 9.19564 19.3365L10.0015 20.0173L10.8073 19.3365C11.584 18.6798 18.3906 12.8007 18.3906 8.40567C18.3882 6.18125 17.5033 4.04868 15.9302 2.47602C14.3571 0.903354 12.2242 0.0190986 9.99981 0.017334ZM9.99981 16.7198C7.44564 14.3932 4.11064 10.6132 4.11064 8.40567C4.11064 6.84376 4.7311 5.34583 5.83554 4.2414C6.93997 3.13696 8.4379 2.5165 9.99981 2.5165C11.5617 2.5165 13.0596 3.13696 14.1641 4.2414C15.2685 5.34583 15.889 6.84376 15.889 8.40567C15.889 10.609 12.5531 14.3907 9.99981 16.7198Z" fill="#EE6611" />
                                        <path d="M10.0004 10.8321C11.3798 10.8321 12.4979 9.71398 12.4979 8.33465C12.4979 6.95532 11.3798 5.83716 10.0004 5.83716C8.6211 5.83716 7.50293 6.95532 7.50293 8.33465C7.50293 9.71398 8.6211 10.8321 10.0004 10.8321Z" fill="#EE6611" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1044_1621">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-[#6B7280]">Meadowshire Park, Greenfield, USA</p>
                            </div>
                            <p className="text-2xl font-semibold">$ 250000</p>

                        </div>
                        <div className="p-5">
                            <img src="/image/Banner Image.png" alt="" />

                            <div className="flex items-center w-14 h-7 bg-white absolute  gap-1 -mt-10 ml-5 p-2 rounded-md">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0003 6.66675C15.0003 7.58722 14.2541 8.33341 13.3337 8.33341C12.4132 8.33341 11.667 7.58722 11.667 6.66675C11.667 5.74627 12.4132 5.00008 13.3337 5.00008C14.2541 5.00008 15.0003 5.74627 15.0003 6.66675Z" fill="#EE6611" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.95251 1.04175H10.0481C11.9718 1.04174 13.4793 1.04173 14.6556 1.19987C15.8595 1.36174 16.8095 1.69952 17.5552 2.4452C18.3009 3.19087 18.6387 4.14089 18.8005 5.34484C18.9587 6.52108 18.9587 8.02861 18.9587 9.95227V10.0258C18.9587 11.6165 18.9587 12.9186 18.8723 13.9789C18.7855 15.0443 18.6076 15.9346 18.2094 16.674C18.0338 17.0002 17.818 17.2922 17.5552 17.555C16.8095 18.3006 15.8595 18.6384 14.6556 18.8003C13.4793 18.9584 11.9718 18.9584 10.0481 18.9584H9.95252C8.02885 18.9584 6.52132 18.9584 5.34508 18.8003C4.14113 18.6384 3.19111 18.3006 2.44544 17.555C1.78437 16.8939 1.44299 16.0711 1.26145 15.0504C1.08312 14.0478 1.05049 12.8003 1.04372 11.2513C1.04199 10.8573 1.04199 10.4406 1.04199 10.0009V9.95227C1.04198 8.02861 1.04197 6.52107 1.20011 5.34484C1.36198 4.14089 1.69976 3.19087 2.44544 2.4452C3.19111 1.69952 4.14113 1.36174 5.34508 1.19987C6.52132 1.04173 8.02886 1.04174 9.95251 1.04175ZM5.51164 2.43872C4.4463 2.58195 3.80404 2.85437 3.32932 3.32908C2.85461 3.80379 2.5822 4.44606 2.43897 5.5114C2.29332 6.59471 2.29199 8.01823 2.29199 10.0001C2.29199 10.2422 2.29199 10.4763 2.29228 10.703L3.12656 9.97301C3.88595 9.30855 5.03047 9.34665 5.74397 10.0602L9.31874 13.6349C9.89144 14.2076 10.7929 14.2857 11.4556 13.82L11.7041 13.6454C12.6576 12.9753 13.9477 13.0529 14.814 13.8325L17.1727 15.9554C17.4101 15.4567 17.5511 14.8016 17.6264 13.8773C17.7082 12.8736 17.7087 11.6216 17.7087 10.0001C17.7087 8.01823 17.7073 6.59471 17.5617 5.5114C17.4185 4.44606 17.146 3.80379 16.6713 3.32908C16.1966 2.85437 15.5543 2.58195 14.489 2.43872C13.4057 2.29308 11.9822 2.29175 10.0003 2.29175C8.01847 2.29175 6.59495 2.29308 5.51164 2.43872Z" fill="#EE6611" />
                                </svg>
                                <p>20</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="p-2">
                                    <span className="bg-[#C5E2FF] p-1 rounded">Apartment</span>

                                </p>
                                <div className="flex gap-2 items-center"> <div className="w-2 h-2 bg-[#EE6611]"></div> <p>Ready to Move</p></div>
                            </div>
                            <p className="text-xl font-semibold">SunnySlope Suites</p>
                            <div className="flex gap-1 items-center my-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1044_1621)">
                                        <path d="M9.99981 0.017334C7.77597 0.0199809 5.64399 0.904626 4.07158 2.47719C2.49916 4.04976 1.61473 6.18183 1.6123 8.40567C1.6123 12.8007 8.41731 18.6798 9.19564 19.3365L10.0015 20.0173L10.8073 19.3365C11.584 18.6798 18.3906 12.8007 18.3906 8.40567C18.3882 6.18125 17.5033 4.04868 15.9302 2.47602C14.3571 0.903354 12.2242 0.0190986 9.99981 0.017334ZM9.99981 16.7198C7.44564 14.3932 4.11064 10.6132 4.11064 8.40567C4.11064 6.84376 4.7311 5.34583 5.83554 4.2414C6.93997 3.13696 8.4379 2.5165 9.99981 2.5165C11.5617 2.5165 13.0596 3.13696 14.1641 4.2414C15.2685 5.34583 15.889 6.84376 15.889 8.40567C15.889 10.609 12.5531 14.3907 9.99981 16.7198Z" fill="#EE6611" />
                                        <path d="M10.0004 10.8321C11.3798 10.8321 12.4979 9.71398 12.4979 8.33465C12.4979 6.95532 11.3798 5.83716 10.0004 5.83716C8.6211 5.83716 7.50293 6.95532 7.50293 8.33465C7.50293 9.71398 8.6211 10.8321 10.0004 10.8321Z" fill="#EE6611" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1044_1621">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-[#6B7280]">Meadowshire Park, Greenfield, USA</p>
                            </div>
                            <p className="text-2xl font-semibold">$ 250000</p>

                        </div>

                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Details;