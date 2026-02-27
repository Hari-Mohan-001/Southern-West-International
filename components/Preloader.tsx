"use client";
import { useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  if (!loading) return null;

  return (
    <div className="ed-preloader">
      <video
        autoPlay
        muted
        playsInline
        className="preloader-video"
        onEnded={() => setLoading(false)}
      >
        <source src="/assets/images/video/animevideo/logo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Preloader;
