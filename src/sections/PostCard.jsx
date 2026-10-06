import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PostCard = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const setup = () => {
      gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: ".post-card",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    };

    if (video.readyState >= 1) {
      setup();
    } else {
      video.addEventListener("loadedmetadata", setup, { once: true });
    }

    return () => video.removeEventListener("loadedmetadata", setup);
  }, []);

  return (
    <section className="post-card">
      <div className="animated-gradient-bg" />

      <div className="post-card-wrapper group hover:rotate-1 transition duration-700">
        <img src="/images/overlay.webp" alt="" />

        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/postcard-vd.mp4"
        />

        <button className="group-hover:bg-yellow transition duration-700">
          Explore Leonida Keys
        </button>
      </div>
    </section>
  );
};

export default PostCard;
