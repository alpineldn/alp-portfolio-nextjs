interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section>
      <div className="container mx-auto pt-[277px]">
        <h1 className="max-w-5xl text-[117px] font-normal leading-[1.2] tracking-tighter text-black">
          Creating next level digital products
        </h1>
      </div>
    </section>
  );
};
export default Hero;
