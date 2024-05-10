import * as React from 'react';
import TeamCard from '../../Elements/team/TeamCard';
import {Grid, useMediaQuery} from '@mui/material';
import team1 from '../../assets/images/team-1.jpg';
import team2 from '../../assets/images/team-2.jpg';
import team3 from '../../assets/images/team-3.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './team.scss'
import Headings from "../../Elements/common/Headings";

export default function Team() {
  const sm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const md = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));

  return (
    <section className="our-team">
      <Grid container spacing={0} justifyContent="center">
        <Grid item md={12}>
          <Headings heading="MEMBERS" subheading="OUR TEAM" arrows/>
        </Grid>
      </Grid>
      <Grid container spacing={0} justifyContent="center" sx={{
        backgroundImage: 'linear-gradient(180deg, transparent, #10478a)',
        padding: '0 50px 80px'}}>
        <Grid item md={12} sx={{ minHeight: '245px', maxWidth: '100%' }}>
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={sm ? 1 : md ? 2 :3}
            slidesToScroll={sm ? 1 : md ? 2 :3}>
            <TeamCard image={team1} heading="LUKY TOURTON" tagline="Creative Director" />
            <TeamCard image={team2} heading="HELENA" tagline="Creative Director" />
            <TeamCard image={team3} heading="jeff weise" tagline="Creative Director" />
          </Slider>
        </Grid>
      </Grid>
    </section>
  );
}
