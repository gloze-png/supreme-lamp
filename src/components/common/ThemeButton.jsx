// ================= Theme Button =================

/**
 * Reusable theme button used across the site.
 *
 */

export default function ThemeButton({
  as = "a",
  variant = "default",
  className = "",
  children,
  ...rest
}) {
  const Tag = as;

  const reveal =
    variant === "dark"
      ? "before:bg-ink after:bg-ink/30 hover:text-white"
      : "before:bg-white after:bg-white/30";

  return (
    <Tag
      className={`
        relative z-[1] inline-flex items-center justify-center gap-[5px]
        overflow-hidden bg-base px-10 pb-[14px] pt-4
        text-center text-base font-bold capitalize text-white
        transition-colors duration-500

        before:absolute before:inset-0 before:-z-10
        before:[clip-path:circle(0%_at_50%_50%)]
        before:transition-[clip-path] before:duration-[800ms]
        before:ease-[cubic-bezier(0,0.96,0.58,1.1)]

        after:absolute after:inset-0 after:-z-10
        after:[clip-path:circle(0%_at_50%_50%)]
        after:transition-[clip-path] after:duration-[800ms]
        after:ease-[cubic-bezier(0,0.96,0.58,1.1)]

        hover:before:[clip-path:circle(100%_at_50%_50%)]
        hover:before:duration-[4000ms]
        hover:before:delay-200

        hover:after:[clip-path:circle(100%_at_50%_50%)]
        hover:after:duration-[4000ms]

        ${reveal}
        ${className}
      `.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}