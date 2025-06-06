import React, { useEffect, useRef } from "react";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function page() {
  const videoRef = useRef();

  useEffect(() => {
    if (window.innerWidth > 1024) {
      gsap.fromTo(
        videoRef.current,
        { scale: 0.8 },
        {
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);
  return (
    <div>
      <section className="video">
        <div className="box" ref={videoRef}>
          <video
            src="/fantavideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="video-bg"
          ></video>
          <p class="video-description">
           Fanta Orange promotional video – Refreshing, fizzy, and full of flavor. Brighten up your day with every sip!
          </p>
        </div>
      </section>
    </div>
  );
}

export default page;
