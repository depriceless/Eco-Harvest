import React from 'react';
import Header from '../Header';
import HeroSection from '../HeroSection';
import OurProducts from '../OurProducts';
import WhyChooseUs from '../WhyChooseUs';
import StatsSection from '../StatsSection';
import MissionVision from '../MissionVision';
import Testimonials from '../Testimonials';
import VideoTestimonial from '../VideoTestimonial';
import LandingPictures from '../LandingPictures';
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <OurProducts />
      <WhyChooseUs />
      <StatsSection />
      <VideoTestimonial />
      <LandingPictures />
      {/* Ensure MissionVision and Testimonials are imported correctly */}
      <MissionVision />
      <Testimonials />
    </>
  );
}
