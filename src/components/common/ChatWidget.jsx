
import { useEffect, useState } from "react";
import  ThemeButton  from "./ThemeButton";

const inputClasses =
  "block w-full rounded-[5px] border border-white/10 bg-white/5 px-5 py-[10px] text-[13px] text-white placeholder:text-white transition-all duration-500 focus:border-base focus:outline-none";

/**
 * Floating contact form / chat widget
 */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-[45px] left-[30px] z-[99] inline-block">
        <button
          type="button"
          className="relative z-[1] inline-flex h-[45px] w-[45px]
          items-center justify-center rounded-[5px] bg-base text-xl text-white
          before:absolute before:-inset-[5px] before:-z-10 before:rounded-[5px]
          before:bg-base/20 before:content-['']"
          onClick={() => {
            setOpen(true);
            setSubmitted(false);
          }}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label="Open Chat"
        >
          <i className="fa fa-comment" aria-hidden="true" />
        </button>
      </div>

      {/* Chat Popup */}
      <div
        id="chat-popup"
        className={`fixed bottom-0 left-2 z-[99999] w-[calc(100vw-16px)]
        max-w-[350px] rounded-[10px] rounded-bl-none rounded-tl-none
        bg-ink shadow-white transition-all duration-500 ease-in-out sm:left-0
        ${
          open
            ? "visible translate-x-0 opacity-100"
            : "invisible -translate-x-full opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Contact chat"
        aria-hidden={!open}
      >
        <div className="relative block px-[35px] pb-10 pt-8">
          {/* Close Button */}
          <button
            type="button"
            className="absolute -top-[55px] left-0 flex h-[55px] w-[60px]
            items-center justify-center rounded-[5px] rounded-bl-none
            rounded-br-none bg-base text-base text-black
            shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>

          <div>
            {submitted ? (
              <p className="text-center text-sm leading-5 text-white/70">
                Thanks For reaching Out - we&apos;ll get back to you shortly.
              </p>
            ) : (
              <>
                <p className="mb-10 text-center text-sm leading-5 text-white">
                  Please fill out the form below and we will get back to you
                  as soon as possible.
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div>
                    <label className="sr-only" htmlFor="chat-name">
                      Your Name
                    </label>

                    <input
                      id="chat-name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className={inputClasses}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="sr-only" htmlFor="chat-email">
                      Your Email
                    </label>

                    <input
                      id="chat-email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className={inputClasses}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="sr-only" htmlFor="chat-message">
                      Your Message
                    </label>

                    <textarea
                      id="chat-message"
                      name="message"
                      placeholder="Your Message"
                      required
                      rows={4}
                      className={`${inputClasses} h-[120px] resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <div>
                    <ThemeButton
                      as="button"
                      type="submit"
                      className="w-full"
                      variant="dark"
                    >
                      Submit Now
                      <span
                        className="fas fa-arrow-right"
                        aria-hidden="true"
                      />
                    </ThemeButton>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

