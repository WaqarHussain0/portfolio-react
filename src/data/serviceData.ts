import { DiReact } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa6";

const ServicesData = [
  {
    category: "frontend",
    heading: "Frontend Development",
    icon: DiReact,
    points: [
      "Interactive UI/UX",
      "Single Page Applications",
      "Responsive Web Design",
      "State Management",
      "Performance Optimization",
      "Component-Based Architecture",
    ],
  },
  {
    category: "backend",
    heading: "Backend Development",
    icon: SiNestjs,
    points: [
      "REST APIs",
      "Real-time Applications",
      "Database Management",
      "Authentication",
      "Authorization",
      "API Integration",
    ],
  },
  {
    category: "fullstack",
    heading: "Full Stack Development",
    icon: FaLaptopCode,
    points: [
      "MERN stack Apps",
      "Portfolio Websites",
      "Ecommerce Solutions",
      "Custom Web Solutions",
      "Testing & Debugging",
      "Version Control",
    ],
  },
];

export default ServicesData;
