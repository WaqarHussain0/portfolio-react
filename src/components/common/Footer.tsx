import Row from "./Row";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork, FaGithub } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { FaMedium } from "react-icons/fa6";
interface ISocialLink {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  link: string;
}

const data: ISocialLink[] = [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/waqar-hussain-9b49101b3/",
  },
  { icon: FaMedium, link: "https://medium.com/@waqar105lgu.edu" },
  { icon: TbBrandFiverr, link: "https://www.fiverr.com/waqarhussain105" },
  { icon: FaSquareUpwork, link: "https://www.upwork.com/" },
  { icon: FaGithub, link: "https://github.com/WaqarHussain0" },
];

const Footer = () => {
  return (
    <Row className="w-full justify-center  bg-[#291c3a]">
      <Row className=" px-4 md:px-0 py-2 md:py-4 w-full md:w-[90%] justify-between items-center text-white  ">
        <Row className="flex-col md:flex-row w-[60%]  md:items-center md:gap-2  ">
          <h2 className="poppinsRegular  text-[12px] md:text-[14px] ">
            Developed by
          </h2>
          <a href="#/" className=" poppins text-[14px] md:text-[18px] ">
            Waqar Hussain
          </a>
        </Row>

        <Row className="w-[30%]  justify-end items-center gap-2">
          {data.map((val, index) => (
            <a
              key={index}
              href={val.link}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center w-[25px] h-[25px] md:w-[30px] md:h-[30px] rounded-full bg-transparent md:bg-white md:shadow-md md:border"
            >
              <val.icon className="h-[16px] w-[16px] md:h-[20px] md:w-[20px] text-white md:text-[#8121d0] object-cover" />
            </a>
          ))}
        </Row>
      </Row>
    </Row>
  );
};

export default Footer;
