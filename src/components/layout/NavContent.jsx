
import { navLinks } from "../../data/navLinks";
import ThemeButton from "../common/ThemeButton";

export default function NavContent({ activeId, onNavClick }) {
  return (
    <div className="relative flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">

      <div>
        <div className="block py-[25px] text-2xl">
          <a href="#home">
            <span className="text-ink">
              Solo
            </span>

            <span className="text-base">
              Tobs.
            </span>
          </a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button
          type="button"
          className="text-xl text-base transition-colors duration-500 hover:text-white xl:hidden"
          onClick={onNavClick}
          aria-label="Open menu"
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>

        <ul className="m-0 hidden list-none items-center p-0 xl:flex">
          {navLinks.map((link) => {
            const isCurrent = activeId === link.href.slice(1);

            return (
              <li
                key={link.href}
                className="relative ml-10 py-[43px] first:ml-0"
              >
                <a
                  href={link.href}
                  className={`relative flex items-center font-sans text-base
                    font-medium capitalize leading-5 text-ink
                    after:absolute after:bottom-[3px] after:left-0 after:right-0
                    after:h-[2px] after:origin-left after:scale-x-0
                    after:bg-ink after:transition-transform after:duration-500
                    after:content-['']
                    hover:after:scale-x-100
                    ${isCurrent ? "after:scale-x-100" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="hidden sm:block">
        <ThemeButton
          href="#contact"
          variant="dark"
        >
          Let's Talk
          <span
            className="icon-arrow-up-right"
            aria-hidden="true"
          />
        </ThemeButton>
      </div>

    </div>
  );
}
