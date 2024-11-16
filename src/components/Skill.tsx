import Row from "./common/Row";

import { GrTechnology } from "react-icons/gr";
import SubHeading from "./common/heading/SubHeading";
import Heading from "./common/heading";
import Description from "./common/heading/Description";
import { useEffect, useState } from "react";
import SkillsData from "../data/skillData";
import AnimatedIcon from "./AnimatedIcon";

interface IconData {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
}

const Skill = () => {
  const [skillsData, setSkillsData] = useState<IconData[]>();

  useEffect(() => setSkillsData(SkillsData), [skillsData]);

  return (
    <Row className="w-full justify-center items-center pt-4 md:py-6  bg-[#e1ebed] mt-2">
      <Row className="px-2 md:px-0 w-full md:w-[90%] flex-col justify-between gap-4 items-center   ">
        <Row className="items-center gap-3 text-[#291c3a]">
          <AnimatedIcon Icon={GrTechnology} />

          <Row className="flex-col gap-2 items-start md:items-center">
            <Heading title="Technologies" />

            <Description title="I've been working with recently" />
          </Row>
        </Row>
        <Row className="w-full flex-wrap justify-between  ">
          {skillsData &&
            skillsData.map((val, index) => (
              <Row
                key={index}
                className=" flex-col rounded-md mb-2 shadow-md border-x  bg-white w-[32%] md:w-[18%]  h-[70px] md:h-[140px]  justify-center items-center gap-2  "
              >
                <SubHeading
                  title={val.name}
                  className="text-[14px] md:text-[20px] text-center text-[#291c3a] line-clamp-2"
                />
                <val.icon className="h-[25px] w-[25px]  md:h-[50px] md:w-[50px] object-contain text-[#8121d0] " />
              </Row>
            ))}
        </Row>
      </Row>
    </Row>
  );
};

export default Skill;
