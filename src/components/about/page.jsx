import React, { useEffect, useRef } from "react";
import "./style.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function page() {
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    if (window.innerWidth >= 1024) {
      boxes.forEach((item, index) => {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div>
      <section className="about-container">
        <h1>About us</h1>
        <div className="box-about">
          <img
            src="/b.webp"
            alt="แฟนต้ารสส้ม น้ำอัดลมกลิ่นส้มซ่า สดชื่น"
            loading="lazy"
            itle="แฟนต้ารสส้ม น้ำอัดลม Fanta Orange"
          />
          <img
            src="/b.webp"
            alt="แฟนต้ารสส้ม น้ำอัดลมกลิ่นส้มซ่า สดชื่น"
            loading="lazy"
            itle="แฟนต้ารสส้ม น้ำอัดลม Fanta Orange"
          />
          <img
            src="/lemon.webp"
            alt="น้ำมะนาวสด น้ำผลไม้เพื่อสุขภาพ รสเปรี้ยวธรรมชาติ"
            loading="lazy"
            itle="แฟนต้ารสส้ม น้ำอัดลม Fanta Orange"
          />
          <img src="/b.webp" alt="แฟนต้ารสส้ม น้ำอัดลมกลิ่นส้มซ่า สดชื่น" />
          <img
            src="/lemon.webp"
            alt="น้ำมะนาวสด น้ำผลไม้เพื่อสุขภาพ รสเปรี้ยวธรรมชาติ"
            loading="lazy"
            itle="แฟนต้ารสส้ม น้ำอัดลม Fanta Orange"
          />

          <div className="box">
            <h2>Colorful Bubbles of Fun</h2>
            <p>
              Fanta brings a burst of flavor and color to your day with every
              sip. Whether it’s Orange, Strawberry, or Green Apple, each bottle
              is packed with fizzy joy to brighten your moments.
            </p>
          </div>
          <div className="box">
            <h2>A Global Icon of Refreshment</h2>
            <p>
              Born under The Coca-Cola Company, Fanta has become a global
              favorite. It’s more than just a drink — it’s a symbol of fun,
              freedom, and youthful energy enjoyed by millions worldwide.
            </p>
          </div>
          <div className="box">
            <h2>Made to Match Your Vibe</h2>
            <p>
              No matter your style, there’s a Fanta for you. From hanging out
              with friends to chilling after school, Fanta adds that extra
              splash of flavor to every moment.
            </p>
          </div>
          <div className="box">
            <h2>Fizz Up Your Life</h2>
            <p>
              Say goodbye to boring days — Fanta is here to turn up the fizz!
              Pop open a bottle and let the vibrant taste and playful bubbles
              lift your spirit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
