"use client"
import React, { useState } from "react";
import { generateRandomCrosshair } from "../utils/generator";

const VisualCrosshair = () => {
  const [crosshair, setCrosshair] = useState(generateRandomCrosshair());

  const handleGenerate = () => {
    setCrosshair(generateRandomCrosshair());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="relative flex items-center justify-center h-32 w-32">
        {/* Horizontal Line */}
        <div
          style={{
            backgroundColor: crosshair.color,
            height: `${crosshair.thickness}px`,
            width: `${crosshair.size}px`,
          }}
          className="absolute"
        />
        {/* Vertical Line */}
        <div
          style={{
            backgroundColor: crosshair.color,
            width: `${crosshair.thickness}px`,
            height: `${crosshair.size}px`,
          }}
          className="absolute"
        />
      </div>

    </div>
  );
};

export default VisualCrosshair;
