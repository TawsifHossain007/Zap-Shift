import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurService/OurServices';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import Features from '../Features/Features';
import Merchant from '../Merchant/Merchant';
import FAQ from '../FAQ/FAQ';

const reviewPromise = fetch('/reviews.json').then(res => res.json())

const Home = () => {

    return (
        <div className='space-y-20'>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <OurServices></OurServices>
           <Brands></Brands>
           <Features></Features>
           <Merchant></Merchant>
           <Reviews reviewPromise={reviewPromise}></Reviews>
           <FAQ></FAQ>
        </div>
    );
};

export default Home;