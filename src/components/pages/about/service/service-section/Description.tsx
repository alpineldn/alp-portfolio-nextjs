import FadeInAndSlideUpOnViewAnimation from '@/components/common/animations/FadeInAndSlideUpOnViewAnimation';

interface DescriptionProps {
  index: number;
  title: string;
  description: string;
}

const Description: React.FC<DescriptionProps> = ({
  description,
  index,
  title,
}) => {
  return (
    <div className="space-y-8">
      {/* <FadeInAndSlideUpOnViewAnimation initial={{ y: 65 }} delay={index * 0.02}> */}
      <h3 className="text-m">
        <span className="text-m text-gray">{index + 1}.</span> {title}
      </h3>
      {/* </FadeInAndSlideUpOnViewAnimation> */}
      {/* <FadeInAndSlideUpOnViewAnimation initial={{ y: 65 }} delay={0.1}> */}
      <p className="text-s">{description}</p>
      {/* </FadeInAndSlideUpOnViewAnimation> */}
    </div>
  );
};

export default Description;
