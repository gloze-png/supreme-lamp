import SectionTitle from "../common/SectionTitle"

const WhyChoose = ( ) => {
  return (
    <>
      <section className="relative z-[[1] block bg-surface py-20 pb-[50px] sm:py-[120px]">
        <div className="mx-auto w-full max-w-[1320px] px-[15px]">
            <div className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] xl:grid-cols-12">
                <div className="xl:col-span-6">
                    <div className="relative mx-auto mb-[60px] block max-w-[600px] xl:mb-0 xl:mr-[70px] xl:max-w-none">
                        <div className="[&_h2]:xl:-mr-[100px]">
                            <SectionTitle
                            tagline="What Sets Us Apart"
                            align="left"
                            title="Driving Digital Success With Strategy Solutions"
                            className="!mb-5"
                            
                            />


                        </div>
                        <p className="capitalize">
                            We believe great technology starts with understanding 
                            the problem. We create practical digital solutions that simplify complex challenges, improve 
                            business processes, and help our clients achieve their goals with confidence.

                        </p>
                        <div className="">

                        </div>

                    </div>

                </div>

            </div>


        </div>

      </section>
    </>
  )
}

export default WhyChoose
