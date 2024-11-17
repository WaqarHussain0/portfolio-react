import React from "react";

interface AnimatedIconProps {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  className?: string;
  animateIcon?: boolean;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  Icon,
  className,
  animateIcon = true,
}) => {
  return (
    <Icon
      className={`text-[#8121d0] w-[15px] h-[15px] md:w-[25px] md:h-[25px] ${
        animateIcon ? "animate-bounce" : ""
      } ${className}`}
    />
  );
};

export default AnimatedIcon;
