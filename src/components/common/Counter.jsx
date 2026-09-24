import {useCountUp} from "../../hooks/useCountUp";

export default function Counters({value, suffix ="", className=""}) {

    const [ref,count] = useCountUp(value);

    return (
    <>
    <h3 ref={ref} className={className}>
        {count}
    </h3>
    {suffix && <span className={className}>{suffix}</span>}
      
    </>
  )
}
