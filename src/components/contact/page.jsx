import React, { useEffect, useRef } from "react";
import "./style.css";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function contact() {
  const textRef = useRef();

  useEffect(() => {
    if (window.innerWidth <= 480) {
      return;
    }

    gsap.fromTo(
      textRef.current,
      { y: 100 ,opacity: 0},
      {
        opacity: 1,
        y: 0,
        duration: 1,

        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "bottom",
          toggleActions: "play none none none",
        },
      }
    );

    const icons = document.querySelectorAll(".icon");

    icons.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        { y: -500 },
        {
          y: 0,
          duration: 1 + index * 0.3,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: icon,
            start: "top 80%",
            end: "bottom",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <section className="contact-container">
        <h1 ref={textRef}>We are social</h1>
        <div className="box-icon">
          <FaFacebookSquare className="icon" />
          <FaInstagram className="icon" />
          <FaYoutube className="icon" />
        </div>

        <img src="/b.webp" alt="" />
        <img src="/b.webp" alt="" />
        <img src="/b.webp" alt="" />
        <img src="/b.webp" alt="" />
        <img src="/b.webp" alt="" />
        <img src="/b.webp" alt="" />
        <img src="/lemon.webp" alt="" />
        <img src="/lemon.webp" alt="" />
        <img src="/lemon.webp" alt="" />
        <img src="/lemon.webp" alt="" />
        <img src="/lemon.webp" alt="" />
        <img src="/lemon.webp" alt="" />
        <img src="/lemon.webp" alt="" />
         <img src="/b.webp" alt="" />
          <img src="/b.webp" alt="" />
           <img src="/b.webp" alt="" />
           <img src="/lemon.webp" alt="" />
           <img src="/lemon.webp" alt="" />

      </section>
    </div>
  );
}

export default contact;
