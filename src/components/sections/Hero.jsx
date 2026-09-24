import Reveal from "../common/Reveal";

export default function Hero() {
  return (
    <section
      className="relative z-[1] block overflow-hidden pb-[100px] pt-[60px] sm:pb-[120px] sm:pt-[110px]"
      id="home"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-multiply"
        style={{
          backgroundImage:
            "url(/assets/images/shapes/banner-one-shape-bg.png)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 bottom-0 top-[150px] -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/assets/images/shapes/banner-one-shape-1.png)",
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute -left-[791px] top-0 -z-10 h-[875px] w-[1010px]
        rounded-full bg-base/25 blur-[600px]
        [transform:matrix(0.87,-0.5,0.54,0.84,0,0)]"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-6 lg:px-8 2xl:px-0">
        <div className="relative">

          {/* ================================
              SMALL INTRO
          ================================= */}
          <div className="mb-6 sm:mb-8">
            <p className="max-w-[260px] text-[16px] leading-[24px] text-ink sm:text-[18px] sm:leading-[28px]">
              Building the Future,
              <br />
              One Product at a Time.!
            </p>
          </div>

          {/* ================================
              SOFTWARE
          ================================= */}
          <Reveal
            as="div"
            animation="fade-in-left"
            className="relative mb-5 block"
          >
            <h2
              className="
                text-[58px]
                font-normal
                leading-[0.85]
                sm:text-[85px]
                md:text-[120px]
                lg:text-[160px]
                xl:text-[190px]
                2xl:text-[220px]
              "
            >
              Software
            </h2>
          </Reveal>

          {/* ================================
              RIGHT SIDE DESCRIPTION
          ================================= */}
          <div
            className="
              relative
              mb-8
              w-full
              max-w-[600px]
              xl:absolute
              xl:right-0
              xl:top-[125px]
              xl:mb-0
            "
          >
            <div className="max-w-[470px] xl:ml-auto">
              <p className="mb-5 text-[15px] leading-[25px] text-ink sm:text-[16px] sm:leading-[26px]">
                We believe great software is more than just code. We build
                reliable digital solutions, solve real problems, and partner
                with businesses to turn ideas into products that grow.
              </p>

              <a
                href="#services"
                className="
                  group
                  flex
                  items-center
                  justify-start
                  gap-2
                  text-base
                  font-bold
                  text-ink
                  transition-opacity
                  duration-500
                  hover:opacity-70
                  sm:justify-end
                "
              >
                View all Services

                <span
                  className="
                    icon-arrow-up-right
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* ================================
              SOLUTIONS ROW
          ================================= */}
          <Reveal
            as="div"
            animation="fade-in-right"
            delay="300ms"
            className="
              relative
              flex
              flex-wrap
              items-center
              gap-5
              md:gap-[45px]
            "
          >
            {/* Software Agency */}
            <ul className="relative flex shrink-0 items-center">
              <li>
                <div
                  className="
                    rounded-[35px]
                    bg-base
                    px-6
                    py-5
                    sm:rounded-[50px]
                    sm:px-10
                    sm:py-[30px]
                    sm:pr-[90px]
                  "
                >
                  <p
                    className="
                      text-[20px]
                      font-bold
                      uppercase
                      leading-[28px]
                      text-white
                      sm:text-[30px]
                      sm:leading-[40px]
                    "
                  >
                    SOFTWARE
                    <br />
                    AGENCY
                  </p>
                </div>
              </li>

              {/* Avatar */}
              <li className="-ml-[30px] sm:-ml-[50px]">
                <div
                  className="
                    flex
                    h-[85px]
                    w-[85px]
                    items-center
                    justify-center
                    rounded-[30px]
                    bg-ink
                    sm:h-[140px]
                    sm:w-[140px]
                    sm:rounded-[50px]
                  "
                >
                  <img
                    src="/assets/images/icon/banner-one-icon-man.png"
                    alt=""
                    className="w-auto"
                  />
                </div>
              </li>
            </ul>

            {/* Solutions */}
            <h2
              className="
                text-[58px]
                font-normal
                leading-[0.85]
                sm:text-[85px]
                md:text-[120px]
                lg:text-[160px]
                xl:text-[190px]
                2xl:text-[220px]
              "
            >
              Solutions
            </h2>
          </Reveal>

        </div>
      </div>
    </section>
  );
}