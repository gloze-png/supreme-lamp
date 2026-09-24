import Reveal from "./Reveal";

export default function SectionTitle({
  tagline,
  title,
  align = "center",
  variant = "light",
  className = "",
}) {
  const dotColor = variant === "dark" ? "bg-white" : "bg-ink";
  const taglineColor = variant === "dark" ? "text-white" : "text-muted";
  const titleColor = variant === "dark" ? "text-white" : "text-ink";

  return (
    <div
      className={`relative z-[1] -mt-[2px] mb-12 ${
        align === "left" ? "text-left" : "text-center"
      } ${className}`.trim()}
    >
      {/* Tagline */}
      <Reveal animation="fade-in-up">
        <div className="mb-4">
          <div
            className={`relative inline-block h-4 w-4 rounded-full after:absolute after:-right-2 after:top-0 after:h-4 after:w-4 after:rounded-full after:border after:border-orange-100 after:content-[''] ${dotColor}`}
          />

          <span
            className={`relative ml-3 inline-block text-base font-bold uppercase leading-tight ${taglineColor}`}
          >
            {tagline}
          </span>
        </div>
      </Reveal>

      {/* Title */}
      <Reveal 
      as="h2"
      animation="fade-in-up"
      className={`mt-2 text-[32px] font-normal capitalize leading-tight sm:text-[40px]
        md:text-[46px] xl:text-[54px] xl:leading-[64px] ${titleColor}`}
      
      >
        {title}
      </Reveal>
    </div>
  );
}