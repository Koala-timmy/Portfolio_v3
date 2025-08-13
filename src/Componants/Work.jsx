import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function Work() {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      }
    );
  }, []);
  return (
    <section className="marginControl" id="work">
      <div className="flex justify-end w-full px-10 gap-7">
        <div ref={project1Ref} className="flex-col-left basis-6/10 ">
          <img
            src="/images/project1.jpeg"
            alt="Project-1 Image"
            className="border-1 border-white rounded-xl"
            loading="lazy"
          />
          <div>
            <p className="heading">Block Busters</p>
            <p className="txt">
              Block-Busters is a Cape Town-based company offering professional
              drain and sewer cleaning, pipe repairs, and trenchless solutions
              for residential and commercial properties.
            </p>
            <ul className="flex justify-evenly w-6/10">
              <li>React</li>
              <li>Tailwindcss</li>
              <li>Gsap</li>
              <li>Figma</li>
            </ul>
            <p className="sub-txt">📆2025/06/02</p>
          </div>
        </div>
        <div className="flex-col-left basis-4/10 gap-5">
          <div ref={project2Ref}>
            <img
              src="/images/project2.jpeg"
              alt="Project-2 Image"
              className="border-1 border-white rounded-xl"
              loading="lazy"
            />
            <div>
              <p className="heading">Leak Busters</p>
              <ul className="flex justify-evenly w-full">
                <li>React</li>
                <li>Tailwindcss</li>
                <li>Figma</li>
              </ul>
              <p className="sub-txt">📆2025/06/23</p>
            </div>
          </div>
          <div ref={project3Ref}>
            <img
              src="/images/project3.jpeg"
              alt="Project-3 Image"
              className="border-1 border-white rounded-xl"
              loading="lazy"
            />
            <div>
              <p className="heading">Water & Drainage Services</p>
              <ul className="flex justify-evenly w-full">
                <li>React</li>
                <li>Tailwindcss</li>
                <li>Gsap</li>
                <li>Figma</li>
              </ul>
              <p className="sub-txt">📆2025/07/02</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
