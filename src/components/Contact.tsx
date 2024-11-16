import React from "react";
import Row from "./common/Row";
import { MdConnectWithoutContact } from "react-icons/md";
import Button from "./common/Button";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useForm, Controller } from "react-hook-form";
import Input from "./common/form/Input";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import Heading from "./common/heading";
import Description from "./common/heading/Description";
import AnimatedIcon from "./AnimatedIcon";
import SubHeading from "./common/heading/SubHeading";

interface IconData {
  name: string;
  details: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
}
interface IFormData {
  email: string;
  name: string;
  message: string;
}
const data: IconData[] = [
  { name: "WhatsApp", details: "+92 317 4945496", icon: IoLogoWhatsapp },
  {
    name: "Email",
    details: "waqar.mernstackdev@gmail.com",
    icon: MdMarkEmailUnread,
  },
  { name: "Location", details: "Lahore, Pakistan", icon: FaLocationDot },
];

const Contact: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: IFormData) => {
    try {
      const emailData = {
        to_name: "waqar.mernstackdev@gmail.com",
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        emailData,
        process.env.REACT_APP_USER_ID as string
      );
      toast.success("Thanks for contacting!");
      reset();
    } catch (error) {
      console.error("Failed to send email.", error);
    }
  };

  return (
    <Row
      id="contact"
      className=" w-full justify-center pt-8 pb-0 md:pb-8 bg-[#fff]"
    >
      <ToastContainer
        className=" text-gray-800 rounded-lg  absolute right-32 top-20 px-4"
        autoClose={4000}
      />
      <Row className="mb-4 px-2 md:px-0 w-full md:w-[90%] flex-col justify-between items-center  gap-4 ">
        <Row className=" items-center gap-3 text-[#291c3a]">
          <AnimatedIcon Icon={MdConnectWithoutContact} />

          <Row className="flex-col gap-2 items-start md:items-center">
            <Heading title="Contact" />

            <Description title=" Let's discuss on something cool together" />
          </Row>
        </Row>

        <Row className="w-full flex-col justify-between">
          <Row className="flex-col gap-8 md:gap-0 md:flex-row md:justify-between md:items-center shadow-md border rounded-md w-full  mb-3 md:mb-0 bg-[#e1ebed] px-2 py-4 md:p-6">
            <Row className="w-full md:w-[38%] flex-col gap-3  ">
              {data.map((val, ind) => (
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

            <Row className="w-full md:w-[60%] flex-col gap-3  items-start ">
              <Input
                name="name"
                control={control}
                placeHolder="Enter your name"
                errors={errors}
                rules={{ required: "Name is required" }}
              />

              <Input
                control={control}
                name="email"
                placeHolder="Enter your email"
                errors={errors}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                }}
                type="email"
              />

              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    name="message"
                    className="w-full outline-none  h-[150px] px-2 md:px-4 py-2 rounded-sm resize-none poppinsRegular text-[14px] md:text-[16px]"
                    placeholder="Enter your message here"
                  />
                )}
              />
              {errors.message && (
                <p className="text-red-600 mt-[-10px] md:mt-[-12px] poppinsRegular text-[14px] md:text-[16px] ">
                  {errors.message.message}
                </p>
              )}
              <Button
                btnTitle="Send"
                className="w-[90px] md:w-[120px] "
                onClick={handleSubmit(onSubmit)}
              />
            </Row>
          </Row>
        </Row>
      </Row>
    </Row>
  );
};

export default Contact;
