import React from 'react';

export default function Footer() {
    return (
        <main className="min-h-screen bg-[#e9e5de]">
            <section className="px-2 py-12 md:px-12 lg:px-20">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-medium text-[#222] mb-2">
                                Request our
                                <br />
                                2022 catalogue.
                            </h1>
                        </div>
                        <div>
                            <div className="mb-6">
                                <div className="flex items-center mb-2">
                                    <label htmlFor="email" className="text-sm text-[#222]">
                                        email address
                                    </label>
                                    <span className="ml-2 text-[#222]">*</span>
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full bg-transparent border border-[#222] rounded-none h-12 px-3 py-2 focus:outline-none"
                                />
                            </div>

                            <div className="flex items-center space-x-2 mb-6">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="h-4 w-4 rounded-none border-[#222] checked:bg-[#222] checked:text-white"
                                />
                                <label htmlFor="terms" className="text-sm leading-none text-[#222]">
                                    I agree with the{" "}
                                    <a href="#" className="underline">
                                        Privacy & Cookie Policy
                                    </a>{" "}
                                    of Joli
                                </label>
                            </div>

                            <button className="rounded-full px-8 py-2 h-auto bg-transparent text-[#222] border border-[#222] hover:bg-[#222] hover:text-white transition-colors">
                                send
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-[#222] text-white py-12 px-6 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div className="md:col-span-1">
                            <span className="text-3xl font-light">JOLI</span>
                        </div>

                        <div>
                            <h3 className="text-sm mb-4">collections</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#">Wire</a>
                                </li>
                                <li>
                                    <a href="#">Curve</a>
                                </li>
                                <li>
                                    <a href="#">Fizz</a>
                                </li>
                                <li>
                                    <a href="#">Marguerite</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm mb-4">products</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#">Tables</a>
                                </li>
                                <li>
                                    <a href="#">Chairs</a>
                                </li>
                                <li>
                                    <a href="#">Cabinets</a>
                                </li>
                                <li>
                                    <a href="#">Accessories</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm mb-4">inspiration</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#">Joli Days 2022</a>
                                </li>
                                <li>
                                    <a href="#">Terrace</a>
                                </li>
                                <li>
                                    <a href="#">Ceremonies & Meetings</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="mb-6">
                                <h3 className="text-sm mb-4">about us</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="#">Materials</a>
                                    </li>
                                    <li>
                                        <a href="#">Find a dealer</a>
                                    </li>
                                    <li>
                                        <a href="#">Professionals</a>
                                    </li>
                                    <li>
                                        <a href="#">News</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm mb-4">contact</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>Industrielaan 5</li>
                                    <li>8520 Kortrijk</li>
                                    <li>
                                        <a href="mailto:info@joli.be">info@joli.be</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <a href="#" className="text-xs">
                                Privacy & Cookie Policy
                            </a>
                        </div>
                        <div>
                            <p className="text-xs">
                                <a href="#">Disclaimer</a>
                            </p>
                        </div>
                        <div className="flex justify-start md:justify-end items-center gap-4">
                            <p className="text-xs mr-4">made by skinn</p>
                            <a href="#" aria-label="Facebook">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth={2} />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                                    <rect x="2" y="9" width="4" height="12" strokeWidth={2} />
                                    <circle cx="4" cy="4" r="2" strokeWidth={2} />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}