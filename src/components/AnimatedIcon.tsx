import React from "react";

interface AnimatedIconProps {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  iconSize?: number;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ Icon, iconSize }) => {
  return (
    <Icon size={iconSize || 25} className="animate-bounce text-[#8121d0]" />
  );
};

export default AnimatedIcon;
