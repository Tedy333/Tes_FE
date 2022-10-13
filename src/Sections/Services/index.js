import gsap from "gsap";
import { useEffect, useRef } from "react";
import Facebook from "../../assets/aws21.png";
import LinkedId from "../../assets/css3.png";
import Twitter from "../../assets/html5.png";
import php from "../../assets/php.png";
import js from "../../assets/js.png";
import vue from "../../assets/vue.png";
import reacrt from "../../assets/reacrt.png";
import piton from "../../assets/piton.png";
import mysql from "../../assets/mysql.png";
import pos from "../../assets/pos.png";
import server from "../../assets/server.png";
import ruby from "../../assets/ruby.png";
import angka_serebu from "../../assets/1000.png";
import tigaPuluh from "../../assets/30.png";
import limaPuluh from "../../assets/51.png";
import styled from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tube from "../../assets/3dtube.png";
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";

import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";

// const TextBlock = lazy(() => import("../../components/TextBlock"));
// const SvgBlock = lazy(() => import("../../components/SvgBlock"));

// const move = keyframes`
// 0% { transform: translateY(-5px)         }
//     50% { transform: translateY(10px) translateX(10px)        }
//     100% { transform: translateY(-5px)         }
// `;


const ServiceSection = styled.section`
  width: 100vw;
  /* background-color: #0a0b10; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  z-index: -1;
  background-color: #0a0b10;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
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
    border-bottom: 2px solid var(--pink);
  }
`;

const Title1 = styled.h1`
  color: yellow;
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
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
    
  }
`;

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  /* margin-bottom: 10rem; */
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /* z-index: 1; */

  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 8rem;
    }
    img {
      width: 5rem;
      height: 5rem;
    }
  }
`;


const Icons3 = styled.div`
  display: flex;
  margin-bottom: 6rem;
  
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 8rem;
    }
    img {
      width: 5rem;
      height: 5rem;
    }
  }
`;

const Icons2 = styled.div`
  display: flex;
  margin-bottom: 1 rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 14rem;
    }
    img {
      width: 14rem;
      height: 8rem;
    }
  }
`;

const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const element = ref.current;
    ////
    const mq = window.matchMedia("(max-width: 48em)");
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),

        start: "top top+=180",

        end: "bottom bottom",

        pin: element,
        pinReparent: true,
      },
    });
    t1.fromTo(
      document.getElementById("line"),

      {
        height: "15rem",
      },
      {
        height: "3rem",
        duration: 2,
        scrollTrigger: {
          trigger: document.getElementById("line"),
          start: "top top+=200",
          end: "bottom top+=220",
          scrub: true,
        },
      }
    );

    revealRefs.current.forEach((el, index) => {
      // console.log(el.childNodes);
      if (mq.matches) {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=200",
              end: "bottom bottom-=100",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=300",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      } else {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=200",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  return (
    <ServiceSection id="services">
      <Background ref={ref} >
        <Title className="title">The software that we build takes our clients to the next level</Title>
        <Line id="line" />
         <Triangle id="triangle" /> 
      </Background>

      <Content  >
        <TextBlock
          topic="Mobile App"
          title={<h1>ILIOS app (B2B E-commerce)</h1>}
          subText={
            <h5>
              Has a unique selling point where not all companies offer aplication for sales, data collecttion and
              management.
            </h5>
          }
        />
        <OBJ>
          <img src={Tube} alt="Tube Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="mobile1.png" />
      </Content>
      <Content >
        <TextBlock
          topic="Website develoment"
          title={<h1>Home and Living</h1>}
          subText={
            <h5>
              Albatech helps in creating a website catalog to show
              brand identiy and infromation in accordance with vision and mission of 
              home and living.
            </h5>
          }
        />
        <OBJ>
          <img src={Cone} alt="Cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="web2.png" />
      </Content>

      <Content>
        <TextBlock
          topic="Website development "
          title={<h1>HIPPO</h1>}
          subText={
            <h5>
              Albatch help to create e-commerce and company and 
              profile for Hippo's Website with realtime transaction and integration 
              with Payment Gateway to accept multi Payment.
            </h5>
          }
        />
        <OBJ>
          <img src={Capsule} alt="Capsule Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="web11.png" />
       </Content>

      <Content>
      <section>
    <Icons>
  <a href="">
    {" "}
    <img src={Facebook} alt="Facebook" />
  </a>
  <a href="">
    <img src={LinkedId} alt="LinkedId" />
  </a>
  <a href="">
    <img src={Twitter} alt="Twitter" />
  </a>
  <a href="">
    <img src={php} alt="php" />
  </a>
  <a href="">
    <img src={pos} alt="pos" />
  </a>
    <a href="">
    <img src={piton} alt="piton" />
  </a>
  </Icons>

<Icons3>
<a href="">
    <img src={mysql} alt="mysql" />
  </a>
<a href="">
    <img src={reacrt} alt="reacrt" />
  </a>
  <a href="">
    <img src={js} alt="js" />
  </a>
  <a href="">
    <img src={ruby} alt="ruby" />
  </a>
  <a href="">
    <img src={server} alt="server" />
  </a>
  <a href="">
    <img src={vue} alt="vue" />
  </a>
  </Icons3>
  
<center><Title1 className="title">Our Progress Comes with a Collaboration Between Creativity, Ideas, 
and Tecnology</Title1></center>

<Icons2>
<a href="">
    <img src={angka_serebu} alt="angka_serebu" />
  </a>

  <a href="">
    <img src={tigaPuluh} alt="tigaPuluh" />
  </a>

  <a href="">
    <img src={limaPuluh} alt="limaPuluh" />
  </a>
  </Icons2>

  

        
</section>
</Content>
    </ServiceSection>
    
  );

};

export default Services;
