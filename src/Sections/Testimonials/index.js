import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";


const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;



const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (

    <Section id="tes">
      
    
      <Title>From product design to software continuous develivery</Title>

      <Carousal>
        <Slider {...settings}>
          
          <Card
            name="Website development"
            text="High-perfomance website to reach out more your potential customers."
            
            image="script2"
          />

          <Card
            text="To accelerate your busniess process"
            name="Mobile apps development"
            image="mobile2"
          />

          <Card
            text="Complete digital product creations from UX prototyping to final UI designs."
            name="Digital product design "
            image="disen2"
          />

          <Card
            text="Make sure your digital environment keep online and updated."
            name="Maintenance"
            image="disen3"
          />

          
<Card
            text="You can update website content yourself."
            name="CMS development"
            image="disen4"
          />

          
<Card
            text="Simplify the payment system with just one step."
            name="Integrated payment gateway"
            image="disen5"
          />
        </Slider>
        
      </Carousal>
    </Section>
  );
};

export default Testimonials;
