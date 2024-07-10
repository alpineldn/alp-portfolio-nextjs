interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section className="min-h-screen pt-[9.88rem] md:pt-[11.75rem] xl:pt-[12.75rem]">
      <div className="flex flex-col gap-[5.62rem] max-lg:px-5 sm:gap-[7rem] lg:gap-[9rem] lg:px-[8vw]">
        <h1 className="h1 lg:max-w-7xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>

        <h3 className="h4 ml-auto max-w-[45rem]">
          Focusing on core areas, we combine our creative and technical skills
          to uncover brand’s essences.
        </h3>
      </div>
    </section>
  );
};

export default Hero;
