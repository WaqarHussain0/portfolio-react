import piecyferLogo from "../imgs/piecyfer.png";
import loop_tech_logo from "../imgs/66loop_technologies_logo.jpg";
import exd_logo from "../imgs/exd.png";
import { IJob } from "../../components/Experience";

const ExperienceData: IJob[] = [
  {
    designation: "Associate MERN Dev.",
    companyName: "PieCyfer",
    location: "Lahore",
    startDate: "June 24",
    endDate: null,
    imgSrc: piecyferLogo,
    websiteLink: "https://www.piecyfer.com/",
  },
  {
    designation: "Intern MERN Stack Dev.",
    companyName: "PieCyfer",
    location: "Lahore",
    startDate: "Mar",
    endDate: "May, 24",
    imgSrc: piecyferLogo,
    websiteLink: "https://www.piecyfer.com/",
  },
  {
    designation: "Junior React Dev.",
    companyName: "66 Loop Technologies",
    location: "Lahore",
    startDate: "Sep",
    endDate: "Oct, 23",
    imgSrc: loop_tech_logo,
    websiteLink: "https://66loop.com/",
  },
  {
    designation: "MERN Bootcamp",
    companyName: "Excellence Delivered Exd (Pvt.) Ltd",
    location: "Lahore",
    startDate: "2023",
    endDate: "2023",
    imgSrc: exd_logo,
    websiteLink: "https://66loop.com/",
  },
];

export default ExperienceData;
