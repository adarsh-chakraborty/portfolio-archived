const chars = {
  fullScreen: {
    enable: false,
    zIndex: 10
  },
  particles: {
    number: {
      value: 180,
      density: {
        enable: true
      }
    },
    color: {
      value: '#064E3B'
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
      color: '#2E7D32'
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
      color: '#2E7D32',
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
};

const star = {
  fullScreen: {
    enable: false,
    zIndex: 10
  },
  particles: {
    number: {
      value: 10
    },
    color: {
      value: '#1CA750'
    },
    shape: {
      type: 'star',
      options: {
        sides: 5
      }
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    rotate: {
      value: 0,
      random: true,
      direction: 'clockwise',
      animation: {
        enable: true,
        speed: 5,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 600,
      color: '#1CA750',
      opacity: 0.4,
      width: 2
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
        mode: ['grab']
      },
      onclick: {
        enable: false,
        mode: 'bubble'
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
        opacity: 8,
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
};

const idk1 = {
  fullScreen: {
    enable: false,
    zIndex: 10
  },
  fpsLimit: 120,
  particles: {
    number: {
      value: 120,
      density: {
        enable: true
      }
    },
    color: {
      value: '#1CA750'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#1CA750',
      warp: true,
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      warp: true,
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
        enable: false,
        mode: 'repulse'
      },
      onclick: {
        enable: false,
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
};

const idk2 = {
  fullScreen: {
    enable: false,
    zIndex: 10
  },
  particles: {
    number: {
      value: 180,
      density: {
        enable: true
      }
    },
    color: {
      value: '#1CA750'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#1CA750',
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
        enable: false,
        mode: 'repulse'
      },
      onclick: {
        enable: false,
        mode: 'push'
      },
      ondiv: {
        enable: true,
        elementId: 'repulse-div',
        mode: 'repulse'
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
};

const idk3 = {
  fullScreen: {
    enable: false,
    zIndex: 10
  },
  fpsLimit: 120,
  particles: {
    number: {
      value: 140,
      density: {
        enable: true
      }
    },
    color: {
      value: '#1CA750'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: true,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#1CA750',
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
        mode: 'grab',
        parallax: {
          enable: true,
          smooth: 10,
          force: 60
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
};

const configs = [chars, star, idk1, idk2, idk3];

export default configs;
