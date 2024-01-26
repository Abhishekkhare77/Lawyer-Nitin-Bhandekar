const Contactus = () => {
    return (
        <div>
            <section className="bg-black">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Your Voice, Your Victory: Connecting Justice with Compassion. Let&apos;s Navigate Legal Challenges Together.</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="example@gmail.com" required />
                        </div>
                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-white bg-black rounded-lg border border-gray-300 shadow-sm" placeholder="Let me know how I can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-white bg-black rounded-lg shadow-sm border border-gray-300" placeholder="Leave a comment..."></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit focus:ring-4 focus:outline-none hover:bg-blue-700 focus:ring-blue-800">Send message</button>

                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contactus
