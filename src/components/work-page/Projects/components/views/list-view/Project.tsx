import React from 'react';

interface ProjectProps {
  index: number;
  title: string;
  src: string;
  color: string;
  year: string;
  location: string;
  service: string;
  manageModal: (state: boolean, index: number, x: number, y: number) => void;
}

const Project: React.FC<ProjectProps> = ({
  index,
  manageModal,
  title,
  color,
  service,
  src,
  year,
  location,
}) => {
  return (
    <tr
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="group w-full cursor-pointer border-t border-solid border-t-[rgb(201,201,201)] transition-all duration-200 last:border-b last:border-b-[rgb(201,201,201)] hover:opacity-50"
    >
      <td className="py-[50px] pl-[100px] text-5xl font-normal transition-all duration-[0.4s] group-hover:translate-x-[-10px]">
        {title}
      </td>
      <td className="py-[50px] text-lg transition-all duration-300 group-hover:translate-x-[10px]">
        {location}
      </td>
      <td className="py-[50px] text-lg transition-all duration-300 group-hover:translate-x-[10px]">
        {service}
      </td>
      <td className="py-[50px] pr-[100px] text-lg transition-all duration-300 group-hover:translate-x-[10px]">
        {year}
      </td>
    </tr>
  );
};

export default Project;
