"use client";
import Link from "next/link"
import { useState } from "react";

const Contactus = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionError(null);

        try {
            console.log(email,subject,message);
            // const response = await fetch(api, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ email, subject, message }),
            // });

            // if (response.ok) {
            //     console.log('Form submitted successfully');
            //     // You can add logic to show a success message or redirect the user
            // } else {
            //     const errorData = await response.json();
            //     throw new Error(errorData.error || 'Form submission failed');
            // }
        } catch (error) {
            console.error('Error submitting form:', error.message);
            setSubmissionError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <section className="bg-black">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
                        Your Voice, Your Victory: Connecting Justice with Compassion. Let&apos;s Navigate Legal Challenges Together.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow-sm bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                placeholder="example@gmail.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="block p-3 w-full text-sm text-white bg-black rounded-lg border border-gray-300 shadow-sm"
                                placeholder="Let me know how I can help you"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="block p-2.5 w-full text-sm text-white bg-black rounded-lg shadow-sm border border-gray-300"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>
                        {submissionError && <div className="text-red-500">{submissionError}</div>}
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit focus:ring-4 focus:outline-none hover:bg-blue-700 focus:ring-blue-800"
                            >
                                {isSubmitting ? 'Submitting...' : 'Send message'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <div className="flex items-center justify-center font-sans font-extrabold text-gray-500">
                <span className="h-[1px] w-72 bg-gray-500 m-5"></span>OR <span className="h-[1px] w-72 bg-gray-500 m-5"></span>
            </div>
            <section className="flex items-center justify-center my-5">
                <div className="flex flex-col justify-center p-5 border space-y-2 border-gray-500 shadow-sm shadow-white rounded-xl">
                    <p>Law firm - <span className="text-blue-500 font-bold"> BHANDEKAR ASSOCIATE </span></p>
                    <p> Address (office location)- <span className="hover:underline text-blue-500 font-bold "> <Link target="_blank" href={"https://www.google.com/maps/search/tiwari+colony+dumar+talab+raipur+chhattisgarh/@21.2526884,81.5858398,18.5z?entry=ttu"}>TIWARI COLONY DUMAR TALAB RAIPUR CHHATTISGARH</Link> </span></p>
                    <p>Phone number  - <span className="text-blue-500 font-bold">+91 9406366901</span></p>
                    <p>Email address - <Link href={"https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswLwpmzkkJQNslKWTmkPtlHFsncmKqGctVJXdgtvSwbqgMtcpvlXZZxPJsRKMZjQTbPl"} target="_blank" className="text-blue-500 font-bold"> nbhandekarassociates@gmail.com</Link></p>
                    <p>Current Practice Place - <span className="text-blue-500 font-bold uppercase">District and session court raipur chhattisgarh</span></p>
                </div>
            </section>
        </div>
    )
}

export default Contactus
