interface IDescription {
  title: string;
  className?: string;
}

const Description: React.FC<IDescription> = ({ title, className }) => {
  return (
    <p
      className={`line-clamp-1 poppinsRegular text-[14px] md:text-[16px] ${className}`}
    >
      {title}
    </p>
  );
};

export default Description;
