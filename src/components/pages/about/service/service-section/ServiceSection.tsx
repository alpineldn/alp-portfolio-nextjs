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
    // Set a min-height to ensure all sections have the same height
    <div
      className={cn(
        'flex h-full min-h-[300px] flex-col py-4', // Adjust min-height as needed
        //isEven ? 'bg-dark' : 'bg-darkGray' // Background color changes based on the even/odd index
      )}
    >
      {/* Inner container to organize the layout of the section */}
      <div className="flex flex-grow flex-col">
        {/* Use flex-grow to make the description take available space */}
        <Description index={index} title={title} description={description} />
        <div className="flex-grow" />
        {/* This empty div pushes the ServiceList to the bottom */}
      </div>
      <ServiceList items={items} />
      {/* Positioned at the bottom of the section */}
    </div>
  );
};

export default ServiceSection;
