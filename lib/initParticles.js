import Particles from "particlesjs";

export default () => {
  Particles.init({
    selector: "#particlesjs",
    color: ["#eeeeee"],
    connectParticles: true,
    maxParticles: 150,
    minDistance: 125,
    sizeVariations: 6,
    speed: 0.25,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 100
        }
      },
      {
        breakpoint: 375,
        options: {
          maxParticles: 50
        }
      }
    ]
  });
};
