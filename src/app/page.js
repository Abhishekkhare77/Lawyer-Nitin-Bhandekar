"use client";
import About from "../components/About";
import Card from "../components/Card";
import Contactus from "../components/Contactus";
import Testimonial from "../components/Testimonial";
import Image from "next/image";
import Link from "next/link";
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className="h-100vh w-100vw overflow-hidden">
      <section className="relative h-[40vh] md:h-[100vh] bg-black/70">
        <Image src={"/lawyerHome.jpg"} width={1000} height={300} alt="lawyerhome" className="w-full h-full absolute -z-10"/>
        <div className="py-4 md:py-12 px-4 mx-auto max-w-screen-xl text-center">
        <Slide direction="down">
          <h1 className="mb-4 relative text-2xl mt-8 md:mt-40 font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">The Right Lawyer <br /> Makes All The Difference.</h1>
        </Slide>
        <Fade>
          <p className="mb-2 md:mb-8 text-sm md:text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">With over 5 years of experience.</p>
        </Fade>
        <Bounce>
          <div onClick={() => window.location.href = "tel:" + 9406366901}  className="flex flex-col mb-2 md:mb-8 lg:mb-16 space-y-2 md:space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg transition-all delay-75 ease-in-out hover:text-blue-700">
                  Contact Now
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Link>
          </div>
        </Bounce>
    </div>
      </section>

      <h1 className="text-3xl md:text-5xl text-center font-bold mt-10 md:mb-5">About</h1>
      <section className="px-4 md:px-28">
          <About/>
      </section>
    
      <h1 className="text-3xl md:text-5xl text-center font-bold mt-10 mb-5">Practice Areas</h1>
      <section className="flex items-center justify-center flex-wrap p-10 gap-x-5 gap-y-5">
        <Zoom>
          <Card title={"Criminal Defense"} description={"As a dedicated criminal defense attorney, I specialize in providing strong legal representation for individuals facing criminal charges. From misdemeanors to serious felonies, my goal is to protect the rights and freedom of my clients through strategic defense strategies, negotiations, and courtroom advocacy."} imageSrc={"/criminalDefence.jpg"}/>
        </Zoom>
        
        <Zoom>
        <Card title={"Family Law"} description={"In the realm of family law, I guide clients through challenging times such as divorce, child custody battles, and spousal support disputes. My focus is on achieving fair and equitable resolutions while ensuring the best interests of the family, especially children, are prioritized."} imageSrc={"/familyLaw.jpg"}/>

        </Zoom>
        <Zoom>
        <Card title={"NDPS Defense"} description={"Specializing in NDPS cases, I offer legal expertise in defending individuals charged with drug-related offenses. Whether it's navigating complex drug laws, challenging evidence, or ensuring fair legal proceedings, my commitment is to secure the best possible outcomes for clients facing such charges."} imageSrc={"/ndps.jpg"}/>

        </Zoom>
        <Zoom>
        <Card title={"MACT"} description={"As an advocate for accident victims, I specialize in MACT cases, seeking justice and compensation for those who have suffered injuries or loss due to motor accidents. My focus extends to navigating insurance claims, negotiating settlements, and representing clients in tribunal proceedings."} imageSrc={"/motoraccident.jpeg"}/>

        </Zoom>
        <Zoom>
        <Card title={"Civil Litigation"} description={"Handling a spectrum of civil matters, I specialize in civil litigation, resolving disputes through negotiation, mediation, or litigation in the courtroom. My expertise encompasses breach of contract cases, property disputes, and other civil matters, ensuring effective legal representation for my clients."} imageSrc={"/civilLitigation.jpg"}/>

        </Zoom>
        <Zoom>
        <Card title={"Banking and Finance Law"} description={"In the intricate world of banking and finance law, I provide comprehensive legal support to financial institutions and clients. My services include navigating regulatory frameworks, drafting and negotiating financial agreements, and addressing complex financial transactions."} imageSrc={"/banking.jpg"}/>

        </Zoom>
        <Zoom>
        <Card title={"Estate Planning and Probate"} description={"As a trusted advisor in estate planning, I assist clients in structuring their legacies through wills, trusts, and estate plans. Additionally, I guide families through the probate process, ensuring a smooth transition of assets and honoring the wishes of the deceased"} imageSrc={"/estate.jpeg"}/>

        </Zoom>
        <Zoom>
        <Card title={"White-Collar Crime Defense"} description={"Focusing on white-collar crimes such as fraud, embezzlement, and insider trading, I bring a wealth of experience in defending individuals facing complex financial allegations. My approach involves meticulous legal analysis, strategic defense planning, and vigorous representation to protect my clients' rights."} imageSrc={"/wcd.jpg"}/>

        </Zoom>
        <JackInTheBox>
        <Card title={"And all other Cases"} description={"As a versatile attorney, I adeptly navigate diverse legal landscapes, ensuring effective representation across all cases with expertise and commitment."} imageSrc={"/more.jpg"}/>

        </JackInTheBox>

      </section>
      <h1 className="text-3xl md:text-5xl text-center font-bold my-5">Testimonials</h1>
      <section className="flex items-center flex-wrap justify-center gap-5 px-5 md:px-28">
        <Fade>
          <Testimonial name={"Rajesh Kumar"} description={"I am immensely grateful for Nitin Bhandekar's legal acumen. His unwavering dedication secured justice for my family in a challenging Section 376(D) case. Thank you, Nitin!"}/>

        </Fade>
        <Fade>
          <Testimonial name={"Anita Sharma"} description={"Nitin Bhandekar is not just a lawyer; he is a compassionate advocate. In a ST/SC Act case, his strategic approach brought about a positive resolution. Highly recommend his services."}/>
        </Fade>
        <Fade>
          <Testimonial name={"Rahul Singh"} description={"When facing an NDPS 20(B) charge involving 40kg of ganja, I turned to Nitin Bhandekar. His expertise and tireless efforts led to a successful outcome. Truly a trustworthy legal ally"}/>

        </Fade>
      </section>

      <section>
          <Contactus/>
      </section>
    </div>
  );
}
