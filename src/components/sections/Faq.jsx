import { useState } from "react";
import { faqs } from "../../data/faqs";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(1);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            className="relative z-[1] block overflow-hidden bg-white py-[80px] sm:py-[100px] lg:py-[120px]"
        >
            {/* Decorative Circle */}
            <div
                className="absolute right-[8%] top-[145px] hidden h-[30px] w-[30px]
                rounded-full border border-lime-400 sm:block"
                aria-hidden="true"
            >
                <span className="absolute left-[6px] top-[6px] h-[10px] w-[10px] rounded-full bg-lime-100" />
            </div>

            <div className="mx-auto w-full max-w-[1320px] px-[15px]">
                {/* FAQ Heading */}
                <div className="relative mb-[60px] text-center sm:mb-[70px]">
                    {/* Small Label */}
                    <div className="mb-[20px] flex items-center justify-center gap-[12px]">
                        <span className="relative block h-[18px] w-[27px]">
                            <span
                                className="absolute left-0 top-0 h-[18px] w-[18px]
                                rounded-full bg-black"
                            />

                            <span
                                className="absolute right-0 top-0 h-[18px] w-[18px]
                                rounded-full border border-orange-500 bg-white"
                            />
                        </span>

                        <span
                            className="font-sans text-[16px] font-semibold
                            leading-[20px] text-[#777b86]"
                        >
                            FAQ
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2
                        className="mx-auto max-w-[800px] font-serif text-[48px]
                        font-normal leading-[1.1] text-black sm:text-[58px]
                        lg:text-[64px]"
                    >
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="border-t border-[#dedede]">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={faq.id}
                                className="border-b border-[#dedede]"
                            >
                                {/* Question */}
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    className="group flex w-full items-center
                                    justify-between gap-[30px] py-[24px]
                                    text-left sm:py-[27px]"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${faq.id}`}
                                >
                                    <span
                                        className="font-sans text-[22px] font-semibold
                                        leading-[30px] text-black transition-colors
                                        duration-300 sm:text-[28px] sm:leading-[36px]"
                                    >
                                        {faq.question}
                                    </span>

                                    {/* Plus / X Icon */}
                                    <span
                                        className="relative flex h-[24px] w-[24px]
                                        shrink-0 items-center justify-center"
                                        aria-hidden="true"
                                    >
                                        {/* Horizontal line */}
                                        <span
                                            className="absolute h-[3px] w-[18px]
                                            bg-black transition-transform duration-300
                                            ease-in-out"
                                        />

                                        {/* Vertical line */}
                                        <span
                                            className={`absolute h-[18px] w-[3px]
                                            bg-black transition-transform duration-300
                                            ease-in-out ${
                                                isOpen
                                                    ? "rotate-90"
                                                    : "rotate-0"
                                            }`}
                                        />
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    id={`faq-answer-${faq.id}`}
                                    className={`grid transition-[grid-template-rows]
                                    duration-500 ease-in-out ${
                                        isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p
                                            className={`max-w-[1150px] pb-[28px]
                                            pr-[40px] font-sans text-[16px]
                                            leading-[26px] text-[#777b86]
                                            transition-opacity duration-500
                                            sm:text-[18px] sm:leading-[30px] ${
                                                isOpen
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            }`}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}