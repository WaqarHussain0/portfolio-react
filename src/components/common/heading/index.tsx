interface IHeading {
  title: string;
}

const Heading: React.FC<IHeading> = ({ title }) => {
  return (
    <h2 className="cotoris font-semibold capitalize text-[26px] md:text-[36px] border-b-2 border-[#8121d0] text-start">
      {title}
    </h2>
  );
};

export default Heading;
