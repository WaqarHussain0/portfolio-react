import { GrTechnology } from "react-icons/gr";

import SkillsData from "../assets/data/skill.data";

import Row from "./common/Row";
import Heading from "./common/heading";
import Description from "./common/heading/Description";
import AnimatedIcon from "./common/AnimatedIcon";
import SkillCard from "./common/card/Skill.card";

export interface ISkillData {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
}

const Skill = () => {
  return (
    <Row className="w-full justify-center items-center mt-4  bg-[#e1ebed]">
      <Row className="px-2 md:px-0 w-[98%] md:w-[90%] flex-col justify-between gap-4 items-center   ">
        <Row className="items-center gap-3 text-[#291c3a]">
          <AnimatedIcon Icon={GrTechnology} />

          <Row className="flex-col gap-2 items-start md:items-center">
            <Heading title="Technologies" />

            <Description title="I've been working with recently" />
          </Row>
        </Row>

        <Row className="w-full flex-wrap justify-between  ">
          {SkillsData.map((val, index) => (
            <SkillCard icon={val.icon} name={val.name} key={index} />
          ))}
        </Row>
      </Row>
    </Row>
  );
};

export default Skill;
