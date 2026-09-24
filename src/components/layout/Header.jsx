
import NavContent from "./NavContent";
import { useScrollState } from "../../hooks/useScrollState";

export default function Header({ activeId, onOpenMobileNav }) {
    const { isSticky } = useScrollState();

    return (
        <>
            <header className="relative z-[999] block w-full bg-transparent transition-all duration-500">
                <nav className="relative block">
                    <div className="relative block bg-transparent">
                        <NavContent
                            activeId={activeId}
                            onNavClick={onOpenMobileNav}
                        />
                    </div>
                </nav>
            </header>

            {/* Sticky header */}
            <div
                className={`fixed left-0 top-0 z-[991] hidden w-full bg-white
                shadow-header transition-transform duration-500 xl:block
                ${
                    isSticky
                        ? "visible translate-y-0"
                        : "invisible -translate-y-[120%]"
                }`}
            >
                <div className="mx-auto w-full">
                    <NavContent
                        activeId={activeId}
                        onNavClick={onOpenMobileNav}
                    />
                </div>
            </div>
        </>
    );
}

