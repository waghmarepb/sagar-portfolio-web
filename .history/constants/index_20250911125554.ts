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
    image: "flutter.png",
    width: 80,
    height: 70,
  },
  {
    skill_name: "Dart",
    image: "Dart_logo.png",
    width: 80,
    height: 70,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 100,
  },
  {
    skill_name: "Flask",
    image: "flask1.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Django",
    image: "django.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Postman",
    image: "postman.png",
    width: 80,
    height: 70,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 80,
    height: 70,
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
    width: 80,
    height: 80,
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

export const ANDROID_PROJECTS = [
  {
    title: "💇‍♀️ Salon Booking Management App",
    description: "Complete salon management platform with appointment booking, staff scheduling, service management, and customer tracking. Features include real-time availability, payment integration, push notifications, and admin dashboard.",
    image: "/projects/android-project/saloon.png",
    link: "https://github.com/sagarkumbhar",
    tech: ["Flutter", "Dart", "Firebase", "Real-time Booking", "Push Notifications", "Payment Gateway"]
  },
  {
    title: "📄 Invoice Management App",
    description: "Professional invoice generation and management system with GST integration, PDF export, client management, and real-time synchronization. Includes automated tax calculations and multi-format invoice templates.",
    image: "/projects/android-project/invoice.jpg",
    link: "https://github.com/sagarkumbhar",
    tech: ["Flutter", "Dart", "PDF Generation", "GST Integration", "Cloud Sync", "SQLite"]
  },
  {
    title: "🩸 PLAB Blood Check App",
    description: "Comprehensive medical lab application for blood test management, lab report generation, patient data tracking, and real-time lab results. Features include barcode scanning, automated report generation, and lab technician dashboard.",
    image: "/projects/android-project/plab.jpg",
    link: "https://github.com/sagarkumbhar",
    tech: ["Flutter", "Dart", "Barcode Scanner", "PDF Generation", "Lab Management", "Real-time Sync"]
  },
  {
    title: "🛍️ Shopping & Marketplace App",
    description: "Multi-vendor shopping platform with advanced search, AI recommendations, voice search, and real-time chat support. Includes vendor management, order processing, and comprehensive analytics dashboard.",
    image: "/projects/android-project/shopping.jpg",
    link: "https://github.com/sagarkumbhar",
    tech: ["Flutter", "Dart", "Multi-vendor", "AI Recommendations", "Voice Search", "Real-time Chat"]
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
    icon: "👨‍💻"
  },
  {
    title: "Skills",
    link: "#skills",
    icon: "⚡"
  },
  {
    title: "Projects",
    link: "#projects",
    icon: "🚀"
  },
  {
    title: "Experience",
    link: "#experience",
    icon: "💼"
  }
] as const;


