/* eslint-disable react/no-unescaped-entities */

import Carousel from "react-multi-carousel";


const Testimonials = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-3 my-8">

            <h1 className="text-[40px] font-bold mb-6 text-black text-center">Testimonials </h1>
            <div className="text-center mb-8">
                <div
                    style={{
                        paddingBottom: '30px',
                        position: 'relative'
                    }}
                >
                    <Carousel
                        additionalTransfrom={0}
                        arrows={false}
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container"
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
                        renderDotsOutside
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 2
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 1
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >

                        <div className="p-3">
                            <div className="rating rating-md">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="text-[#818181] text-lg font-normal my-5">"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."</p>
                            <img className="mx-auto" src="/image/Ellipse 1.png" alt="" />
                            <p className="text-black text-xl font-semibold">Tony Stark</p>
                            <p className="text-[#818181] font-semibold">Marketing manager, XYZ</p>
                        </div>
                        <div className="p-3">
                            <div className="rating rating-md">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="text-[#818181] text-lg font-normal my-5">"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."</p>
                            <img className="mx-auto" src="/image/Ellipse 1(1).png" alt="" />
                            <p className="text-black text-xl font-semibold">Tony Stark</p>
                            <p className="text-[#818181] font-semibold">Marketing manager, XYZ</p>
                        </div>
                        <div className="p-3">
                            <div className="rating rating-md">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="text-[#818181] text-lg font-normal my-5">"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."</p>
                            <img className="mx-auto" src="/image/Ellipse 1.png" alt="" />
                            <p className="text-black text-xl font-semibold">Tony Stark</p>
                            <p className="text-[#818181] font-semibold">Marketing manager, XYZ</p>
                        </div>
                        <div className="p-3">
                            <div className="rating rating-md">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="text-[#818181] text-lg font-normal my-5">"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."</p>
                            <img className="mx-auto" src="/image/Ellipse 1(1).png" alt="" />
                            <p className="text-black text-xl font-semibold">Tony Stark</p>
                            <p className="text-[#818181] font-semibold">Marketing manager, XYZ</p>
                        </div>
                    </Carousel>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;