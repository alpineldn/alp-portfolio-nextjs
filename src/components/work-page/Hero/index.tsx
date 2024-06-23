interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section>
      <div className="container mx-auto pt-[277px]">
        <h1 className="text-9xl font-normal leading-[1.2] text-black">
          Creating next level digital products
        </h1>
      </div>
    </section>
  );
};
export default Hero;
