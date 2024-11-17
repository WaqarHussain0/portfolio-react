import { DiReact } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa6";
import { IServicePoint } from "../../components/Service";

const ServicesData : IServicePoint[] = [
  {
    heading: "Frontend Development",
    icon: DiReact,
    points: [
      "Interactive UI/UX with React",
      "Single Page Applications (SPA)",
      "Responsive Design with Tailwind CSS",
      "State Management with Redux",
      "Next.js for SSR & SSG",
    ],
  },
  {
    heading: "Backend Development",
    icon: SiNestjs,
    points: [
      "RESTful APIs with Express",
      "Real-Time Apps with Socket.IO",
      "GraphQL API Development",
      "Database Management (MongoDB, SQL)",
      "Authentication & Authorization (JWT)",
    ],
  },
  {
    heading: "Full Stack Development",
    icon: FaLaptopCode,
    points: [
      "MERN Stack Web Applications",
      "Custom Web Solutions",
      "E-commerce Solutions Development",
      "Real-Time Features (Chats, Notifications)",
      "Version Control with Git",
    ],
  },
];

export default ServicesData;
