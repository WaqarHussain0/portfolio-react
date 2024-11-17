import { IServicePoint } from "../../Service";
import { TbPoint } from "react-icons/tb";

import Row from "../Row";
import Description from "../heading/Description";
import SubHeading from "../heading/SubHeading";

const ServiceCard: React.FC<IServicePoint> = ({
  heading,
  icon: Icon,
  points,
}) => {
  return (
    <Row className="flex-col gap-2 shadow-md border items-center rounded-md w-full lg:w-[33%] bg-white mb-3 md:mb-4 p-4 md:p-6 ">
      <Row className="w-full items-center justify-between">
        <SubHeading title={heading}  className="line-clamp-2"/>

        <div className="bg-[#291c3a] shadow-sm flex w-[35px] h-[35px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px] justify-center items-center rounded-full">
          <Icon className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] object-contain text-[#8121d0]" />
        </div>
      </Row>

      {points.map((point, idx) => (
        <Row key={idx} className="items-center w-full">
          <TbPoint size={25} className="text-[#291c3a]" />

          <Description title={point} className="line-clamp-2 text-start" />
        </Row>
      ))}
    </Row>
  );
};

export default ServiceCard;
