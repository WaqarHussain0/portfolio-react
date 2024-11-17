import React from "react";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { MdConnectWithoutContact } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

import Row from "./common/Row";
import Input from "./common/form/Input";

import Heading from "./common/heading";
import Description from "./common/heading/Description";
import AnimatedIcon from "./common/AnimatedIcon";
import IconButton from "./common/button/Icon.button";
import ContactInfo from "./Contact.info";

interface IFormData {
  email: string;
  name: string;
  message: string;
}

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
    <Row id="contact" className=" w-full justify-center mt-4 pt-3 pb-0 md:py-4 bg-[#fff] ">
      <ToastContainer
        className=" text-gray-800 rounded-lg  absolute right-32 top-20 px-4"
        autoClose={4000}
      />
      <Row className="mb-4 px-2 md:px-0 w-[98%] md:w-[90%] flex-col justify-between items-center  gap-4 ">
        <Row className=" items-center gap-3 text-[#291c3a]">
          <AnimatedIcon Icon={MdConnectWithoutContact} />

          <Row className="flex-col gap-2 items-start md:items-center">
            <Heading title="Contact" />

            <Description title=" Let's discuss on something cool together" />
          </Row>
        </Row>

        <Row className="w-full flex-col justify-between">
          <Row className="flex-col gap-8 md:gap-0 md:flex-row md:justify-between md:items-center shadow-md border rounded-md w-full  mb-3 md:mb-0 bg-[#e1ebed] px-2 py-4 md:p-6">
            <ContactInfo />

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
                    className="w-full outline-none  h-[150px] px-2 md:px-4 py-2 rounded-sm resize-none poppinsRegular text-[12px] md:text-[14px]"
                    placeholder="Enter your message here"
                  />
                )}
              />
              {errors.message && (
                <p className="text-red-600 mt-[-10px] md:mt-[-12px] poppinsRegular text-[12px] md:text-[14px] ">
                  {errors.message.message}
                </p>
              )}

              <IconButton
                title="Send"
                icon={IoIosSend}
                className="bg-[#8121d0] text-white"
                iconClassName="text-white"
                handleOnClick={handleSubmit(onSubmit)}
                moveIcon={false}
              />
            </Row>
          </Row>
        </Row>
      </Row>
    </Row>
  );
};

export default Contact;
