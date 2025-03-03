import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroCards from '../components/HeroCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
import JobListing from '../components/JobListing';

const Homepage = () => {
  return (
   <>
   <Hero  title = 'Become a React Dev' subtitle = ' Find the best that fits your skills and talent' />
   <HeroCards/>
   <JobListings isHome = 'true' />
   <ViewAllJobs/>
   </>
     
  )
}

export default Homepage
