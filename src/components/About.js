import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div>
            <section className="text-gray-400 body-font">
                <div className="container mx-auto flex px-5 py-10 md:py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image className="object-cover object-center rounded-xl" alt="hero" height={600} width={600} src="/home.jpg" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-white">Nitin Bhandekar
                            <br className="hidden lg:inline-block" />- Your Trusted Legal Advocate
                        </h1>
                        <p className="mb-8 text-justify leading-relaxed">Welcome to Bhandekar Associates, where justice meets expertise. I am Nitin Bhandekar, a seasoned attorney dedicated to providing unparalleled legal services in Raipur, Chhattisgarh. <br /> <br />
                            With a strong educational foundation in B.A. and LL.B. from Pandit Ravishankar Shukl University, Raipur, and additional qualifications like PGDCA from Dr. CV Raman University, I bring a comprehensive understanding of the law to each case. Boasting five years of hands-on experience, I am driven by a passion for justice and a commitment to excellence.
                            <br /> <br />
                            I have been recognized for my outstanding contributions, having received a Certificate for Good Work from the Indian Legal Services Authority.</p>
                    </div>
                    <div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
