import { useEffect, useState } from "react";

import { useInView} from "./useInView"


export  function useCountUp(target, { duration =1600} ={}){
    const [ref,inView] = useInView ({threshold: 0.5});
    const [value, setValue] = useState(0);

    useEffect(()=>{
        if(!inView) return undefined;

        const prefersReduceMotion =
        typeof window !== "undefined" && 
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduceMotion){
            setValue(target);
            return undefined;
        }
        let frame;
        const start = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - start)/duration, 1);
            const eased = 1 - (1 - progress) * (1 - progress)
            setValue(Math.floor(eased * target));
            if (progress <1){
                frame = requestAnimationFrame(tick);
                
            } else{
                setValue(target);
            }
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, target, duration])
    return[ ref, value];
    
}