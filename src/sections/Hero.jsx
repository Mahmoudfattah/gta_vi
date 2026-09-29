import gsap from "gsap";
import {useGsap} from 'gsap/all'
import ComingSoon from "./ComingSoon";


export default function Hero() {
  return (
    <section className="hero-section ">
      <div className="size-full mask-wrapper ">
        <img
          src="/public/images/hero-bg.webp"
          alt="background image"
          className="scale-out"
        />
        <img
          src="/public/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo face-out"
        />
        <img
          src="/public/images/watch-trailer.png"
          alt="trailer"
          className="trailer-logo face-out"
        />

            <div className="play-img fade-out">
          <img
          src="/public/images/play.png"
          alt="play"
          className="w-7 ml-1"
        />

      </div>
      </div>



  

      <div>
          <img
          src="/public/images/big-hero-text.svg"
          alt="hero-logo"
          className="size-full object-cover mask-logo"
        />
      </div>
      <div className="fake-logo-wrapper">
          <img
          src="/public/images/big-hero-text.svg"
          alt="hero-logo"
          className="overlay-logo"
        />
      </div>
      <ComingSoon/>
    </section>
  );
}
