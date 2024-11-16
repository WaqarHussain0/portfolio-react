import Row from "./common/Row";
import { TbPoint } from "react-icons/tb";
import { PiDiamondsFourFill } from "react-icons/pi";
import SubHeading from "./common/heading/SubHeading";
import Heading from "./common/heading";
import AnimatedIcon from "./AnimatedIcon";
import Description from "./common/heading/Description";
import { useEffect, useState } from "react";
import ServicesData from "../data/serviceData";

interface IServicePoint {
  category: string;
  heading: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  points: string[];
}

const Service: React.FC = () => {
  const [servicesData, setServicesData] = useState<IServicePoint[]>([]);

  useEffect(() => {
    setServicesData(ServicesData);
  }, [servicesData]);

  return (
    <Row id="service" className="w-full justify-center py-4 bg-[#e1ebed]">
      <Row className="px-2 md:px-0 w-full md:w-[90%] flex-col justify-between items-center gap-4">
        <Row className="items-center gap-3 text-[#291c3a]">
          <AnimatedIcon Icon={PiDiamondsFourFill} />

          <Heading title="Services I Offer" />
        </Row>

        <Row className="w-full flex-wrap justify-between">
          {servicesData.map((service, index) => (
            <Row
              key={index}
              className="flex-col gap-2 shadow-md border items-center rounded-md w-full md:w-[32%] bg-white mb-3 md:mb-4 p-6"
            >
              <Row className="w-full items-center justify-between">
                <SubHeading title={service.heading} />

                <div className="bg-[#291c3a] shadow-sm flex w-[35px] h-[35px] md:w-[50px] md:h-[50px] justify-center items-center rounded-full">
                  <service.icon className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] object-contain text-[#8121d0]" />
                </div>
              </Row>

              {service.points.map((point, idx) => (
                <Row key={idx} className="items-center w-full">
                  <TbPoint size={25} className="text-[#291c3a]" />

                  <Description title={point} />
                </Row>
              ))}
            </Row>
          ))}
        </Row>
      </Row>
    </Row>
  );
};

export default Service;
