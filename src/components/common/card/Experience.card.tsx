import { IJob } from "../../Experience";
import Row from "../Row";
import Description from "../heading/Description";
import SubHeading from "../heading/SubHeading";

const ExperienceCard: React.FC<IJob> = ({
  designation,
  companyName,
  location,
  startDate,
  endDate,
  imgSrc,
  websiteLink,
}) => {
  return (
    <Row className="flex flex-col shadow-md border rounded-md w-full bg-white py-4 px-2 lg:px-0 mb-2 ">
      <Row className="w-full gap-2 md:gap-4 justify-center items-center">
        <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]">
          <img
            src={imgSrc}
            alt={`${companyName} Logo`}
            className="w-full h-full object-contain"
          />
        </div>

        <Row className="justify-between flex-col  w-[90%]">
          <Row className="justify-between items-center">
            <SubHeading title={designation} />

            <Description
              title={
                startDate === endDate
                  ? startDate
                  : `${startDate} - ${endDate || "Present"}`
              }
            />
          </Row>

          <Row className="justify-between items-center text-end">
            <a
              href={websiteLink}
              target="_blank"
              rel="noreferrer"
              className="line-clamp-1 poppinsRegular text-[11px] md:text-[16px]"
            >
              {companyName}
            </a>

            <Description title={location} />
          </Row>
        </Row>
      </Row>
    </Row>
  );
};

export default ExperienceCard;
