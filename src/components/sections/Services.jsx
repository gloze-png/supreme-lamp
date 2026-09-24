import SectionTitle from "../common/SectionTitle";
import Reveal from "../common/Reveal";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section
      className="relative z-[1] block pb-0 pt-20 md:pt-[120px]"
      id="services"
    >
      {/* Decorative Shape 1 */}
      <div
        className="absolute left-[70px] top-[123px] -z-10 hidden opacity-5 lg:block"
        aria-hidden="true"
      >
        <img
          src="/assets/images/shapes/services-one-shape-1.png"
          alt=""
          className="w-auto animate-rotate-me"
        />
      </div>

      {/* Decorative Shape 2 */}
      <div
        className="absolute right-[75px] top-[120px] -z-10 hidden lg:block"
        aria-hidden="true"
      >
        <img
          src="/assets/images/shapes/services-one-shape-2.png"
          alt=""
          className="w-auto animate-float-bob-y"
        />
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        {/* Section Header */}
        <div className="relative mb-[60px] block border-b border-border pb-[50px] md:pb-[82px]">
          <SectionTitle
            tagline="SERVICES"
            align="left"
            title="Empowering Businesses Through Strategic Digital Solutions"
          />
          <p className="relative ml-0 block pl-0 capitalize before:absolute before:-top-5 before:left-0 before:hidden before:h-[123px]
          before:w-px before:bg-border before:content-[''] md:ml-[145px] md:pl-[60px] md:before:block">
            We deliver strategic digital solutions that
            help businesses turn ideas into impactful products.
            From web and mobile development to software, SaaS,
            and cloud technologies, we build reliable solutions
            designed to solve real problems and drive growth.


          </p>
        </div>
        <div className="relative block">
          <div className="grid grid-cols-1 gap-x-[30px] gap-y-[30px]
          md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Reveal
                key={service.id}
                animation={service.reveal}
                delay={service.delay}
              >
                <div className="group relative block before:absolute
                before:bottom-0 before:left-0 before:right-[48px] before:z-[2]
                before:h-px before:origin-left before:scale-x-0 before:bg-base before:transition-transform before:duration-500
                before:delay-100 before:ease-in-out before:content-[''] after:absolute after:bottom-0
                after:left-0 after:top-0 after:z-[2] after:w-px after:origin-bottom after:scale-y-0 after:bg-base after:transition-transform after:duration-500 after:delay-100 after:ease-in-out
                after:content-[''] hover:before:scale-x-100 hover:after:scale-y-100">
                  <div className="absolute -bottom-[10px] right-6 h-[65px] w-px rotate-[48deg]
                  bg-border transition-colors duration-500 group-hover:bg-base" aria-hidden="true" />
                  <div className="absolute bottom-0 right-0 z-[5]">
                    <a

                      href="#"
                      aria-label={`Learn More about ${service.title}`}
                      className="relative flex h-14 w-14 items-center justify-center
                    rounded-full border border-border bg-white text-[23px] text-ink transition-all duration-500 group-hover: -rotate-45 group-hover:border-base
                    group-hover:bg-base"
                    >
                      <span className="icon-arrow-down"
                        aria-hidden="true"
                      />

                    </a>

                  </div>

                  <div className="relative mb-[30px] block border border-border px-[10px]
                  pb-8 pt-[34px] [clip-path:polygon(0_0,100%_0,100%_88%,88%_100%,0_100%,0%_50px)]
                  before:absolute before:inset-x-0 before:top-0 before:z-[2] before:h-px before:origin-right before:scale-x-0
                  before:bg-base before:transition-transform before:duration-500 before:delay-100
                  before:ease-in-out before:content-[''] after:absolute after:inset-y-0 after:right-0
                  after:z-[2] after:w-px after:origin-top after:scale-y-0 after:bg-base after:transition-transform
                  after:duration-500 after:delay-100 after:ease-in-out after:content-[''] group-hover:before:scale-x-100
                  group-hover:after:scale-y-100 md:px-10">
                    <div className="relative flex items-center gap-2">
                      <div className="relative block h-[6px] w-[6px] rounded-full
                      bg-muted" aria-hidden="true" />
                      <span className="relative inline-block text-muted">
                        {service.tagline}
                      </span>

                    </div>
                    <h3 className="mb-5 mt-[13px] text-[30px] font-normal leading-[40px]">
                      <a href="#" className="text-ink transition-colors duration-500 hover:text-blue-700">
                        {service.title}

                      </a>

                    </h3>
                    <div className="relative inline-block">
                      <span className={`${service.icon} relative inline-block text-[60px]
                      text-ink transition-all duration-500 group-hover:animate-wobble`}
                        aria-hidden="true" />

                    </div>
                    <p className="mt-[19px] capitalize">
                      {service.text}

                    </p>

                  </div>

                </div>



              </Reveal>
            ))}

          </div>

        </div>


      </div>
    </section>
  );
}