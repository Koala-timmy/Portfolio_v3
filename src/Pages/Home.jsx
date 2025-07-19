import Contact from "../Componants/contact";
import Footer from "../Componants/footer";
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