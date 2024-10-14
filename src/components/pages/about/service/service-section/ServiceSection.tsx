import cn from '@/utils/cn';
import Description from './Description';
import ServiceList from './ServiceList';
import { services } from '../data';

// This combines the structure of the first element of the 'services' array with additional props (index, isEven)
type ServiceSectionProps = (typeof services)[0] & {
  index: number;
  isEven: boolean;
};

const ServiceSection: React.FC<ServiceSectionProps> = ({
  description, // Description of the service (text about what the service entails)
  index, // The index of the current service in the services array
  isEven, // Boolean indicating whether the section should follow an "even" layout pattern
  items, // List of service items (features or sub-services)
  title, // Title of the service (e.g., "Brand Development")
}) => {
  return (
    // The outer container for the entire service section
    // Apply conditional classes using 'cn'. If the index is 0, apply a bottom padding; otherwise, use standard padding
    // Also, alternate the background color between 'bg-dark' and 'bg-darkGray' based on whether the section index is even
    <div
      className={cn(
        'service-container',
        //'flex gap-7 py-section md:py-section-lg xl:gap-16', //,
        //isEven ? 'bg-dark' : 'bg-darkGray', // Background color changes based on the even/odd index
      )}
    >
      {/* Inner container to organize the layout of the section */}
      {/* The layout alternates between 'flex-row' and 'flex-col-reverse' based on whether the section is even or odd */}
      <div
        className={cn(
          'service-inner flex w-full flex-col justify-between',
          //'container mx-auto flex gap-7 xl:gap-16', // Common layout classes for all sections
          // isEven
          //   ? 'flex-row justify-start max-md:flex-col' // For even sections, content is aligned to the start, layout in row
          //   : 'flex-row justify-start max-md:flex-col', // For odd sections, content is aligned to the end, reversed layout for mobile
        )}
      >
        <Description index={index} title={title} description={description} />
        <ServiceList items={items} />
      </div>
    </div>
  );
};
export default ServiceSection;
