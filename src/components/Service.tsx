import { PiDiamondsFourFill } from "react-icons/pi";

import ServicesData from "../assets/data/service.data";

import Row from "./common/Row";
import Heading from "./common/heading";
import AnimatedIcon from "./common/AnimatedIcon";
import ServiceCard from "./common/card/Service.card";

export interface IServicePoint {
  heading: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  points: string[];
}

const Service: React.FC = () => {
  return (
    <Row id="service" className="w-full justify-center mt-2  bg-[#e1ebed]">
      <Row className="px-2 md:px-0 w-[98%] md:w-[90%] flex-col justify-between items-center gap-4">
        <Row className="items-center gap-3 text-[#291c3a]">
          <AnimatedIcon Icon={PiDiamondsFourFill} />

          <Heading title="Services I Offer" />
        </Row>

        <Row className="w-full flex-wrap justify-between">
          {ServicesData.map((service, index) => (
            <ServiceCard
              key={index}
              heading={service.heading}
              icon={service.icon}
              points={service.points}
            />
          ))}
        </Row>
      </Row>
    </Row>
  );
};

export default Service;
