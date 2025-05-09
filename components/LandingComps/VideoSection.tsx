"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import PlayButton from "./PlayBtn";

export default function VideoSection() {
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

    return (
      
    <section
            className="relative h-screen w-full flex items-center justify-center bg-gradient-to-b from-black to-[#F58327] overflow-hidden group"
           
      style={{
        cursor: `url('https://i.pinimg.com/474x/97/a8/cd/97a8cd53975b3bcb480a535f6cbc8b6c.jpg'), auto`,
      }}
    >
      {/* Background Text (optional) */}
      <h1 className="absolute text-white text-[8vw] font-bold opacity-10 whitespace-nowrap pointer-events-none animate-scroll-right">
        NURTURE CHILDCARE <br />
        EDUCATION SERVICES.
      </h1>

      {/* Foreground Image */}
      <Image
        src="/VidImg.png" // transparent PNG photo
        alt="Team"
        width={600}
        height={800}
        className="relative z-10 pointer-events-none "
        priority
      />

      {/* Play Button */}
        <div className="absolute z-20 flex items-center justify-center" onClick={() => setShowModal(true)}>
            <PlayButton />
        </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-transparent bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-auto aspect-video">
            <iframe
              ref={videoRef}
              className="w-full h-full border-4 border-white rounded-xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Agency Intro Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
