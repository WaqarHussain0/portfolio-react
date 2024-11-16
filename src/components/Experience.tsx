import React, { useEffect, useState } from "react";
import Row from "./common/Row";
import { ImOffice } from "react-icons/im";
import ExperienceData from "../data/experienceData";
import Heading from "./common/heading";
import SubHeading from "./common/heading/SubHeading";
import Description from "./common/heading/Description";
import AnimatedIcon from "./AnimatedIcon";

interface IJob {
  designation: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string | null;
  imgSrc: string;
  websiteLink?: string;
}

const Experience: React.FC = () => {
  const [expData, setExpData] = useState<IJob[]>();
  useEffect(() => setExpData(ExperienceData), [expData]);

  return (
    <Row
      id="about"
      className="w-full md:w-[90%] justify-center py-4 bg-[#e1ebed]"
    >
      <Row className="px-2 md:px-0 w-full flex-col justify-between items-center gap-4">
        <Row className="items-center gap-3 text-[#291c3a]">
          <AnimatedIcon Icon={ImOffice} />

          <Heading title="Experience" />
        </Row>

        <Row className="w-full flex-col justify-between">
          {expData &&
            expData.map((job, index) => (
              <Row
                key={index}
                className="flex-col shadow-md border rounded-md w-full bg-white py-5 px-2 mb-3 md:p-5"
              >
                <Row className="w-full gap-2 md:gap-4 justify-center items-center">
                  <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]">
                    <img
                      src={job.imgSrc}
                      alt={`${job.companyName} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <Row className="justify-between items-center w-[90%]">
                    <Row className="flex-col">
                      <SubHeading title={job.designation} />

                      <a
                        href={job.websiteLink}
                        target="_blank"
                        rel="noreferrer"
                        className="line-clamp-1 poppinsRegular text-[12px] md:text-[16px]"
                      >
                        {job.companyName}
                      </a>
                    </Row>

                    <Row className="flex-col text-end">
                      <Description
                        title={
                          job.startDate === job.endDate
                            ? job.startDate
                            : `${job.startDate} - ${job.endDate || "Present"}`
                        }
                      />

                      <Description title={job.location} />
                    </Row>
                  </Row>
                </Row>
              </Row>
            ))}
        </Row>
      </Row>
    </Row>
  );
};

export default Experience;
