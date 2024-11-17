import {
  DiJsBadge,
  DiNodejsSmall,
  DiMongodb,
  DiPostgresql,
  DiReact,
  DiGit,
} from "react-icons/di";

import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiRedux,
  SiNextdotjs,
  SiSocketdotio,
} from "react-icons/si";

import { GrMysql, GrGraphQl } from "react-icons/gr";
import { ISkillData } from "../../components/Skill";

const SkillsData: ISkillData[] = [
  { name: "JavaScript", icon: DiJsBadge },
  { name: "TypeScript", icon: SiTypescript },

  { name: "React", icon: DiReact },
  { name: "Next", icon: SiNextdotjs },
  { name: "Redux", icon: SiRedux },

  { name: "Node", icon: DiNodejsSmall },
  { name: "Express", icon: SiExpress },
  { name: "NestJS", icon: SiNestjs },
  { name: "Socket.IO", icon: SiSocketdotio },
  { name: "GraphQL", icon: GrGraphQl },

  { name: "MongoDB", icon: DiMongodb },
  { name: "MySQL", icon: GrMysql },
  { name: "PostgreSQL", icon: DiPostgresql },

  { name: "Git", icon: DiGit },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

export default SkillsData;
