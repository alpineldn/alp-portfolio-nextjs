'use client';
import React from 'react';

interface ProjectProps {
  index: number;
  title: string;
  manageModal: (state: boolean, index: number, x: number, y: number) => void;
}

const Project: React.FC<ProjectProps> = ({ index, manageModal, title }) => {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="group flex w-full cursor-pointer items-center justify-between border-t border-solid border-t-[rgb(201,201,201)] py-[50px] transition-all duration-200 last:border-b last:border-b-[rgb(201,201,201)] hover:opacity-50"
    >
      <h2 className="m-0 text-[60px] font-normal transition-all duration-[0.4s] group-hover:translate-x-[-10px]">
        {title}
      </h2>
      <p className="transition-all duration-300 group-hover:translate-x-[10px]">
        Design & Development
      </p>
    </div>
  );
};

export default Project;
