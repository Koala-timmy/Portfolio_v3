import { GithubIcon, InstagramIcon, LinkedinIcon, MessageCircle } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="marginControl contact text-white"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-start gap-15">
        <div className="md:w-2/5">
          <h2 className="text-4xl font-semibold mb-6">Let’s get in touch</h2>
          <p className="text-lg leading-relaxed">
            Have a project in mind or just want to say hello? I’m always open to
            new opportunities, collaborations, or a good chat about web
            development. Let’s connect!
          </p>
          <div className="flex gap-3 mt-2">
            <a href="https://www.instagram.com/itztimtim">
              <InstagramIcon/>  
            </a>
            <a href="https://www.linkedin.com/in/timothy-green-276466326">
              <LinkedinIcon/>
            </a>
            <a href="https://github.com/Koala-timmy">
              <GithubIcon/>
            </a>
          </div>
        </div>
        <form 
          action="https://formspree.io/f/mldldvoz"
          method="POST" 
          className="md:w-3/5 flex flex-col space-y-6"
        >
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="type w-full"
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              className="type w-full"
            />
          </div>
          <textarea
            placeholder="Message"
            name="message"
            className="type w-full"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="btn w-60"
          >
            Send
          </button>
        </form>
      </div>
      <hr/>
    </section>
  );
}

export default Contact;
