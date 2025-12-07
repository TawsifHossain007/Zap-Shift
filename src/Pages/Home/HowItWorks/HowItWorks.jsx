import React from 'react';
import { FaTruckFast } from 'react-icons/fa6';

const HowItWorks = () => {
    return (
        <div>
            <h1 className='font-extrabold text-[32px] mt-20'>How It Works</h1>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-4'>
                <div className='p-5 bg-white w-fit rounded-2xl'>
                    <FaTruckFast size={35}></FaTruckFast>
                    <h1 className='pt-2 font-bold text-[20px]'>Booking Pick & Drop</h1>
                    <p className='pt-2 text-[#606060]'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                </div>
                <div className='p-5 bg-white w-fit rounded-2xl'>
                    <FaTruckFast size={35}></FaTruckFast>
                    <h1 className='pt-2 font-bold text-[20px]'>Cash On Delivery</h1>
                    <p className='pt-2 text-[#606060]'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                </div>
                <div className='p-5 bg-white w-fit rounded-2xl'>
                    <FaTruckFast size={35}></FaTruckFast>
                    <h1 className='pt-2 font-bold text-[20px]'>Delivery Hub</h1>
                    <p className='pt-2 text-[#606060]'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                </div>
                <div className='p-5 bg-white w-fit rounded-2xl'>
                    <FaTruckFast size={35}></FaTruckFast>
                    <h1 className='pt-2 font-bold text-[20px]'>Booking SME & Corporate</h1>
                    <p className='pt-2 text-[#606060]'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;