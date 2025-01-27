import BackgroundVideo from "next-video/background-video";
import birthdayGreeting from "../../../../videos/birthdayGreeting.mp4.json";

export default function Hero() {
  return (
    <div>
      <BackgroundVideo src={birthdayGreeting} style={{maxWidth: "fit-content"}}>
        <h1 className="text-white">Sureprise</h1>
        <p className="text-white">
          A React component for adding video to your Next.js application. It
          extends both the video element and your Next app with features for
          automatic video optimization.
        </p>
      </BackgroundVideo>
    </div>
  );
}
