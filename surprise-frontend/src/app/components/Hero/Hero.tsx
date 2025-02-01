"use client";

import BackgroundVideo from "next-video/background-video";
import birthdayGreeting from "../../../../videos/birthdayGreeting.mp4.json";

export default function Hero() {
  return (
    <div className="text-white">
      <BackgroundVideo
        src={birthdayGreeting.sources?.[0]?.src}
      >
          <h1>Sureprise</h1>
          <p>
            A React component for adding video to your Next.js application. It
            extends both the video element and your Next app with features for
            automatic video optimization.
          </p>
      </BackgroundVideo>
    </div>
  );
}
