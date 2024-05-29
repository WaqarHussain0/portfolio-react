import Row from "./common/Row";

import { TbPoint } from "react-icons/tb";
import { DiReact } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa6";
import { PiDiamondsFourFill } from "react-icons/pi";

interface IServicePoint {
  heading: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  Points: string[];
}
interface IServiceData {
  frontend: IServicePoint[];
  backend: IServicePoint[];
  fullstack: IServicePoint[];
}

const data: IServiceData = {
  frontend: [
    {
      heading: "Frontend Development",
      icon: DiReact,
      Points: [
        "Interactive UI/UX",
        "Single Page Applications",
        "Responsive Web Design",
        "State Management",
        "Performance Optimization",
        "Component-Based Architecture",
      ],
    },
  ],
  backend: [
    {
      heading: "Backend Development",
      icon: SiNestjs,

      Points: [
        "REST APIs",
        "Real-time Applications",
        "Database Management",
        "Authentication",
        "Authorization",
        "API Integration",
      ],
    },
  ],
  fullstack: [
    {
      heading: "Full Stack Development",
      icon: FaLaptopCode,
      Points: [
        "MERN stack Apps",
        "Portfolio Websites",
        "Ecommerce Solutions",
        "Custom Web Solutions",
        "Testing & Debugging",
        "Version Control",
      ],
    },
  ],
};

const Service = () => {
  return (
    <Row id="service" className="w-full justify-center py-4  bg-[#e1ebed]">
      <Row className="px-2 md:px-0 w-full md:w-[90%] flex-col justify-between  items-center gap-4  ">
        <Row className="items-center gap-3 text-[#291c3a]">
          <PiDiamondsFourFill size={25} className="animate-bounce text-[#8121d0]" />
          <h2 className="kenyanCoffee  font-semibold uppercase text-[26px] md:text-[36px]  border-b border-[#8121d0] text-start">
            Services I Offer
          </h2>
        </Row>

        <Row className="w-full flex-wrap justify-between">
          {Object.entries(data).map(([key, value]) =>
            value.map((service: any, index: any) => (
              <Row
                key={index}
                className=" flex-col gap-2 shadow-md border items-center rounded-md w-full md:w-[32%] bg-white mb-3 md:mb-4 p-6"
              >
                <Row className="w-full items-center justify-between">
                  <h2 className=" poppins text-[20px] font-medium">
                    {service.heading}
                  </h2>
                  <div className="bg-[#291c3a] shadow-sm  flex  w-[35px] h-[35px]  md:w-[50px] md:h-[50px] justify-center items-center rounded-full">
                    <service.icon className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] object-contain text-[#8121d0] " />
                  </div>
                </Row>
                {service.Points.map((point: any, idx: any) => (
                  <Row key={idx} className="items-center w-full ">
                    <TbPoint size={25} className="text-[#291c3a] " />
                    <p className="ml-2 poppinsRegular text-[16px] ">{point}</p>
                  </Row>
                ))}
              </Row>
            ))
          )}
        </Row>
      </Row>
    </Row>
  );
};

export default Service;
