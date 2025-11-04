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
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
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

export const ANDROID_PROJECTS = [
  {
    title: "📱 E-Commerce Android App",
    description: "Full-featured shopping app with payment integration",
    image: "/projects/project-1.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["Kotlin", "Firebase", "Retrofit"]
  },
  {
    title: "🎯 Task Management Android",
    description: "Productivity app with offline sync capabilities",
    image: "/projects/project-2.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["Java", "Room DB", "WorkManager"]
  },
  {
    title: "🌤️ Weather Forecast App",
    description: "Real-time weather with location-based forecasts",
    image: "/projects/project-3.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["Kotlin", "MVVM", "OpenWeather API"]
  },
  {
    title: "💬 Chat Application",
    description: "Real-time messaging with multimedia support",
    image: "/projects/project-1.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["Android", "Socket.io", "Firebase"]
  }
] as const;

export const WINDOWS_PROJECTS = [
  {
    title: "🖥️ Desktop Inventory Manager",
    description: "Complete inventory management system for businesses",
    image: "/projects/project-2.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["C#", "WPF", "SQL Server"]
  },
  {
    title: "📊 Data Analytics Dashboard",
    description: "Interactive dashboard for business intelligence",
    image: "/projects/project-3.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["C#", ".NET", "Chart.js"]
  },
  {
    title: "🔐 Security Management Tool",
    description: "Enterprise security and access control system",
    image: "/projects/project-1.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["C#", "Windows Forms", "Active Directory"]
  },
  {
    title: "🎮 Game Launcher Platform",
    description: "Custom game launcher with auto-updates",
    image: "/projects/project-2.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["C#", "WPF", "Steam API"]
  }
] as const;

export const WEB_PROJECTS = [
  {
    title: "🌐 E-Learning Platform",
    description: "Complete online learning management system",
    image: "/projects/project-3.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "🏪 Restaurant Management",
    description: "Full-stack restaurant ordering and management system",
    image: "/projects/project-1.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["PHP", "Laravel", "MySQL"]
  },
  {
    title: "📈 Trading Dashboard",
    description: "Real-time cryptocurrency trading platform",
    image: "/projects/project-2.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["Next.js", "TypeScript", "WebSocket"]
  },
  {
    title: "🎨 Portfolio CMS",
    description: "Content management system for creative professionals",
    image: "/projects/project-3.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["PHP", "CodeIgniter", "Bootstrap"]
  }
] as const;

export const IOS_PROJECTS = [
  {
    title: "📱 Fitness Tracker iOS",
    description: "Health and fitness tracking with HealthKit integration",
    image: "/projects/project-1.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["Swift", "HealthKit", "Core Data"]
  },
  {
    title: "🎵 Music Streaming App",
    description: "Custom music player with cloud synchronization",
    image: "/projects/project-2.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["SwiftUI", "AVFoundation", "CloudKit"]
  },
  {
    title: "📷 Photo Editor Pro",
    description: "Advanced photo editing with AI-powered filters",
    image: "/projects/project-3.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["Swift", "Core Image", "Vision Framework"]
  },
  {
    title: "💰 Budget Planner iOS",
    description: "Personal finance management with expense tracking",
    image: "/projects/project-1.webp",
    link: "https://github.com/sagarkumbhar",
    tech: ["SwiftUI", "Core Data", "Charts"]
  }
] as const;

// Legacy projects array for backward compatibility
export const PROJECTS = ANDROID_PROJECTS;

export const FOOTER_DATA = [
  {
    title: "Quick Links",
    data: [
      {
        name: "Home",
        icon: null,
        link: "#home",
      },
      {
        name: "About",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Skills",
        icon: null,
        link: "#skills",
      },
      {
        name: "Projects",
        icon: null,
        link: "#projects",
      },
    ],
  },
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/sagarkumbhar",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/sagar-kumbhar",
      },
      {
        name: "Email",
        icon: null,
        link: "mailto:sagar.kumbhar@example.com",
      },
    ],
  },
  {
    title: "Technologies",
    data: [
      {
        name: "Flutter",
        icon: null,
        link: "#skills",
      },
      {
        name: "Dart",
        icon: null,
        link: "#skills",
      },
      {
        name: "Python",
        icon: null,
        link: "#skills",
      },
      {
        name: "React",
        icon: null,
        link: "#skills",
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


