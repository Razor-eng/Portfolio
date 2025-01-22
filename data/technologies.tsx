import { useTheme } from 'next-themes';
import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello, FaJava, FaDatabase } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { SiAdobexd, SiWebstorm, SiJirasoftware, SiMui, SiChakraui, SiStyledcomponents, SiTypescript, SiPython, SiCplusplus, SiNodedotjs, SiExpress, SiSpringboot, SiAppwrite, SiMongodb, SiMysql, SiPostgresql, SiSqlite, SiFirebase } from "react-icons/si";

export const TECHNOLOGIES = () => {
	const { theme } = useTheme();

	const getColor = (lightColor: string, darkColor: string): string => theme === 'dark' ? darkColor : lightColor;

	return [
		{
			category: "Languages",
			items: [
				{ name: "JavaScript", icon: <IoLogoJavascript size={32} color={getColor("#F7DF1E", "#F1E100")} /> },
				{ name: "TypeScript", icon: <SiTypescript size={32} color={getColor("#3178C6", "#2F74C0")} /> },
				{ name: "Python", icon: <SiPython size={32} color={getColor("#306998", "#FFD43B")} /> },
				{ name: "Java", icon: <FaJava size={32} color={getColor("#007396", "#D84B16")} /> },
				{ name: "C++", icon: <SiCplusplus size={32} color={getColor("#00599C", "#2B85D9")} /> }
			]
		},
		{
			category: "Front-end",
			items: [
				{ name: "HTML", icon: <AiFillHtml5 size={32} color={getColor("#E44D26", "#FF6A13")} /> },
				{ name: "CSS", icon: <DiCss3 size={32} color={getColor("#1572B6", "#4B9CD3")} /> },
				{ name: "JS", icon: <IoLogoJavascript size={32} color={getColor("#F7DF1E", "#F1E100")} /> },
				{ name: "React", icon: <FaReact size={32} color={getColor("#61DAFB", "#4FD2D6")} /> },
				{ name: "Next", icon: <TbBrandNextjs size={32} color={getColor("#000000", "#FFFFFF")} /> },
				{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} color={getColor("#06B6D4", "#33A9C3")} /> },
				{ name: "MUI", icon: <SiMui size={32} color={getColor("#007FFF", "#4285F4")} /> },
				{ name: "AntD", icon: <AiOutlineAntDesign size={32} color={getColor("#0170FE", "#0E66C2")} /> },
				{ name: "Bootstrap", icon: <BsBootstrap size={32} color={getColor("#7952B3", "#5C4D9F")} /> },
				{ name: "Chakra", icon: <SiChakraui size={32} color={getColor("#319795", "#5E6D58")} /> },
				{ name: "styled components", icon: <SiStyledcomponents size={32} color={getColor("#DB7093", "#D45380")} /> },
				{ name: "HeadlessUI", icon: <SiMui size={32} color={getColor("#000000", "#FFFFFF")} /> }
			]
		},
		{
			category: "Backend",
			items: [
				{ name: "Node.js", icon: <SiNodedotjs size={32} color={getColor("#68A063", "#4CAF50")} /> },
				{ name: "Express.js", icon: <SiExpress size={32} color={getColor("#000000", "#FFFFFF")} /> },
				{ name: "Spring Boot", icon: <SiSpringboot size={32} color={getColor("#6DB33F", "#1E8E3E")} /> },
				{ name: "Convex", icon: <FaDatabase size={32} color={getColor("#B759FF", "#9C43FF")} /> },
				{ name: "Appwrite", icon: <SiAppwrite size={32} color={getColor("#2A75C1", "#1D62A8")} /> }
			]
		},
		{
			category: "Database",
			items: [
				{ name: "MongoDB", icon: <SiMongodb size={32} color={getColor("#47A248", "#43A047")} /> },
				{ name: "MySQL", icon: <SiMysql size={32} color={getColor("#4479A1", "#00758F")} /> },
				{ name: "PostgreSQL", icon: <SiPostgresql size={32} color={getColor("#336791", "#336791")} /> },
				{ name: "SQLite", icon: <SiSqlite size={32} color={getColor("#003B57", "#0277BD")} /> },
				{ name: "Firebase", icon: <SiFirebase size={32} color={getColor("#FFCA28", "#FFB300")} /> }
			]
		},
		{
			category: "UI tools",
			items: [
				{ name: "Figma", icon: <FaFigma size={32} color={getColor("#F24E1E", "#F4A261")} /> },
				{ name: "XD", icon: <SiAdobexd size={32} color={getColor("#FF61F6", "#D162EC")} /> }
			]
		},
		{
			category: "Other tools",
			items: [
				{ name: "Github", icon: <AiFillGithub size={32} color={getColor("#181717", "#FFFFFF")} /> },
				{ name: "Gitlab", icon: <AiFillGitlab size={32} color={getColor("#FCA121", "#F55B20")} /> },
				{ name: "VsCode", icon: <DiVisualstudio size={32} color={getColor("#007ACC", "#006BB3")} /> },
				{ name: "WordPress CMS", icon: <FaWordpressSimple size={32} color={getColor("#21759B", "#006A8F")} /> },
				{ name: "Jira", icon: <SiJirasoftware size={32} color={getColor("#0052CC", "#005B9F")} /> },
				{ name: "Trello", icon: <FaTrello size={32} color={getColor("#0079BF", "#3D93BB")} /> },
				{ name: "WebStorm", icon: <SiWebstorm size={32} color={getColor("#00BFFF", "#3D91FF")} /> }
			]
		},
		{
			category: "Mobile",
			items: [{ name: "Flutter", icon: <RiFlutterFill size={32} color={getColor("#02569B", "#00A9B9")} /> }]
		},
	];
};
