interface ISubHeading {
  title: string;
  className?: string;
}

const SubHeading: React.FC<ISubHeading> = ({ title, className }) => {
  return (
    <h2
      className={`poppins text-[14px] md:text-[18px] lg:text-[20px] font-medium line-clamp-1   ${className}`}
    >
      {title}
    </h2>
  );
};

export default SubHeading;
