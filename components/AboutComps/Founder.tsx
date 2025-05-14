// "use client";

// import { Badge } from "../ui/badge";

// export default function Founder() {
//   return (
//     <div className="p-10 flex flex-col max-w-7xl mx-auto my-10">
//       <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-start items-start sm:items-center mb-6">
//          <Badge variant="outline" className='text-md py-1 sm:text-base text-blue-600 font-semibold'>
//       Founder
//     </Badge>

//   <h1 className='text-xl sm:text-3xl md:text-4xl font-semibold tracking-wide'>
//      Meet The <span className='text-gradient'>Founder</span>
//        <div className="lg:flex lg:justify-start lg:items-start w-40 h-1 max-lg:w-24 bg-gradient-animation rounded-full mx-auto mt-2"></div>
//     </h1>
//       </div>
//       <div>
//         <p className="text-md sm:text-lg text-gray-700 leading-7 mb-4 ">
//           James Andrews, <span className="text-gradient">the heart</span> of the Nurture Care, bringing over a decade of expertise in digital marketing. His innovative mindset and commitment to client success have fueled the agency's growth. With a hands-on approach and a strong strategic vision, James has led the team to new heights. His integrity and leadership inspire the team to consistently exceed expectations and deliver exceptional results.
//         </p>
//       </div>

//     <div className="flex flex-col md:flex-row gap-5 mt-2 p-2 items-center md:items-start">
//   {/* Left - Image Section */}
//   <div className="flex justify-center w-full md:w-[360px]">
//     <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-cyan-500 relative overflow-visible">
//       <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-md border border-white/20" />
//       <img
//         src="/VidImg.png"
//         alt="Person"
//         className="absolute top-[50px] left-[30px] sm:top-[60px] sm:left-[40px] w-auto h-auto"
//       />
//     </div>
//   </div>

//   {/* Right - Text Section */}
//   <div className="flex flex-1 flex-col items-center md:items-start">
//   {/* Paragraph */}
//   <p className="text-md sm:text-lg leading-7 text-black max-w-3xl text-center md:text-left px-4 sm:px-0 mt-7">
//     James Andrews, the driving force behind Nurture Care, brings over a decade of experience in digital marketing. His passion for innovation and commitment to client success have been the cornerstone of our growth. With a strategic vision and hands-on approach, James inspires our team to consistently exceed expectations and deliver exceptional results.
//   </p>

//   {/* Black-Gray Gradient Badges */}
//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 px-4 sm:px-0 w-full max-w-xl">
//     {[
//       "Visionary Trainer",
//       "Empathetic Leader",
//       "Creative Problem-solver",
//       "Passionate Mentor"
//     ].map((label, idx) => (
//       <span
//         key={idx}
//         className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 text-white text-sm sm:text-base font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
//       >
//         {label}
//       </span>
//     ))}
//   </div>
// </div>

  
// </div>

//     </div>
//   );
// }







"use client";

import { Badge } from "../ui/badge";

export default function Founder() {
  return (
    <div className="p-10 flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-start items-start sm:items-center mb-6">
        <Badge
          variant="outline"
          className="text-md py-1 sm:text-base text-blue-600 font-semibold"
        >
          Founder
        </Badge>

        <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
          Meet The <span className="text-gradient">Founder</span>
          <div className="lg:flex lg:justify-start lg:items-start w-40 h-1 max-lg:w-24 bg-gradient-animation rounded-full mx-auto mt-2"></div>
        </h1>
      </div>
      <div>
        <p className="text-md sm:text-lg text-gray-700 leading-7 mb-4 ">
          James Andrews, <span className="text-gradient">the heart</span> of the
          Nurture Care, bringing over a decade of expertise in digital
          marketing. His innovative mindset and commitment to client success
          have fueled the agency's growth. With a hands-on approach and a strong
          strategic vision, James has led the team to new heights. His integrity
          and leadership inspire the team to consistently exceed expectations
          and deliver exceptional results.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mt-2 p-2 items-center md:items-start">
        {/* Left - Image Section */}
        <div className="flex justify-center w-full md:w-[360px]">
          <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-cyan-500 relative overflow-visible">
            <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-md border border-white/20" />
            <img
              src="/VidImg.png"
              alt="Person"
              className="absolute top-[50px] left-[30px] sm:top-[60px] sm:left-[40px] w-auto h-auto"
            />
          </div>
        </div>

        {/* Right - Text Section */}
        <div className="flex flex-1 flex-col items-center md:items-start">
          {/* Paragraph */}
          <p className="text-md sm:text-lg leading-7 text-black max-w-3xl text-center md:text-left px-4 sm:px-0 mt-7">
            James Andrews, the driving force behind Nurture Care, brings over a
            decade of experience in digital marketing. His passion for
            innovation and commitment to client success have been the
            cornerstone of our growth. With a strategic vision and hands-on
            approach, James inspires our team to consistently exceed
            expectations and deliver exceptional results.
          </p>

          {/* Black-Gray Gradient Badges */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 px-4 sm:px-0 w-full max-w-xl">
            {[
              "Visionary Trainer",
              "Empathetic Leader",
              "Creative Problem-solver",
              "Passionate Mentor",
            ].map((label, idx) => (
              <span
                key={idx}
                className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 text-white text-sm sm:text-base font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
