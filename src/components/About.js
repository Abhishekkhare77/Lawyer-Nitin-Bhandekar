"use client";
import Image from 'next/image'
import React from 'react'
import { Zoom } from 'react-awesome-reveal'

const About = () => {

    return (
        <div>
            <section className="text-gray-400 body-font">
                <div className="container mx-auto flex px-5 py-10 md:py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Zoom>
                            <Image className="object-cover object-center rounded-xl" alt="hero" height={600} width={600} src="/home.jpg" />
                        </Zoom>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-white"><b className='text-blue-500'>Nitin Bhandekar</b> 
                            <br className="hidden lg:inline-block" />- Your Trusted Legal Advocate
                        </h1>
                        <p className="mb-8 text-justify leading-relaxed">Welcome to <b className='text-white'>Bhandekar Associates</b>, where justice meets expertise. I am <b className='text-white'>Nitin Bhandekar</b>, a seasoned attorney dedicated to providing unparalleled legal services in <b className='text-white'>Raipur, Chhattisgarh</b>. <br /> <br />
                            With a strong educational foundation in <b className='text-white'>B.A. and LL.B. from Pandit Ravishankar Shukl University, Raipur</b>, and additional qualifications like <b className='text-white'>PGDCA from Dr. CV Raman University</b>, I bring a comprehensive understanding of the law to each case. Boasting <b className='text-white'>five years of hands-on experience</b>, I am driven by a passion for justice and a commitment to excellence.
                            <br /> <br />
                            I have been recognized for my outstanding contributions, having received a <b className='text-white'>Certificate for Good Work from the Indian Legal Services Authority</b>.</p>
                    </div>
                    <div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
