
import { useEffect } from "react";
import { navLinks } from "../../data/navLinks";

export default function MobileNav({ open, onClose }) {
    useEffect(() => {
        document.body.classList.toggle("locked", open);

        return () => {
            document.body.classList.remove("locked");
        };
    }, [open]);

    useEffect(() => {
        if (!open) return undefined;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    return (
        <div
            className={`fixed left-0 top-0 z-[999] h-screen w-screen origin-left
            transition-[transform,visibility] duration-500
            ${
                open
                    ? "visible translate-x-0 delay-0"
                    : "invisible -translate-x-full delay-500"
            }`}
            aria-hidden={!open}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 cursor-pointer bg-black/20"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Mobile Menu */}
            <div
                className={`relative z-10 h-full w-[300px] max-w-[85vw]
                overflow-y-auto bg-ink px-4 pb-[30px] pt-[30px]
                transition-[opacity,transform] duration-500 sm:px-[15px]
                ${
                    open
                        ? "translate-x-0 opacity-100 delay-500"
                        : "-translate-x-full opacity-0 delay-0"
                }`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile menu"
            >
                {/* Close Button */}
                <button
                    type="button"
                    className="absolute right-[15px] top-5 text-lg text-white"
                    onClick={onClose}
                    aria-label="Close menu"
                >
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>

                {/* Logo */}
                <div className="mb-10 flex">
                    <a href="#home" onClick={onClose} className="text-2xl">
                        <span className="text-white">
                            Solo
                        </span>

                        <span className="text-base">
                            Tobs.
                        </span>
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="border-t border-white/10">
                    <ul className="m-0 list-none p-10">
                        {navLinks.map((link) => (
                            <li
                                key={link.href}
                                className="border-b border-white/10 last:border-b-0"
                            >
                                <a
                                    href={link.href}
                                    onClick={onClose}
                                    className="flex h-[46px] items-center justify-between font-sans text-sm font-medium text-white transition-colors duration-500 hover:text-base"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Information */}
                <ul className="mb-5 mt-5 list-none space-y-[15px] p-0">
                    <li className="flex items-center text-sm font-medium text-white">
                        <i
                            className="fa fa-envelope mr-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-base text-[11px] text-ink"
                            aria-hidden="true"
                        />

                        <a
                            href="mailto:gloryope247@gmail.com"
                            className="text-white transition-colors duration-500 hover:text-base"
                        >
                            Gloryope247@gmail.com
                        </a>
                    </li>

                    <li className="flex items-center text-sm font-medium text-white">
                        <i
                            className="fa fa-phone mr-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-base text-[11px] text-ink"
                            aria-hidden="true"
                        />

                        <a
                            href="tel:09061273901"
                            className="text-white transition-colors duration-500 hover:text-base"
                        >
                            09061273901
                        </a>
                    </li>
                </ul>

                {/* Social Links */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a
                            href="#"
                            aria-label="X"
                            className="text-white transition-colors duration-500 hover:text-base"
                        >
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


