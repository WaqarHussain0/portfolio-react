import Row from "../components/common/Row";
import waqarPic from "../assets/imgs/waqar.png";
import AnimatedReact from "./common/AnimatedReact";
import SubHeading from "./common/heading/SubHeading";
import Description from "./common/heading/Description";

const Banner = () => {
  return (
    <Row className="w-full justify-center  max:h-[27vh] md:h-[70vh]  bg-[#291c3a] relative overflow-hidden">
      <Row className="w-[90%]   justify-between items-center ">
        <Row className=" w-[65%] md:w-[60%] items-end pl-2 md:pl-3 gap-1 ">
          <AnimatedReact />

          <Row className="flex-col ">
            <Description title=" Hello 👋, I'm" className="text-[#e1ebed] " />

            <SubHeading
              title="Waqar Hussain"
              className="cotoris !important text-[#8121d0] text-[22px] md:text-[60px] name-animation"
            />

            <Description
              title=" MERN Stack Specialist | Crafting Scalable & High-Performance Web Solutions"
              className="text-[#e1ebed] line-clamp-3 text-start text-[10px] md:text-[16px] "
            />
          </Row>
        </Row>

        <div className=" w-[35%]  md:w-[40%] rounded-sm overflow-hidden ">
          <img
            src={waqarPic}
            alt="Profile Pic"
            className="w-full h-full object-contain "
          />
        </div>
      </Row>
    </Row>
  );
};

export default Banner;
