import { useGSAP } from "@gsap/react";
import { navLinks } from "../Constants";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Navbar() {
  const screenWidth = window.screen.width;
  const valueNav = screenWidth * (30 / 100) * -1;
  const valueLine = screenWidth * (12 / 100);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Intro animation for nav links
    tl.from(".from-right", {
      delay: 1,
      x: 80,
      opacity: 0,
      stagger: 0.15,
    });

    tl.fromTo(
      ".line",
      { height: 0 },
      {
        height: "100%",
        duration: 1,
      },
      "<"
    );

    tl.add(() => {
      gsap.to(".nav-box", {
        scrollTrigger: {
          trigger: ".nav-box",
          start: "top top+=200",
          end: "bottom top",
          scrub: 1,
        },
        x: valueNav,
        ease: "power2.inOut",
        duration: 2,
      });

      gsap.to("#line-shift", {
        scrollTrigger: {
          trigger: ".nav-box",
          start: "top top+=200",
          end: "bottom top",
          scrub: 1,
        },
        x: valueLine,
        ease: "power2.inOut",
        duration: 2,
      });
    });
  }, []);

  const smoothScroll = (e, link) => {
    e.preventDefault();
    const target = document.querySelector(link);
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

  return (
    <nav className="nav-box fixed">
      <ul className="navbar text-xl" id="shift">
        <span id="line-shift" className="divider line"></span>
        <div className="flex-col-left justify-evenly h-full">
          {navLinks.map(({ name, link }) => (
            <li key={name} className="from-right">
              <a
                href={link}
                className="txt-underline"
                onClick={(e) => smoothScroll(e, link)}
              >
                {name}
              </a>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}
