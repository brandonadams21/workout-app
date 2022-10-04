import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

// import HeroBannerImage from '../assets/images/banner.jpeg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Welcome to B-Fit</Typography>
    <Typography fontWeight={700} sx={{ color:"black", fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Hustle. Grind. <br />
      Execute.
    </Typography>
    <Typography color="black" fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Explore ways to make the gym experience easier
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="red" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Don't Quit
    </Typography>
    {/* <img src={HeroBannerImage} style={{ borderRadius: '10%', marginTop: '-200px', height: '99%'}} alt="hero-banner" className="hero-banner-img" /> */}
  </Box>
);

export default HeroBanner;
