import { DiReact } from "react-icons/di";
import Row from "./Row";

const AnimatedReact = () => {
  return (
    <Row className="flex-col items-center gap-1">
      <div className=" bg-[#8121d0] bg-opacity-15  w-[20px] h-[20px] md:w-[40px] md:h-[40px] rounded-full flex justify-center items-center">
        <DiReact className="animate-spin text-white text-opacity-45 w-[15px] h-[15px] md:w-[30px] md:h-[30px]" />
      </div>

      <div className="border-l-[5px] md:border-l-[8px] border-double  border-[#8121d0] h-[70px] md:h-[150px] " />
    </Row>
  );
};

export default AnimatedReact;
