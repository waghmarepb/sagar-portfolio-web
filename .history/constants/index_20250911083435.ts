import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Flutter",
    image: "flutter.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Dart",
    image: "dart.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flask",
    image: "flask.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Django",
    image: "django.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Postman",
    image: "postman.svg",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [] as const;

export const BACKEND_SKILL = [] as const;

export const FULLSTACK_SKILL = [] as const;

export const OTHER_SKILL = [] as const;

export const PROJECTS = [
  {
    title: "📱 Flutter E-Commerce App",

    image: "/projects/project-1.webp",
    link: "https://github.com/sagarkumbhar",
  },
  {
    title: "🎯 Flutter Task Management App",

    image: "/projects/project-2.webp",
    link: "https://github.com/sagarkumbhar",
  },
  {
    title: "🚀 Flutter Weather App",

    image: "/projects/project-3.webp",
    link: "https://github.com/sagarkumbhar",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },

    ],
  },
  {
    title: "Social Media",
    data: [

      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/abdul-raheman-389597281/",
      },
    ],
  },
  {
    title: "About",
    data: [

      {
        name: "Contact Me",
        icon: null,
        link: "mailto:arrahmanofficial9@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;


