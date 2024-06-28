interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section>
      <div className="container mx-auto pt-[200px] md:pt-[277px]">
        <h1 className="max-w-5xl text-[clamp(3.5rem,5.5vw+1rem,7.5rem)] font-normal leading-[1.2] tracking-tighter text-black">
          Creating next level digital products
        </h1>
      </div>
    </section>
  );
};
export default Hero;
