import React from "react";

export interface RocketIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const RocketIcon: React.FC<RocketIconProps> = ({
                                                        size = 24,
                                                        ...props
                                                      }) => {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 256 256"
          fill="none"
          {...props}
      >
        <path
            d="M156 20C116 32 84 64 72 104L52 124C44 132 40 144 40 156V188C40 194.6 45.4 200 52 200H84C96 200 108 196 116 188L136 168C176 156 208 124 220 84C224 68 224 48 220 20C192 16 172 16 156 20Z"
            fill="currentColor"
        />
        
        <path
            d="M168 88C168 101.255 157.255 112 144 112C130.745 112 120 101.255 120 88C120 74.7452 130.745 64 144 64C157.255 64 168 74.7452 168 88Z"
            fill="white"
        />
        
        <path
            d="M88 168L64 192"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
        />
        
        <path
            d="M100 204C100 176 80 156 52 156C52 184 72 204 100 204Z"
            fill="#FF6B35"
        />
        
        <path
            d="M188 56L200 68"
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
        />
      </svg>
  );
};

export default RocketIcon;