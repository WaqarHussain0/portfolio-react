import { FC } from "react";

interface ButtonProps {
  btnTitle: string;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ btnTitle, onClick, className }) => {
  return (
    <button
      className={`bg-[#8121d0] py-2  text-white text-center rounded-full poppins text-[14px] md:text-[16px] ${className}`}
      onClick={onClick}
    >
      {btnTitle}
    </button>
  );
};

export default Button;
