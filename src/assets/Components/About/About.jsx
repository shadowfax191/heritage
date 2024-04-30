import Carousel from "react-multi-carousel";
import Section from "../BuyerScreen/Section";
import Testimonials from "../BuyerScreen/Testimonials";


const About = () => {
    window.scrollTo(0, 0)
    return (
        <div>
            <img className="w-full" src="/image/Frame 4.jpg" alt="" />
            <Section></Section>
            <div className="max-w-screen-xl mx-auto px-3 md:mb-36 mb-3">
                <img src="/image/img.jpg" alt="" />
                <div className="p-8 md:absolute max-w-xl md:right-40 md:-mt-32 bg-white ">
                    <div className="flex gap-3 items-center">
                        <div className="w-12 h-1 bg-[#EE6611]">

                        </div>
                        <p className="text-lg font-semibold text-[#EE6611]">Our Story</p>
                    </div>
                    <p className="text-4xl my-4 font-bold text-[#1F2937]">Efficient and Transparent
                        Home Buying Solutions</p>
                    <p className=" font-medium text-[#6B7280]">In the symphony of bustling markets and serene landscapes, Heritage-Nest was born—a vision to</p>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-3 md:mb-48 mb-3">

                <div className="text-right flex justify-end"><img src="/image/img(1).jpg" alt="" /></div>
                <div className="p-8 md:absolute  max-w-xl md:left-64 md:-mt-32 bg-white ">
                    <div className="flex gap-3 items-center">
                        <div className="w-12 h-1 bg-[#EE6611]">

                        </div>
                        <p className="text-lg font-semibold text-[#EE6611]">Mission Statement</p>
                    </div>
                    <p className="text-4xl font-bold my-4 text-[#1F2937]">Efficient and Transparent
                        Home Buying Solutions</p>
                    <p className=" font-medium text-[#6B7280]">To bridge the miles with smiles, Heritage-Nest pledges to be the golden thread connecting NRIs to their homeland, through trust, transparency, and tailored real estate solutions.</p>
                </div>

            </div>
            <div className="max-w-screen-xl mx-auto px-3 ">
                <div className="flex gap-3 items-center ">
                    <div className="w-12 h-1 bg-[#EE6611]">

                    </div>
                    <p className="text-lg font-semibold text-[#EE6611]">Our Team</p>

                </div>
                <h1 className="text-[40px] font-bold">Discover the Faces Behind Our Success</h1>

                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className="p-5"
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
                    <div>
                        <img src="/image/Rectangle 29.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/image/Rectangle 30.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/image/Rectangle 31.jpg" alt="" />
                    </div>

                </Carousel>
                <div className="lg:flex gap-10 justify-between my-14">
                    <div className="max-w-2xl">
                        <div className="flex gap-3 items-center ">
                            <div className="w-12 h-1 bg-[#EE6611]">

                            </div>
                            <p className="text-lg font-semibold text-[#EE6611]">Meet the Team For Book Consultation</p>

                        </div>
                        <h1 className="text-[40px] font-bold">Meet the stewards of your heritage journey
                        </h1>
                        <p className="text-[#6B7280] my-5 font-medium">each member an embodiment of expertise and warmth, dedicated to guiding you home, every step of the way.
                        </p>
                        <button className="px-3 text-white p-2 bg-[#0059B1]">Book Consultation Now</button>
                    </div>
                    <div>
                        <img className="mt-5 lg:mt-0" src="/image/Rectangle 30(1).jpg" alt="" />
                    </div>
                </div>
                <Testimonials></Testimonials>

            </div>

        </div>
    );
};

export default About;