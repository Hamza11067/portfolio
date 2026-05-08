"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// About data
const about = {
  title: "About me",
  description:
    "I'm a FullStack Developer, currently working in MERN stack technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hamza Khalid",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 323 1045234",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Hamza.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldName: "Email",
      fieldValue: "hamzakhalid1067@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu",
    },
  ],
};

// Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I'm a FullStack Developer, currently working in MERN stack technologies.",
  items: [
    {
      company: "Meezan.sh",
      position: "Full Stack Developer",
      duration: "2025 - present",
    },
    {
      company: "SmashCode",
      position: "Frontend Developer",
      duration: "2024 - 2025",
    },
    {
      company: "DivCodex",
      position: "Frontend Developer Intern",
      duration: "2023 - 2024",
    },
    {
      company: "Ecommerce Startup",
      position: "Freelance Web Developer",
      duration: "Summer 2023",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2022-2023",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2021 - 2023",
    },
    {
      company: "Software Developer Firm",
      position: "Junior Developer",
      duration: "2020-2021",
    },
  ],
};

// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I'm a FullStack Developer, currently working in MERN stack technologies.",
  items: [
    {
      institution: "Meezan.sh",
      degree: "MERN Stack Development",
      duration: "2024 - 2025",
    },
    {
      institution: "Punjab University",
      degree: "Graduation(!CS)",
      duration: "2020 - 2024",
    },
    {
      institution: "GCU University",
      degree: "Intermediate",
      duration: "2018 - 2020",
    },
    {
      institution: "GHS Muslim",
      degree: "Matriculation",
      duration: "2016 - 2018",
    },
  ],
};

// Skills data
const skills = {
  title: "My skills",
  description:
    "I'm a FullStack Developer, currently working in MERN stack technologies.",
  skillSet: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto ">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-15"
        >
          <TabsList className="flex flex-col w-full max-w-95 mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] ">
            {/* experience */}
            <TabsContent value="experience">Experience</TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
