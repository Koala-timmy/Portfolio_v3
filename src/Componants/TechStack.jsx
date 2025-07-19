import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techStack } from "../Constants";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const lineRef = useRef(null);
  const topIconsRef = useRef([]);
  const bottomIconsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top 80%",
      },
    });

    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 2, ease: "power2.out" }
    )
      .fromTo(
        topIconsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 1.5,
          ease: "power2.out",
        },
        "<"
      )
      .fromTo(
        bottomIconsRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 1.5,
          ease: "power2.out",
        },
        "<"
      )
      .fromTo(
        (".arrow"),
        {
            opacity: 0
        },
        {
            duration: 2.5,
            opacity: 1
        }
      );
  }, []);

  const topIcons = techStack.slice(0, 4);
  const bottomIcons = techStack.slice(4, 8);

  return (
    <section id="techStack" className="flex flex-col items-center justify-center py-20 bg-black text-white overflow-hidden min-h-[100vh]">
      <div className="relative w-full max-w-4xl">
        <div className="flex justify-end mb-10 ml-auto pr-10 gap-30 w-8/10">
          {topIcons.map((icon, index) => (
            <div
              key={index}
              ref={(el) => (topIconsRef.current[index] = el)}
              className="flex flex-col items-center opacity-0"
            >
              <img src={icon.imgPath} alt={icon.name} className="w-16 h-16 mb-2" />
              <span>{icon.name}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center mb-10">
          <span className="mr-2 w-35">&lt;What I use/&gt;</span>
          <div
            ref={lineRef}
            className="h-0.5 bg-white w-full origin-left scale-x-0"
          ></div>
          <ArrowRight className="arrow"/>
        </div>
        <div className="flex justify-end mb-10 ml-auto pr-10 gap-30 w-8/10">
          {bottomIcons.map((icon, index) => (
            <div
              key={index}
              ref={(el) => (bottomIconsRef.current[index] = el)}
              className="flex flex-col items-center opacity-0"
            >
              <img src={icon.imgPath} alt={icon.name} className="w-16 h-16 mb-2" />
              <span>{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
