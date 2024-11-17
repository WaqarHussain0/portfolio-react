import ContactData from "../assets/data/contact.data";
import Row from "./common/Row";
import Description from "./common/heading/Description";
import SubHeading from "./common/heading/SubHeading";


const ContactInfo = () => {
  return (
    <Row className="w-full md:w-[38%] flex-col gap-3  ">
      {ContactData.map((val, ind) => (
        <Row key={ind} className="items-center gap-2 md:gap-4">
          <div className="flex justify-center items-center w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-sm shadow-md border-y bg-white">
            <val.icon className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-[#8121d0]" />
          </div>

          <Row className="flex-col">
            <SubHeading title={val.name} />

            <Description title={val.details} />
          </Row>
        </Row>
      ))}
    </Row>
  );
};

export default ContactInfo;
