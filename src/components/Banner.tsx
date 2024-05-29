import Row from "../components/common/Row";
import waqarPic from "../assets/imgs/waqar.png";
import AnimatedReact from "./common/AnimatedReact";
const Banner = () => {
  return (
    <Row className="w-full justify-center max:h-[27vh] md:h-[70vh]  bg-[#291c3a] relative overflow-hidden">
      <Row className="w-[90%]  justify-between items-center ">
        <Row className=" w-[65%] md:w-[60%] items-end pl-2 md:pl-3">
          <AnimatedReact />
          <Row className="flex-col ">
            <p className="text-[#e1ebed] poppinsRegular text-[12px] md:text-[16px] ">
              Hello 👋, I'm
            </p>
            <h2 className="cotoris text-[#8121d0] text-[22px] md:text-[60px] font-medium name-animation ">
              Waqar Hussain
            </h2>
            <h2 className="text-white poppinsRegular text-[12px] md:text-[22px] change_content "></h2>
          </Row>
        </Row>

        <div className="w-[35%]  md:w-[40%] rounded-sm overflow-hidden">
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
