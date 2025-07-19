import Contact from "../Componants/Contact";
import Footer from "../Componants/Footer";
import Hero from "../Componants/Hero"
import TechStack from "../Componants/TechStack";
import Learning from "../Componants/Timeline";
import Work from "../Componants/Work";


export default function Home(){

    return(
        <>
           <Hero/>
           <Work/>
           <Learning/>
           <TechStack/>
           <Contact/>
           <Footer/>
        </>
    )
}