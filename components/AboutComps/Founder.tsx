"use client";

export default function Founder() {
  return (
    <div className="relative p-10 flex flex-col max-w-7xl mx-auto my-10">
      <div className="relative flex flex-col items-center p-1">
        <h2 className="text-2xl mb-4 uppercase tracking-wider text-black/70 font-bold">
          Founder's Desk
        </h2>
        <div className="text-center">
          <h1 className="font-bold tracking-wide mb-2 uppercase text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Meet the Visionary
          </h1>

          <div className="lg:flex lg:justify-start lg:items-start w-40 h-1 max-lg:w-24 bg-gradient-animation rounded-full mx-auto m-5 "></div>
        </div>
      </div>
      <div className="text-2xl lg:text-3xl my-5 max-sm:ml-3">
        <p className="leading-snug max-sm:font-extralight text-black max-sm:text-sm">
          James Andrews, <span className="text-gradient">the heart</span> of the
          Nurture Care, bringing over a decade of expertise in digital
          marketing. His innovative mindset and commitment to client success
          have fueled the agency's growth. With a hands-on approach and a strong
          strategic vision, James has led the team to new heights. His integrity
          and leadership inspire the team to consistently exceed expectations
          and deliver exceptional results.
        </p>

        
      </div>
    </div>
  );
}
