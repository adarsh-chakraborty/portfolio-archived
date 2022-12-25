import React from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import './Particle.css';

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 10
        },
        particles: {
          number: {
            value: 200,
            density: {
              enable: true
            }
          },
          color: {
            value: '#1CA74F'
          },
          shape: {
            type: 'char',
            character: {
              value: [
                'a',
                'd',
                'a',
                'r',
                's',
                'h',
                'c',
                'h',
                'a',
                'k',
                'r',
                'a',
                'b',
                'o',
                'r',
                't',
                'y'
              ],
              font: 'Verdana',
              style: '',
              weight: '400',
              fill: true
            }
          },
          stroke: {
            width: 1,
            color: '#ffffff'
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 16,
            random: false,
            anim: {
              enable: false,
              speed: 10,
              size_min: 10,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#1CA74F',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
              parallax: {
                enable: false,
                force: 60,
                smooth: 10
              }
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
              speed: 3
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        background: {
          color: '',
          image: '',
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover'
        }
      }}
    />
  );
};

export default Particle;
