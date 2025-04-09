"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

import "./globals.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';


import Footer from "@/components/footer/footer";
import image from "../../src/images/IMAGE.png";
import Section1 from "@/components/section1/section1";
import Section2 from "@/components/section2/section2";
import Section3 from "@/components/section3/secton3";
import Section4 from "@/components/section4/section4";
import Section6 from "@/components/section6/section6";
import ded from "../../src/images/dedulya.png"
import Image from "next/image";

import slide1 from "../../src/images/Slide1.png"
import slide2 from "../../src/images/Slide2.png"
import slide3 from "../../src/images/Slide3.png"
import slide4 from "../../src/images/Slide4.png"
import slide5 from "../../src/images/Slide5.png"
import slide6 from "../../src/images/Slide6.png"

export default function Page() {

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image.src})`,
          height: '100vh',
          width: '99vw',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-[white] font-[600] flex justify-center gap-[100px] p-[40px]">
          <p>Collections</p>
          <p>Products</p>
          <p>Inspiration</p>
          <p>About us</p>
          <p>Find a dealer</p>
          <select className="relative bottom-[10px] px-4 py-2 text-base rounded-lg border-2 border-gray-500 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-600 cursor-pointer">
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>

        </div>
        <h1 className="text-[white] text-[40px] flex justify-center mt-[130px]">Lasting memories</h1>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <div className="p-[40px]">
        <div className="flex justify-center gap-[40px] mb-[50px]">
          <h1 className="w-[20%] text-[30px] font-[700] text-center">Joli manages to offer designs that are both timelessly modern and trendy</h1>
        </div>
        <button className="border p-[10px_15px] rounded-[50%] w-[fit-content] ml-[48%] mb-[50px]">About Us</button>
      </div>
      <Section6 />
      <Image src={ded.src} alt="..." width={500} height={500} />

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="swiper"
      >
        <SwiperSlide style={{ height: "400px" }}><Image width={350} height={200} src={slide1.src} alt='' /></SwiperSlide>
        <SwiperSlide style={{ height: "400px" }}><Image width={350} height={200} src={slide2.src} alt='' /></SwiperSlide>
        <SwiperSlide style={{ height: "400px" }}><Image width={350} height={200} src={slide4.src} alt='' /></SwiperSlide>
        <SwiperSlide style={{ height: "400px" }}><Image width={350} height={200} src={slide5.src} alt='' /></SwiperSlide>
        <SwiperSlide style={{ height: "400px" }}><Image width={350} height={200} src={slide6.src} alt='' /></SwiperSlide>
      </Swiper>

      <Footer />
    </>
  )
}
