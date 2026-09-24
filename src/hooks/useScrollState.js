import { useState, useEffect } from 'react'

/**
 * Tracks page scroll position and returns the two boolean flags the
 * original script.js derived from it:
 *  - isSticky: header should switch to its fixed/condensed state (>300px)
 *  - showScrollTop: the "back to top" button should be visible (>500px)
 * Thresholds are ported directly from assets/js/script.js.
 */

export  function useScrollState() {

    const [isSticky, setIsSticky] = useState(false)
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            setIsSticky(scrollY > 300)
            setShowScrollTop(scrollY > 500)
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll,{ passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return { isSticky, showScrollTop }
  
}
