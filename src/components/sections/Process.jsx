import SectionTitle from "../common/SectionTitle";
import { processSteps } from "../../data/process";

const Process = () => {
  return (
    <section className="relative z-[1] block py-20 pb-10 sm:mt-[120px] sm:pb-[90px]">
      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <SectionTitle
          tagline="Workflow"
          title="How We Work"
        />

        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[50px] md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="group relative mx-auto block w-full max-w-[410px]"
            >
              {/* Icon and number */}
              <div className="relative mb-8 flex items-center justify-between">
                <div className="relative z-[1] flex h-[95px] w-[95px] items-center justify-center rounded-full border border-ink bg-white transition-all duration-500 group-hover:bg-ink">
                  <img
                    src={step.icon}
                    alt=""
                    className="w-auto transition-all duration-500 group-hover:animate-wobble"
                  />
                </div>

                <span className="text-[70px] font-bold leading-none text-ink/5">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="mb-4 text-2xl font-bold text-ink">
                  {step.title}
                </h3>

                <p className="text-base leading-7 text-muted">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;