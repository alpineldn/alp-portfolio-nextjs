import cn from '@/utils/cn';

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
    <div className={cn('col-span-6 space-y-8')}>
      <h3 className="heading-xl">
        <span className="text-gray">{index + 1}.</span> {title}
      </h3>
      <p className="heading-m">{description}</p>
    </div>
  );
};

export default Description;
