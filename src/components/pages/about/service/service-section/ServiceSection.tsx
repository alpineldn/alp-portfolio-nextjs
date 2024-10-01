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
        'py-section md:py-section-lg',
        isEven ? 'bg-dark' : 'bg-darkGray', // Background color changes based on the even/odd index
      )}
    >
      {/* Inner container to organize the layout of the section */}
      {/* The layout alternates between 'flex-row' and 'flex-col-reverse' based on whether the section is even or odd */}
      <div
        className={cn(
          'container mx-auto flex gap-7 xl:gap-16', // Common layout classes for all sections
          isEven
            ? 'flex-row justify-start max-md:flex-col' // For even sections, content is aligned to the start, layout in row
            : 'flex-row justify-end max-md:flex-col-reverse', // For odd sections, content is aligned to the end, reversed layout for mobile
        )}
      >
        {/* Left-aligned content: Description for even sections, ServiceList for odd sections */}
        {isEven ? (
          <Description index={index} title={title} description={description} />
        ) : (
          <ServiceList items={items} />
        )}

        {/* Spacer: A div that helps space out the layout between the left and right columns */}
        {/* The grid columns span different numbers of columns depending on screen size (md, 2xl) */}
        <div className="md:col-span-1 2xl:col-span-2" />

        {/* Right-aligned content: ServiceList for even sections, Description for odd sections */}
        {isEven ? (
          <ServiceList items={items} />
        ) : (
          <Description index={index} title={title} description={description} />
        )}
      </div>
    </div>
  );
};
export default ServiceSection;
