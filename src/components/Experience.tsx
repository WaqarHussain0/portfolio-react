import React from "react";
import Row from "./common/Row";
import piecyferLogo from "../assets/imgs/piecyfer.png";
import loop_tech_logo from "../assets/imgs/66loop_technologies_logo.jpg";
import exd_logo from "../assets/imgs/exd.png";
import { ImOffice } from "react-icons/im";
interface Job {
  designation: string;
  name: string;
  location: string;
  date: string;
  imgSrc: string;
  websiteLink?: string;
}

interface Company {
  [key: string]: Job[];
}

const data: Company[] = [
  {
    company4: [
      {
        designation: "Associate Software Engineer",
        name: "PieCyfer",
        location: "Lahore",
        date: "03/2024",
        imgSrc: piecyferLogo,
        websiteLink: "https://www.piecyfer.com/",
      },
    ],
  },
  {
    company3: [
      {
        designation: "Intern MERN Stack Dev",
        name: "PieCyfer",
        location: "Lahore",
        date: "03-05/2024",
        imgSrc: piecyferLogo,
        websiteLink: "https://www.piecyfer.com/",
      },
    ],
  },
  {
    company2: [
      {
        designation: "Junior React Dev",
        name: "66 Loop Technologies",
        location: "Lahore",
        date: "09-10/2023",
        imgSrc: loop_tech_logo,
        websiteLink: "https://66loop.com/",
      },
    ],
  },
  {
    company1: [
      {
        designation: "MERN Bootcamp",
        name: "Excellence Delivered Exd (Pvt.) Ltd",
        location: "Lahore",
        date: "2023",
        imgSrc: exd_logo,
        websiteLink: "https://66loop.com/",
      },
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <Row
      id="about"
      className="w-full md:w-[90%] justify-center py-4 bg-[#e1ebed]"
    >
      <Row className="px-2 md:px-0 w-full flex-col justify-between items-center gap-4">
        <Row className="items-center gap-3 text-[#291c3a]">
          <ImOffice size={25} className="animate-bounce text-[#8121d0]" />
          <h2 className="kenyanCoffee   font-semibold uppercase text-[26px] md:text-[36px]  border-b border-[#8121d0] text-start">
            Experience
          </h2>
        </Row>
        <Row className="w-full flex-col justify-between">
          {data.map((company, index) =>
            Object.values(company).map((jobs, idx) =>
              jobs.map((job, jobIndex) => (
                <Row
                  key={`${index}-${idx}-${jobIndex}`}
                  className="flex-col  shadow-md border rounded-md w-full bg-white py-5 px-2 mb-3 md:p-5 "
                >
                  <Row className="w-full gap-2 md:gap-4  justify-center items-center">
                    <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] ">
                      <img
                        src={job.imgSrc}
                        alt={`${job.name} Logo`}
                        className="w-full h-full object-contain "
                      />
                    </div>
                    <Row className="justify-between items-center w-[90%]">
                      <Row className="flex-col">
                        <h2 className=" poppins text-[14px] md:text-[18px]  line-clamp-1">
                          {job.designation}
                        </h2>
                        <a
                          href={job.websiteLink}
                          target="_blank"
                          rel="noreferrer"
                          className="line-clamp-1 poppinsRegular text-[12px] md:text-[16px]"
                        >
                          {job.name}
                        </a>
                      </Row>
                      <Row className="flex-col text-end">
                        <p className="line-clamp-1 poppinsRegular text-[12px] md:text-[14px]">
                          {job.date}
                        </p>
                        <p className="line-clamp-1 poppinsRegular text-[12px] md:text-[14px]">
                          {job.location}
                        </p>
                      </Row>
                    </Row>
                  </Row>
                </Row>
              ))
            )
          )}
        </Row>
      </Row>
    </Row>
  );
};

export default Experience;
