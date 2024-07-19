import React from "react";
import IconProps from "@/types/Icon";

const ServiceIcon: React.FC<IconProps> = ({ isActive }) => {
  const fillColor = isActive ? "#C80909" : "#ADADAD"; // Warna aktif dan tidak aktif

  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="vuesax/bold/link-square">
        <g id="link-square">
          <path
            id="Vector"
            d="M16.19 2.5H7.81C4.17 2.5 2 4.67 2 8.31V16.68C2 20.33 4.17 22.5 7.81 22.5H16.18C19.82 22.5 21.99 20.33 21.99 16.69V8.31C22 4.67 19.83 2.5 16.19 2.5ZM8.18 17.27C8.16 17.27 8.13 17.27 8.11 17.27C7.14 17.18 6.23 16.73 5.55 16.01C3.95 14.33 3.95 11.6 5.55 9.92L7.74 7.62C8.52 6.8 9.57 6.34 10.69 6.34C11.81 6.34 12.86 6.79 13.64 7.62C15.24 9.3 15.24 12.03 13.64 13.71L12.55 14.86C12.26 15.16 11.79 15.17 11.49 14.89C11.19 14.6 11.18 14.13 11.46 13.83L12.55 12.68C13.61 11.57 13.61 9.76 12.55 8.66C11.56 7.62 9.82 7.62 8.82 8.66L6.63 10.96C5.57 12.07 5.57 13.88 6.63 14.98C7.06 15.44 7.64 15.72 8.25 15.78C8.66 15.82 8.96 16.19 8.92 16.6C8.89 16.98 8.56 17.27 8.18 17.27ZM18.45 15.09L16.26 17.39C15.48 18.21 14.43 18.67 13.31 18.67C12.19 18.67 11.14 18.22 10.36 17.39C8.76 15.71 8.76 12.98 10.36 11.3L11.45 10.15C11.74 9.85 12.21 9.84 12.51 10.12C12.81 10.41 12.82 10.88 12.54 11.18L11.45 12.33C10.39 13.44 10.39 15.25 11.45 16.35C12.44 17.39 14.18 17.4 15.18 16.35L17.37 14.05C18.43 12.94 18.43 11.13 17.37 10.03C16.94 9.57 16.36 9.29 15.75 9.23C15.34 9.19 15.04 8.82 15.08 8.41C15.12 8 15.48 7.69 15.9 7.74C16.87 7.84 17.78 8.28 18.46 9C20.05 10.67 20.05 13.41 18.45 15.09Z"
            fill={fillColor}
          />
        </g>
      </g>
    </svg>
  );
};

export default ServiceIcon;