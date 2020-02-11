import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";

const ParticleContainer = styled.div`
  position: relative;
`

const AboutStyled = styled.ul`
  width: 100%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 45%;
`
const AboutLiStyled = styled.li`
    display: flex;
    justify-content: center;
    color: white;
`

const Particle = () => (
  <ParticleContainer>
    <Particles 
        width="100%"
        height="100vh" 
        params={{
        "particles": {
          "number": {
            "value": 150,
            "density": {
              "enable": true,
              "value_area": 868.0624057955
            }
          },
          "color": {
            "value": "#ecd018"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#e2d018",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": false
          },
          "modes": {
            "grab": {
              "distance": 200,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }}
      style={{
        "backgroundColor":"#000000",
        "position":"static",
        "zIndex":"-1 !important",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%"
      }}
    />
  <AboutStyled>
    <AboutLiStyled>
      <h2>Nazywam się Filip Łasica</h2>
    </AboutLiStyled>
    <AboutLiStyled>
        <h5>Jestem Front-end developerem</h5>
    </AboutLiStyled>

  </AboutStyled>


  </ParticleContainer>
);

export default Particle;