import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds, {offset =117}={}) {
    const [activeId, setActiveId] = useState(sectionIds[0]);

    useEffect(()=>{
        const handleScroll = ()=>{
            const scrollY = window.scrollY;

            if(scrollY <offset){
                setActiveId(sectionIds[0]);
                return;
            }
            let current = sectionIds[0];
            for (const id of sectionIds){
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollY + 100){
                    current = id;
                }
        }
        setActiveId(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionIds.join(","), offset]);

  return activeId;
}
