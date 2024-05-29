import Row from "./common/Row";

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiBootstrap,
  DiNodejsSmall,
  DiMongodb,
  DiPostgresql,
  DiReact,
  DiGit,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiRedux,
  SiJest,
} from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
interface IconData {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
}

const data: IconData[] = [
  { name: "HTML 5", icon: DiHtml5 },
  { name: "CSS 3", icon: DiCss3 },
  { name: "JavaScript", icon: DiJsBadge },
  { name: "Bootstrap", icon: DiBootstrap },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: DiReact },
  { name: "Redux", icon: SiRedux },
  { name: "Node", icon: DiNodejsSmall },
  { name: "Express", icon: SiExpress },
  { name: "NestJS", icon: SiNestjs },
  { name: "MongoDB", icon: DiMongodb },
  { name: "PostgreSQL", icon: DiPostgresql },
  { name: "Jest", icon: SiJest },
  { name: "Git", icon: DiGit },
];

const Skill = () => {
  return (
    <Row className="w-full justify-center items-center pt-4 md:py-6  bg-[#e1ebed] mt-2">
      <Row className="px-2 md:px-0 w-full md:w-[90%] flex-col justify-between gap-4 items-center   ">
        <Row className="items-center gap-3 text-[#291c3a]">
          <GrTechnology size={25} className="animate-bounce text-[#8121d0]" />
          <Row className="flex-col gap-2 items-start md:items-center">
            <h2 className=" kenyanCoffee font-semibold uppercase text-[26px] md:text-[42px]  border-b border-[#8121d0] text-start">
              Technologies
            </h2>
            <p className="poppinsRegular text-[14px] md:text-[16px]">
              I've been working with recently
            </p>
          </Row>
        </Row>
        <Row className="w-full flex-wrap justify-between  ">
          {data.map((val, index) => (
            <Row
              key={index}
              className=" flex-col rounded-md mb-2 shadow-md border-x  bg-white w-[33%] md:w-[18%]  h-[80px] md:h-[140px]  justify-center items-center gap-2  "
            >
              <p className="poppins text-[14px] md:text-[20px] font-medium text-center text-[#291c3a] ">
                {val.name}
              </p>
              <val.icon className="h-[35px] w-[35px] md:h-[50px] md:w-[50px] object-contain text-[#8121d0] " />
            </Row>
          ))}
        </Row>
      </Row>
    </Row>
  );
};

export default Skill;
