
import { useInView } from "../../hooks/useInView";

const ANIMATION_CLASSES = {
  "fade-in-left": "animate-fade-in-left",
  "fade-in-right": "animate-fade-in-right",
  "fade-in-up": "animate-fade-in-up",
};

export default function Reveal({
  as: Tag = "div",
  animation = "fade-in-up",
  delay = "0ms",
  className = "",
  children,
  ...rest
}) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  const animationClass =
    ANIMATION_CLASSES[animation] ?? ANIMATION_CLASSES["fade-in-up"];

  return (
    <Tag
      ref={ref}
      className={`${className} ${
        inView ? animationClass : "opacity-0"
      }`.trim()}
      style={{ animationDelay: delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
