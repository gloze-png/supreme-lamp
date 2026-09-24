import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"
import {brandLogos} from "../../data/brands"
import Counter from "../common/Counter";
const ABOUT_TEXT = "Since 2012, Solotobs has been helping businesses turn ideas into meaningful digital experiences. With over a decade of experience, our team combines technology, creativity, and strategic thinking to build software solutions that solve real problems and support long-term growth,";
const MISSION_TEXT= "Our mission is to make technology work for everyone,transforming bold ideas into scalable software, meaningful digital experiences, and solutions that move businesses forward."

export default function About() {
  return (
    <section className="relative z-[1] block bg-ink py-[71px] pb-20 sm:py-[109px]
    sm:pb-[120px]" id="about">
        <div className="absolute right-[120px] top-20 -z-10 hidden sm:block" aria-hidden="true">
            <img src="/assets/images/shapes/about-one-shape-1.png" alt=" " className="w-auto"/>
        </div>
        <div className="mx-auto w-full max-w-[1320px] px-[15px]">
            <h2 className="mb-[42px] text-[25px] leading-[35px] text-white sm:text [40px] sm:leading-[50px]">
                We collaborate closely with businesses to create reliable digital solutions that meet their unique needs and help them achieve their goals.
            </h2>

            <div className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] xl:grid-cols-4">
                <div className="xl:col-span-1">
                    <div className="relative mb-[30px] ml-0 mt-0 sm:mb-0 sm:ml-[100px] sm:mt-[27px] xl:ml-[75px]">
                        <Counter
                        value={14}
                        suffix="+"
                        className="font-sans text-[50px] font-bold leading-[50px] text-white"
                        
                        />

                    </div>
                    <p className="font-bold leading-[19px] text-white">
                        Years Of Experience

                    </p>

                </div>
                <div className="xl:col-span-3">
                    <div className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] sm:ml-[53px]
                    lg:grid-cols-2">
                        <div className="relative mb-[30px]">
                            <p className="mb-[27px] capitalize text-white">
                                {ABOUT_TEXT}
                            </p>
                            <div className="relative inline-block">
                                <a
                                href="#services"
                                className="relative flex items-center gap-[3px] font-medium text-white
                                transition-colors duration-500 before:absolute before:bottom-[2px] before:left-0
                                before:right-0 before:h-px before:bg-white before:transition-colors before:duration-500
                                before:content-[''] hover:text-base hover:before:bg-base"
                                >
                                    More About Us
                                    <span className="icon-arrow-up-right" aria-hidden="true"/>

                                </a>

                            </div>

                        </div>

                        <div className="relative mb-[30px] ml-0 sm:ml-[47px]">
                            <p className="mb-[27px] capitalize text-white">
                                {MISSION_TEXT}
                            </p>
                            <div className="relative inline-block">
                                <a
                                href="#services"
                                className="relative flex items-center gap-[3px] font-medium text-white
                                transition-colors duration-500 before:absolute before:bottom-[2px] before:left-0
                                before:right-0 before:h-px before:bg-white before:transition-colors before:duration-500
                                before:content-[''] hover:text-base hover:before:bg-base"
                                >
                                    More About Us
                                    <span className="icon-arrow-up-right" aria-hidden="true"/>

                                </a>

                            </div>

                        </div>



                    </div>

                    
                </div>

            </div>

            <div className="relative block pt-5 sm:pt-[81px]">
                <div className="relative ml-0 text-center before:absolute
                before:left-0 before:top-[15px] before:hidden before:h-px before:w-[120px]
                before:bg-black before:content-[''] after:absolute after:right-0 after:top-[15px] after:hidden
                after:h-px after:w-[706px] after:max-w-[706px] after:bg-black after:content-['']
                sm:ml-[135px] sm:text-left sm:before:-left-[135px] sm:before:block sm:after:block sm:after:w-full">
                    <h3 className="text-2xl capitalize leading-[34px] text-white">
                        We worked with global largest brands
                    </h3>

                </div>
                <div className="relative z-[2] block">
                    <div className="relative block pt-[30px] sm:pt-[68px]">
                        <Swiper
                        modules={[Autoplay, Pagination]}
                        loop
                        speed={2000}
                        autoplay={{delay: 8000}}
                        spaceBetween={0}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 3, spaceBetween: 30

                            },
                            992: {slidesPerView: 4, spaceBetween: 30},

                            1200: {slidesPerView: 5, spaceBetween: 30},
                        }}
                        a11y={{enabled: true}}

                        >
                            {brandLogos.map((brand) =>(
                                <SwiperSlide key={brand.id}>
                                    <div className="realtive block">
                                        <div className="relative z-[1] flex items-center justify-center">
                                            <img src={brand.src} alt={brand.alt}
                                            className="w-auto" />

                                        </div>

                                    </div>

                                </SwiperSlide>
                            ) )}

                        </Swiper>

                    </div>

                </div>

            </div>

        </div>

    </section>
  )
}
