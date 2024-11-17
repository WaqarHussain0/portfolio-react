import { MdMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

interface IContactData {
  name: string;
  details: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
}

const ContactData: IContactData[] = [
  { name: "WhatsApp", details: "+92 317 4945496", icon: IoLogoWhatsapp },
  {
    name: "Email",
    details: "waqar.mernstackdev@gmail.com",
    icon: MdMarkEmailUnread,
  },
  { name: "Location", details: "Lahore, Pakistan", icon: FaLocationDot },
];

export default ContactData;
