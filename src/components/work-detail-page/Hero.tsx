'use client';

interface HeroProps {
  project: unknown;
}

const Hero: React.FC<HeroProps> = ({ project }) => {
  console.log(project);

  return <div></div>;
};
export default Hero;
