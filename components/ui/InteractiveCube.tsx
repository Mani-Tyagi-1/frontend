"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";

interface InteractiveCubeProps {
  images: string[]; // Array of 6 image URLs
  size?: number; // Size of the cube in pixels
  initialRotation?: { x: number; y: number }; // Initial tilt
  dragSensitivity?: number; // How much the cube rotates per pixel dragged
}

const InteractiveCube: React.FC<InteractiveCubeProps> = ({
  images,
  size = 200,
  initialRotation = { x: -25, y: 35 },
  dragSensitivity = 0.25,
}) => {
  const [rotation, setRotation] = useState(initialRotation);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const cubeRef = useRef<HTMLDivElement>(null);

  const halfSize = size / 2;

  // Default images if not enough are provided
  const defaultFaceImage =
    "https://via.placeholder.com/200/CCCCCC/000000?Text=Face";
  const faceImages = Array(6)
    .fill(null)
    .map((_, i) => images?.[i] || `${defaultFaceImage}${i + 1}`);

  const faceStyles = [
    { transform: `rotateY(0deg) translateZ(${halfSize}px)` }, // front
    { transform: `rotateY(180deg) translateZ(${halfSize}px)` }, // back
    { transform: `rotateY(90deg) translateZ(${halfSize}px)` }, // right
    { transform: `rotateY(-90deg) translateZ(${halfSize}px)` }, // left
    { transform: `rotateX(90deg) translateZ(${halfSize}px)` }, // top
    { transform: `rotateX(-90deg) translateZ(${halfSize}px)` }, // bottom
  ];

  const handleMouseDown = useCallback((clientX: any, clientY: any) => {
    setIsDragging(true);
    setLastMousePos({ x: clientX, y: clientY });
    // Optional: Add class to body to prevent text selection during drag
    document.body.style.userSelect = "none";
  }, []);

  const handleMouseMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!isDragging) return;

      const deltaX = clientX - lastMousePos.x;
      const deltaY = clientY - lastMousePos.y;

      setRotation((prev) => ({
        x: prev.x - deltaY * dragSensitivity, // Mouse Y movement rotates around X-axis
        y: prev.y + deltaX * dragSensitivity, // Mouse X movement rotates around Y-axis
      }));
      setLastMousePos({ x: clientX, y: clientY });
    },
    [isDragging, lastMousePos, dragSensitivity]
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.userSelect = ""; // Re-enable text selection
    }
  }, [isDragging]);

  // Mouse event listeners on the document for smoother dragging
  useEffect(() => {
    const onMouseMove = (e: { clientX: number; clientY: number; }) => handleMouseMove(e.clientX, e.clientY);
    const onMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mouseleave", onMouseUp); // Also stop if mouse leaves window
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Touch event handlers
  const handleTouchStart = useCallback(
      (e: TouchEvent) => {
        if (e.touches.length === 1) {
          handleMouseDown(e.touches[0].clientX, e.touches[0].clientY);
        }
      },
      [handleMouseDown]
    );

  const handleTouchMove = useCallback(
      (e: TouchEvent) => {
        if (e.touches.length === 1) {
          // Prevent page scroll while dragging cube
          e.preventDefault();
          handleMouseMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      },
      [handleMouseMove]
    );

  const handleTouchEnd = useCallback(() => {
    handleMouseUp();
  }, [handleMouseUp]);

  useEffect(() => {
    const cubeElement = cubeRef.current?.parentElement?.parentElement; // The scene div
    if (!cubeElement) return;

    // Add touch listeners to the scene element for better control
    cubeElement.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    cubeElement.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    cubeElement.addEventListener("touchend", handleTouchEnd);
    cubeElement.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      cubeElement.removeEventListener("touchstart", handleTouchStart);
      cubeElement.removeEventListener("touchmove", handleTouchMove);
      cubeElement.removeEventListener("touchend", handleTouchEnd);
      cubeElement.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    // Scene container: Provides perspective. Added mouse down here to initiate drag.
    <div
      className="flex items-center justify-center cursor-grab active:cursor-grabbing"
      style={{ perspective: `${size * 4}px` }} // Perspective should be greater than cube size
      onMouseDown={(e) => handleMouseDown(e.clientX, e.clientY)}
    >
      {/* Cube container: This is what rotates */}
      <div
        ref={cubeRef}
        className="relative transition-transform duration-75 ease-out" // Smooth stop when mouse is released
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {faceImages.map((imgSrc, index) => (
          <div
            key={index}
            className="absolute bg-cover bg-center "
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundImage: `url(${imgSrc})`,
              ...faceStyles[index],
              backfaceVisibility: "hidden", // Optional: hides the back of the faces
            }}
          >
            {/* You could add text or other elements inside faces if needed */}
            {/* <span className="absolute p-2 text-xs text-white bg-black/50 bottom-1 left-1">{`Face ${index + 1}`}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveCube;
