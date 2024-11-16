interface ISubHeading {
  title: string;
  className?: string;
}

const SubHeading: React.FC<ISubHeading> = ({ title, className }) => {

  return (
    <h2 className={`poppins text-[18px] font-medium line-clamp-1 ${className}`}>
      {title}
    </h2>
  );
};

export default SubHeading;
