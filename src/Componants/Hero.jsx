import { useGSAP } from "@gsap/react";
import HeroExperience from "./HeroModels/HeroExperience";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const smoothScroll = (e, selector) => {
  e.preventDefault();

  const target = document.querySelector(selector);
  if (target) {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: target,
        offsetY: 50,
      },
      ease: "power2.inOut",
    });
  }
};

export default function Hero() {
  const screenWidth = window.screen.width;
  const valueX = screenWidth * (10 / 100) * -1;
  const valueY = valueX;

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from("#from-left", {
      delay: 1,
      x: -80,
      opacity: 0,
      stagger: 0.15,
    });

    tl.add(() => {
      tl.to(".top-left", {
        scrollTrigger: {
          trigger: ".top-left",
          start: "bottom 30%",
          end: "top top",
          scrub: 1,
        },
        x: valueX,
        y: valueY,
      });
    });
  }, []);
  return (
    <section id="top">
      <div className="w-80 h-[100vh] px-5 ml-[10%] content-center">
        <span className="blur"></span>
        <div className="flex-col">
          <div className="mt-0 h-[5vh]">
            <a
              href="#top"
              id="from-left"
              className="text-4xl top-left fixed"
              onClick={(e) => smoothScroll(e, "#top")}
            >
              Timothy | TG
            </a>
          </div>
          <p id="from-left" className="mt-10 text-xl font-thin">
            Shaping Ideas Concepts Designs Code into Real Projects that Deliver
            Results
          </p>
          <p id="from-left" className="mt-5 mb-10 font-thin">
            Hi, i'm Tim, a Front-End Developer based in South Africa with a
            passion for code
          </p>
          <a
            href="#contact"
            onClick={(e) => smoothScroll(e, "#contact")}
            id="from-left"
            className="btn"
          >
            Contact
          </a>
        </div>
      </div>
      <div>
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
}
