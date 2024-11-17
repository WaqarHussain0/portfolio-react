import React from "react";
import { ImOffice } from "react-icons/im";

import ExperienceData from "../assets/data/experience.data";

import Row from "./common/Row";
import Heading from "./common/heading";
import AnimatedIcon from "./common/AnimatedIcon";
import ExperienceCard from "./common/card/Experience.card";

export interface IJob {
  designation: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string | null;
  imgSrc: string;
  websiteLink: string;
}

const Experience: React.FC = () => {
  return (
    <Row id="about" className="w-[98%] md:w-[90%] justify-center  bg-[#e1ebed] ">
      <Row className="px-2 md:px-0 w-full flex-col justify-between items-center gap-4">
        <Row className="items-center gap-3 text-[#291c3a]">
          <AnimatedIcon Icon={ImOffice} />

          <Heading title="Experience" />
        </Row>

        <Row className="w-full flex-col justify-between">
          {ExperienceData.map((job, index) => (
            <ExperienceCard
              key={index}
              companyName={job.companyName}
              designation={job.designation}
              endDate={job.endDate}
              startDate={job.startDate}
              imgSrc={job.imgSrc}
              location={job.location}
              websiteLink={job.websiteLink}
            />
          ))}
        </Row>
      </Row>
    </Row>
  );
};

export default Experience;
