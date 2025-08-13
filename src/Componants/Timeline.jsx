import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { timelineInfo } from "../Constants";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Learning() {
  return (
    <section id="timeline" className="marginControl">
      <div className="flex-col-left items-center py-20">
        {timelineInfo.map(
          ({ title, subTitle, info, imgPath, date, link, tech }, index) => (
            <div key={index} className="timelineBox">
              <img
                src={imgPath}
                alt="Image"
                className="timelineImg mx-2 my-5"
                loading="lazy"
              />
              <div className="w-6/10 content-center px-5">
                <div className="rightBox">
                  <p className="text-2xl">{title}</p>
                  <a
                    href={link}
                    className="flex items-center gap-1 hover:text-gray-400"
                  >
                    Visit Site
                    <ArrowRight size={20} />
                  </a>
                </div>
                <hr className="py-1" />
                <p className="text-lg text-gray-300 pb-2">
                  {subTitle} | {date}
                </p>
                <ul className="pl-7 pb-4">
                  {info.map((index) => (
                    <li>{index}</li>
                  ))}
                </ul>
                <p>Tech used | {tech}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
