import Image from 'next/image'
import React from 'react'
import images from "../../../src/images/image2.jpg"

const Section1 = () => {
    return (
        <div>
            <div className="flex justify-center gap-[200px] p-[30px] items-center">
                <div className="w-[30%]">
                    <h2 className='text-[35px] mb-[50px]'>Making <br /> tables <br /> heroes</h2>
                    <p>Chairs, cabinets, but especially tables by Joli are durable products, designed to last and to be used intensively.</p>
                    <button className='border rounded-[50%] p-[5px_10px] mr-[10px] mt-[20px]'>About</button>
                    <button>Collections</button>
                </div>
                <Image src={images.src} alt='...' width={500} height={300} />
            </div>
        </div>
    )
}

export default Section1
