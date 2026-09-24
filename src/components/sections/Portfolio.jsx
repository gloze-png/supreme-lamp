import { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { portfolioLinks } from "../../data/portfolio";

const Portfolio = () => {
    const [activeId, setActiveId] = useState(portfolioLinks[0].id);

    const activeItem =
        portfolioLinks.find((item) => item.id === activeId) ??
        portfolioLinks[0];

    return (
        <section
            className="relative z-[1] block bg-surface py-20 sm:pt-[120px]
            sm:pb-[120px] xl:pb-0"
            id="portfolio"
        >
            <div className="mx-auto w-full max-w-[1320px] px-[15px]">
                <div
                    className="grid grid-cols-1 gap-x-[30px] gap-y-[40px]
                    xl:grid-cols-2"
                >
                    {/* LEFT CONTENT */}
                    <div
                        className="relative mx-auto block max-w-[600px]
                        xl:max-w-none"
                    >
                        <div className="[&_h2]:xl:-mr-[100px]">
                            <SectionTitle
                                tagline="PORTFOLIO"
                                align="left"
                                title="Exhibiting Outstanding Solution"
                                className="!mb-[38px]"
                            />
                        </div>

                        <p className="capitalize">
                            We leverage modern technologies and proven
                            development practices to build reliable digital
                            solutions. From frontend and backend development
                            to cloud infrastructure, mobile applications, and
                            SaaS platforms, we bring the right tools and
                            expertise together to turn ideas into scalable
                            products.
                        </p>

                        {/* Portfolio Links */}
                        <ul
                            className="m-0 mt-[42px] list-none space-y-[10px]
                            p-0 sm:space-y-[40px]"
                        >
                            {portfolioLinks.map((item) => {
                                const isActive = item.id === activeId;

                                return (
                                    <li
                                        key={item.id}
                                        className="group relative block"
                                    >
                                        <div className="relative">
                                            {/* Active Line */}
                                            <div
                                                className={`absolute left-0 top-[19px]
                                                h-px w-[58px] origin-left bg-ink
                                                transition-transform delay-100
                                                duration-500 ease-in-out
                                                group-hover:scale-x-100 ${
                                                    isActive
                                                        ? "scale-x-100"
                                                        : "scale-x-0"
                                                }`}
                                                aria-hidden="true"
                                            />

                                            <h4
                                                className="font-sans text-base
                                                font-bold leading-[26px]
                                                sm:text-[30px] sm:leading-[40px]"
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setActiveId(item.id)
                                                    }
                                                    aria-pressed={isActive}
                                                    className={`block w-full
                                                    border-none bg-transparent
                                                    p-0 text-left
                                                    transition-[color,padding-left]
                                                    duration-300 ease-in-out
                                                    hover:pl-[70px]
                                                    hover:text-ink ${
                                                        isActive
                                                            ? "pl-[70px] text-ink"
                                                            : "text-muted"
                                                    }`}
                                                >
                                                    {item.title}
                                                </button>
                                            </h4>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div
                        className="relative mx-auto mt-10 max-w-[600px]
                        xl:mx-0 xl:mt-0 xl:max-w-none"
                    >
                        {/* View All Button */}
                        <div
                            className="mb-[30px] flex items-center justify-start
                            xl:mb-[77px] xl:justify-end"
                        >
                            <a
                                href="#portfolio"
                                className="flex h-[150px] w-[150px]
                                items-center justify-center gap-[5px]
                                rounded-full border border-ink text-base
                                font-bold capitalize text-ink
                                transition-colors duration-500 hover:bg-base"
                            >
                                View All

                                <span
                                    className="icon-arrow-up-right relative
                                    -top-0.5 text-lg font-bold"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>

                        {/* Portfolio Images */}
                        <div
                            className="grid grid-cols-1 gap-x-[15px]
                            sm:grid-cols-2"
                        >
                            {/* First Image */}
                            <div
                                className="relative ml-0 mr-0 mt-0 block
                                xl:ml-[78px] xl:mr-[80px] xl:mt-[60px]"
                            >
                                <div className="relative block overflow-hidden">
                                    <img
                                        key={activeItem.image.src}
                                        src={activeItem.image.src}
                                        alt={activeItem.image.alt}
                                        className="w-full animate-portfolio-fade-in
                                        object-cover [aspect-ratio:302/350]"
                                    />
                                </div>

                                {/* Image Action Button */}
                                <div
                                    className="absolute left-1/2 top-1/2 z-[1]
                                    -translate-x-1/2 -translate-y-1/2"
                                >
                                    <a
                                        href="#"
                                        aria-label="View Project Details"
                                        className="flex h-[50px] w-[50px]
                                        items-center justify-center bg-white
                                        text-2xl text-ink
                                        transition-colors duration-500
                                        hover:bg-base"
                                    >
                                        <span
                                            className="icon-arrow-up-right"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            </div>

                            {/* Second Image */}
                            <div
                                className="relative ml-0 mr-0 mt-[30px] block
                                sm:mt-0 xl:ml-[80px] xl:mr-[-315px]"
                            >
                                <div className="relative block overflow-hidden">
                                    <img
                                        key={`${activeItem.image.src}-second`}
                                        src={activeItem.image.src}
                                        alt={activeItem.image.alt}
                                        className="w-full animate-portfolio-fade-in
                                        object-cover [aspect-ratio:535/530]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;