import About from "@/components/About"
import Image from "next/image"

const page = () => {
    return (
        <div className="md:px-28">
            <About />

            <div>
                <section>
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-400 sm:text-lg ">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Client-Centric Advocacy and Legal Achievements</h2>
                            <p className="mb-4">At Bhandekar Associates, we prioritize client satisfaction and success. The testimonials from my clients speak volumes about the quality of service and the positive outcomes achieved. I am deeply grateful for the trust clients place in me to navigate complex legal challenges.</p>
                            <p>I have successfully defended clients facing serious charges, including Section 376(D) and 506(B) cases. My advocacy extends to securing justice for victims under the ST/SC Act. Notably, I have achieved positive results in NDPS cases, including a significant outcome involving a substantial quantity of ganja (NDPS 20(B)).In Juvenile Court proceedings and cases related to Sections 366 and 376(2)(N), my strategic approach has led to favorable outcomes for my clients.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <Image width={500} height={1000} className="w-full rounded-lg" src="/nitinWithTrophy.jpg" alt="office content 1" />
                            <Image width={500} height={1000} className="mt-4 w-full lg:mt-10 rounded-lg" src="/nitinLawyer.jpg" alt="office content 2" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default page
