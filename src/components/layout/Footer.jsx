import { useState } from "react";

export default function Footer() {
    const [showContact, setShowContact] = useState(false);

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative bg-white">
            {/* ========================================
                CTA SECTION
            ======================================== */}
            <section className="relative overflow-hidden bg-ink px-[15px] py-[80px] sm:py-[100px] lg:py-[115px]">
                <div className="mx-auto w-full max-w-[1320px]">
                    <div className="relative flex flex-col justify-between gap-[60px] lg:flex-row lg:items-center">
                        {/* CTA Heading */}
                        <div className="max-w-[950px]">
                            <h2
                                className="font-serif text-[58px] font-normal leading-[0.95]
                                tracking-[-2px] text-white sm:text-[75px]
                                md:text-[90px] lg:text-[100px] xl:text-[110px]"
                            >
                                Let's Create
                                <br />
                                Something Great
                            </h2>

                            <p
                                className="mt-[40px] max-w-[650px] font-sans text-[16px]
                                leading-[26px] text-white sm:text-[18px]"
                            >
                                We Shift You From Today's Reality To Tomorrow's
                                Potential, Ensuring
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="shrink-0 lg:mr-[40px]">
                            <button
                                type="button"
                                onClick={() => setShowContact(!showContact)}
                                className="flex h-[150px] w-[150px] items-center
                                justify-center rounded-full bg-base px-[20px]
                                font-sans text-[16px] font-semibold text-white
                                transition-transform duration-300
                                hover:scale-105 sm:h-[180px] sm:w-[180px]"
                            >
                                Let's Talk
                                <span className="ml-[7px] text-[20px]">
                                    ↗
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ${
                            showContact
                                ? "mt-[50px] max-h-[300px] opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        <div
                            className="flex flex-col gap-[15px] border-t
                            border-white/20 pt-[30px] font-sans text-white
                            sm:flex-row sm:gap-[50px]"
                        >
                            {/* Phone */}
                            <a
                                href="tel:+234XXXXXXXXXX"
                                className="transition-opacity hover:opacity-60"
                            >
                                Phone: +234 XXX XXX XXXX
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:hello@solotobs.com"
                                className="transition-opacity hover:opacity-60"
                            >
                                Email: hello@solotobs.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                FOOTER CONTENT
            ======================================== */}
            <section className="relative bg-white px-[15px] pb-[25px] pt-[70px] sm:pt-[80px]">
                <div className="mx-auto w-full max-w-[1320px]">
                    {/* Navigation */}
                    <div className="flex flex-col justify-between gap-[30px] lg:flex-row">
                        {/* Main Links */}
                        <nav className="flex flex-wrap gap-x-[55px] gap-y-[20px]">
                            <a
                                href="#about"
                                className="font-sans text-[18px] font-semibold
                                text-ink transition-opacity hover:opacity-50"
                            >
                                About Company
                            </a>

                            <a
                                href="#careers"
                                className="font-sans text-[18px] font-semibold
                                text-ink transition-opacity hover:opacity-50"
                            >
                                Our Careers
                            </a>

                            <a
                                href="#services"
                                className="font-sans text-[18px] font-semibold
                                text-ink transition-opacity hover:opacity-50"
                            >
                                Services
                            </a>

                            <a
                                href="#contact"
                                className="font-sans text-[18px] font-semibold
                                text-ink transition-opacity hover:opacity-50"
                            >
                                Contact
                            </a>
                        </nav>

                        {/* Legal Links */}
                        <nav className="flex flex-wrap gap-x-[55px] gap-y-[20px]">
                            <a
                                href="#privacy"
                                className="font-sans text-[18px] font-semibold
                                text-ink transition-opacity hover:opacity-50"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#terms"
                                className="font-sans text-[18px] font-semibold
                                text-ink transition-opacity hover:opacity-50"
                            >
                                Terms & Conditions
                            </a>
                        </nav>
                    </div>

                    {/* Divider */}
                    <div className="my-[40px] h-[2px] bg-[#dedede]" />

                    {/* Bottom Row */}
                    <div className="flex flex-col justify-between gap-[30px] lg:flex-row lg:items-center">
                        {/* Social Links */}
                        <div className="flex items-center gap-[25px]">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="font-sans text-[20px] font-semibold
                                text-ink transition-opacity hover:opacity-50"
                            >
                                f
                            </a>

                            <a
                                href="#"
                                aria-label="Twitter"
                                className="font-sans text-[20px] font-semibold
                                text-ink transition-opacity hover:opacity-50"
                            >
                                𝕏
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="font-sans text-[20px] font-semibold
                                text-ink transition-opacity hover:opacity-50"
                            >
                                ◎
                            </a>

                            <a
                                href="#"
                                aria-label="Behance"
                                className="font-sans text-[17px] font-semibold
                                text-ink transition-opacity hover:opacity-50"
                            >
                                Bē
                            </a>
                        </div>

                        {/* Contact Information */}
                        <div className="flex flex-col gap-[8px] text-left lg:text-right">
                            {/* PHONE PLACEHOLDER */}
                            <a
                                href="tel:+234XXXXXXXXXX"
                                className="font-sans text-[16px] text-ink
                                transition-opacity hover:opacity-50"
                            >
                                +234 XXX XXX XXXX
                            </a>

                            {/* EMAIL PLACEHOLDER */}
                            <a
                                href="mailto:hello@solotobs.com"
                                className="font-sans text-[16px] text-white
                                transition-opacity hover:opacity-50"
                            >
                                hello@solotobs.com
                            </a>
                        </div>

                        {/* Copyright */}
                        <p className="font-sans text-[16px] text-ink">
                            Copyright © 2026 SoloTobs. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </section>


            {/* ========================================
                BACK TO TOP
            ======================================== */}
            <button
                type="button"
                onClick={handleBackToTop}
                className="fixed bottom-[25px] right-[20px] z-[1000]
                hidden rotate-[-90deg] items-center gap-[15px]
                bg-transparent font-sans text-[13px] font-semibold
                tracking-[1px] text-[#777b86] lg:flex"
            >
                <span>GO BACK TO TOP</span>

                <span
                    className="h-[36px] w-[4px] bg-ink"
                />
            </button>
        </footer>
    );
}