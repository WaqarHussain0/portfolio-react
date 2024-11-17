import AnimatedIcon from "../AnimatedIcon";

import Row from "../Row";

export interface IButton {
  title: string;
  className?: string;
  linkTo?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  anchorClassName?: string;
  handleOnClick?: () => void;
  iconClassName?: string;
  moveIcon?: boolean;
}

const IconButton: React.FC<IButton> = ({
  linkTo,
  title,
  className,
  icon: Icon,
  anchorClassName,
  handleOnClick,
  iconClassName,
  moveIcon,
}) => {
  return (
    <Row
      className={` cursor-pointer px-2 md:pl-6 md:pr-8 py-1 md:py-2 rounded-full items-center gap-1 md:gap-3  ${className}`}
    >
      <a
        href={linkTo}
        className={`poppinsRegular text-[11px] md:text-[18px] ${anchorClassName}`}
        onClick={handleOnClick}
      >
        {title}
      </a>

      <AnimatedIcon
        Icon={Icon}
        className={iconClassName}
        animateIcon={moveIcon}
      />
    </Row>
  );
};
export default IconButton;
