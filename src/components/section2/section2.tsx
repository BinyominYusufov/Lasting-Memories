import Image from 'next/image';
import React from 'react';
import olivo from "../../../src/images/central.png"
import central from "../../../src/images/olivo.png"

export default function Section2() {
    return (
        <div className="min-h-screen bg-[#e9e5de] py-12 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-medium text-[#222] mb-8">
                    our<br />collections
                </h1>

                <div className="flex flex-wrap gap-4 mb-12">
                    <a href="/collections/central" className="text-sm text-[#222] hover:underline">central</a>
                    <a href="/collections/olivo" className="text-sm text-[#222] hover:underline">olivo</a>
                    <a href="/collections/morisot" className="text-sm text-[#222] hover:underline">morisot</a>
                    <a href="/collections/curve" className="text-sm text-[#222] hover:underline">curve</a>
                    <a href="/collections/wire" className="text-sm text-[#222] hover:underline">wire</a>
                    <a href="/collections/marguerite" className="text-sm text-[#222] hover:underline">marguerite</a>
                    <a href="/collections/fizz" className="text-sm text-[#222] hover:underline">fizz</a>
                    <a href="/collections/rafael" className="text-sm text-[#222] hover:underline">rafael</a>
                    <a href="/collections/chagall" className="text-sm text-[#222] hover:underline">chagall</a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                        <div className="relative h-80 md:h-96 overflow-hidden">
                            <Image
                                src={central.src}
                                alt="Central collection"
                                className="w-full h-full object-cover"
                                width={500}
                                height={500}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-3xl text-white font-light">central</h2>
                            </div>
                        </div>
                        <p className="mt-2 text-sm text-[#222]">ready to become the centerpiece of your home</p>
                        <a href="/collections/central" className="mt-2 inline-block">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    <div className="relative">
                        <div className="relative h-80 md:h-96 overflow-hidden">
                            <Image
                                width={500}
                                height={500}
                                src={olivo.src}
                                alt="Olivo collection"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-3xl text-white font-light">olivo</h2>
                            </div>
                        </div>
                        <p className="mt-2 text-sm text-[#222]">Believe us, this will be a real eye-catcher</p>
                    </div>
                </div>

                <div className="flex justify-end items-center mt-8">
                    <a href="#" className="p-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <span className="mx-2 text-sm text-[#222]">1 / 9</span>
                    <a href="#" className="p-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}