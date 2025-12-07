import React from 'react';
import serviceImg from '../../../assets/service.png'

const OurServices = () => {
    return (
        <div className='bg-secondary mt-20 rounded-2xl p-20'>
            <div className='text-center text-white'>
                <h1 className='font-extrabold text-[40px]'>Our Services</h1>
                <p className='font-medium text-[16px] text-[#DADADA]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>

                <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='bg-white p-5 w-fit rounded-2xl'>
                    <div className='flex flex-col items-center'>
                        <img className='h-[40px] w-[40px]' src={serviceImg} alt="" />
                        <div>
                            <h1 className='text-secondary pt-4 font-bold text-[24px]'>Express  & Standard Delivery</h1>
                            <p className='text-[#606060] pt-2 font-medium text-[16px]'>We deliver parcels within 24–72 hours in Dhaka, <br /> Chittagong, Sylhet, Khulna, and Rajshahi. <br /> Express delivery available in Dhaka within 4–6 <br /> hours from pick-up to drop-off.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-5 w-fit rounded-2xl'>
                    <div className='flex flex-col items-center'>
                        <img className='h-[40px] w-[40px]' src={serviceImg} alt="" />
                        <div>
                            <h1 className='text-secondary pt-4 font-bold text-[24px]'>Nationwide Delivery</h1>
                            <p className='text-[#606060] pt-2 font-medium text-[16px]'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-5 w-fit rounded-2xl'>
                    <div className='flex flex-col items-center'>
                        <img className='h-[40px] w-[40px]' src={serviceImg} alt="" />
                        <div>
                            <h1 className='text-secondary pt-4 font-bold text-[24px]'>Fulfillment Solution</h1>
                            <p className='text-[#606060] pt-2 font-medium text-[16px]'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-5 w-fit rounded-2xl'>
                    <div className='flex flex-col items-center'>
                        <img className='h-[40px] w-[40px]' src={serviceImg} alt="" />
                        <div>
                            <h1 className='text-secondary pt-4 font-bold text-[24px]'>Cash on Home Delivery</h1>
                            <p className='text-[#606060] pt-2 font-medium text-[16px]'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-5 w-fit rounded-2xl'>
                    <div className='flex flex-col items-center'>
                        <img className='h-[40px] w-[40px]' src={serviceImg} alt="" />
                        <div>
                            <h1 className='text-secondary pt-4 font-bold text-[24px]'>Corporate Service / Contract In Logistics</h1>
                            <p className='text-[#606060] pt-2 font-medium text-[16px]'>Customized corporate services which includes warehouse and inventory management support.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-5 w-fit rounded-2xl'>
                    <div className='flex flex-col items-center'>
                        <img className='h-[40px] w-[40px]' src={serviceImg} alt="" />
                        <div>
                            <h1 className='text-secondary pt-4 font-bold text-[24px]'>Parcel Return</h1>
                            <p className='text-[#606060] pt-2 font-medium text-[16px]'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default OurServices;