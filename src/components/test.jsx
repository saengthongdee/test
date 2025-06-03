import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

function video() {
  const bottleRef = useRef();
  const textRef = useRef();

  const boxred = useRef();
  const boxgreen = useRef();
  const fantaRef = useRef();

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1025px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom+=720 top",
            pin: bottleRef.current,
            scrub: true,
            pinSpacing: true,
          },
        });

        tl.to(bottleRef.current, { x: -400, rotateZ: 10, duration: 1 });
        tl.to(bottleRef.current, { rotateZ: 0, duration: 1 });
        tl.to(bottleRef.current, { x: 0, rotateZ: 10, duration: 1 }, "+=0.5");
        tl.to(bottleRef.current, { rotateZ: 0, duration: 1, scale: 0.8 });

        gsap.fromTo(
          bottleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, delay: 1, duration: 1, ease: "back.out(1.7)" }
        );
      },

      

      "(max-width: 480px)": function () {
        gsap.set(bottleRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateZ: 0,
        });
      },
    });

     gsap.fromTo(
          fantaRef.current,
          {y:100, opacity:0},
          {y:0 , opacity:1, duration: 1, ease:"circ.inOut"}
        );

    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 50%",
          end: "bottom 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
     

    if (window.innerWidth >= 1024){
      gsap.fromTo(
      boxred.current,
      { x: -200 , rotateZ: 10},
      {
        x: 0,
        rotateZ:0,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: boxred.current,
          start: "top 70%",
          end: "bottom ",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      boxgreen.current,
      { x: 200 ,rotateZ: -10},
      {
        x: 0,
        rotateZ: 0,
        duration: 1,
         ease: "power2.out",
        scrollTrigger: {
          trigger: boxred.current,
          start: "top 70%",
          end: "bottom ",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    }
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".buy");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="container">
      <section className="hero">
        <div className="text-overlay">
          <h2 ref={fantaRef}>fanta</h2>
          <img className="b" src="/b.webp" alt="" />
          <img className="lemon" src="/lemon.webp" alt="" />
        </div>
        <img
          ref={bottleRef}
          src="/fantaorangeimage.webp"
          alt="ขวดแฟนต้าส้ม เครื่องดื่มน้ำอัดลม"
          className="bottle"
        />
      </section>

      <section className="content">
        <div className="image">
          <div className="box-img">
            <img className="fantaorange-ipad" src="/fantaOrange.webp" alt="" />
            <img  src="/bg-orang.webp" alt="" />
          </div>
        </div>
        <div className="text" ref={textRef}>
          <h2>Flavour update</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            accusantium quasi dolor consequuntur possimus necessitatibus
            voluptates nam provident tempora fuga laborum voluptate, iusto hic
            maxime eaque aperiam repellendus saepe est deleniti voluptatum
            officia sit obcaecati rem voluptas? Quasi consequatur mollitia odio
            cumque magnam nesciunt consequuntur deleniti perspiciatis culpa
            assumenda? Maxime illo maiores, vero voluptate, voluptas velit non
            minus quam omnis earum error, nihil quod fugit? Possimus soluta
            explicabo ut tempora vero, voluptas, aliquam natus quam omnis illum,
            repudiandae dolor illo!
          </p>
        </div>
      </section>

      <section className="footer">
        <div ref={boxred} className="box">
          <img
            src="/fantaredimage.webp"
            alt="น้ำดื่มแฟนต้ารสสตอเบอรี่ เครื่องดื่มน้ำอัดลม"
            className="bottle"
          />
          <button className="buy">Buy now</button>
        </div>

        <div className="box">
          <img
            src="/fantaorangeimage.webp"
            alt="ขวดแฟนแอปเปิลเขียว เครื่องดื่มน้ำอัดลม"
            className="bottle ipad"
          />
          <button className="buy" id="bo-center">
            Buy now
          </button>
        </div>
        <div className="box" ref={boxgreen}>
          <img
            src="/fantagreenimage.webp"
            alt="ขวดแฟนแอปเปิลเขียว เครื่องดื่มน้ำอัดลม"
            className="bottle"
          />
          <button className="buy">Buy now</button>
        </div>
      </section>
    </div>
  );
}

export default video;
