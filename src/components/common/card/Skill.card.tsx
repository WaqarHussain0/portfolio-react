import Row from "../Row";
import SubHeading from "../heading/SubHeading";
import { ISkillData } from "../../Skill";

const SkillCard: React.FC<ISkillData> = ({ name, icon: Icon }) => {
  return (
    <Row className=" flex-col rounded-md mb-2 shadow-md border-x  bg-white w-[32%] md:w-[18%]  h-[70px] md:h-[110px] lg:h-[140px]  justify-center items-center gap-2  ">
      <SubHeading
        title={name}
        className=" text-center text-[#291c3a] line-clamp-2"
      />

      <Icon className="h-[25px] w-[25px]  md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px] object-contain text-[#8121d0] " />
    </Row>
  );
};

export default SkillCard;
