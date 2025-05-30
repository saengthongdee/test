import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const bottleRef = useRef();

  useEffect(() => {
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom+=1000 top",
        pin: bottleRef.current,
        scrub: true,
        markers: true,
        pinSpacing: true,
      },
    },);

    // Stage 1: ขยับ + เอียง
    tl.to(bottleRef.current, {
      x: -500,
      rotateZ: 10,
      duration: 1,
    });

    

    // Stage 2: ค่อย ๆ หมุนกลับ
    tl.to(bottleRef.current, {
      rotateZ: 0,
      duration: 1,
    });

      tl.to(bottleRef.current, {
      x: 0,
      rotateZ: 10,
      duration: 1,
    },"+=0.5");

     tl.to(bottleRef.current, {
      rotateZ: 0,
      duration: 1,
    });

    gsap.fromTo(
      bottleRef.current,
      { y: -50, opacity: 0 }, // ค่าเริ่มต้น
      { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" } 
    );
  }, []);

  return (
    <div className="container">
      <section className="hero">
        <img
          ref={bottleRef}
          src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=200&q=80"
          alt="bottle"
          className="bottle"
        />
      </section>

      <section className="content">
        <h2>รายละเอียดสินค้า</h2>
        <p>เมื่อ scroll ลงมา ขวดจะเลื่อนตามแบบลื่น ๆ...</p>
      </section>

      <section className="footer">
        <p>🚀 จบการแสดง</p>
      </section>
    </div>
  );
}

export default App;
