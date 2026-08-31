import {
  SiFlutter, SiDart, SiFirebase, SiAndroid, SiKotlin,
  SiFastapi, SiPython, SiPostgresql, SiNodedotjs, SiOpensearch,
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss,
  SiGmail,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import {
  FiSmartphone, FiServer, FiDatabase, FiLayout, FiPhone, FiMail,
  FiZap, FiCloud, FiCpu, FiGitBranch, FiCheckCircle, FiBox,
} from "react-icons/fi";
import type { IconType } from "react-icons";

export const profile = {
  name: "Dhiraj Chandel",
  roles: ["Software Engineer", "Mobile & Full-Stack Developer"],
  tagline:
    "I build reliable mobile apps, modern web experiences, and scalable backend systems from idea to production.",
  experience: "3+ Years",
  location: "India",
  email: "dhiraj.mobile.dev@gmail.com",
  phone: "8378821983",
  linkedin: "https://www.linkedin.com/in/dhirajsingh-chandel-7259b5172",
};

export const heroBadges = ["Flutter", "Android", "React", "Python", "FastAPI", "OpenSearch"];

export const about = [
  "I'm a software engineer from India with 3+ years of experience delivering production applications across mobile, web, and backend platforms.",
  "My work spans Flutter and Android development, React interfaces, Python and FastAPI services, Firebase, OpenSearch, document-processing workflows, and AI-assisted products.",
  "I focus on maintainable architecture, thoughtful user experiences, and dependable delivery—from modernizing legacy apps to building new products end to end.",
];

export type SkillGroup = { title: string; icon: IconType; skills: { name: string; icon: IconType }[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile Development",
    icon: FiSmartphone,
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Firebase", icon: SiFirebase },
      { name: "Android", icon: SiAndroid },
      { name: "Kotlin", icon: SiKotlin },
    ],
  },
  {
    title: "Backend Development",
    icon: FiServer,
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Python", icon: SiPython },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "REST APIs", icon: FiServer },
      { name: "Serverless", icon: FiCloud },
      { name: "Event-Driven", icon: FiZap },
    ],
  },
  {
    title: "Frontend Development",
    icon: FiLayout,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Databases",
    icon: FiDatabase,
    skills: [
      { name: "SQL", icon: SiPostgresql },
      { name: "Firestore", icon: SiFirebase },
      { name: "OpenSearch", icon: SiOpensearch },
    ],
  },
  {
    title: "Architecture & State",
    icon: FiGitBranch,
    skills: [
      { name: "Clean Architecture", icon: FiGitBranch },
      { name: "BLoC", icon: SiFlutter },
      { name: "Riverpod", icon: SiFlutter },
      { name: "GetX", icon: SiFlutter },
      { name: "Dependency Injection", icon: FiBox },
      { name: "Offline-First", icon: FiSmartphone },
    ],
  },
  {
    title: "Testing & Quality",
    icon: FiCheckCircle,
    skills: [
      { name: "Unit Testing", icon: FiCheckCircle },
      { name: "Widget Testing", icon: SiFlutter },
      { name: "Integration Testing", icon: FiCheckCircle },
      { name: "API Testing", icon: FiServer },
      { name: "Debugging", icon: FiCheckCircle },
      { name: "Code Review", icon: FiGitBranch },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: FiCloud,
    skills: [
      { name: "Git", icon: FiGitBranch },
      { name: "GitHub", icon: FiGitBranch },
      { name: "CI/CD", icon: FiZap },
      { name: "Docker", icon: FiBox },
      { name: "Cloud Functions", icon: FiCloud },
      { name: "Monitoring", icon: FiServer },
    ],
  },
  {
    title: "AI & Workflows",
    icon: FiCpu,
    skills: [
      { name: "AI Assistants", icon: FiCpu },
      { name: "Agent Workflows", icon: FiZap },
      { name: "Document Processing", icon: FiDatabase },
      { name: "Vector Search", icon: SiOpensearch },
      { name: "RAG", icon: FiDatabase },
      { name: "LLM Integration", icon: FiCpu },
    ],
  },
];

export const experiences = [
  {
    company: "Zetaris · Melbourne, Australia",
    role: "Software Engineer",
    period: "Present",
    points: [
      "Develop products across React, Flutter, Python, and FastAPI",
      "Build search and data workflows powered by OpenSearch",
      "Create AI assistants, automated workflows, and agent-based features",
      "Design document-upload, processing, and retrieval pipelines",
    ],
    stack: ["React", "Flutter", "Python", "FastAPI", "OpenSearch", "AI Assistants", "Workflows"],
  },
  {
    company: "TechneAI Pvt. Ltd. · Pune",
    role: "Flutter Developer",
    period: "Previous",
    points: [
      "Developed and maintained Flutter and native Android applications",
      "Built e-commerce, hospital management, B2B, and catalogue applications",
      "Modernized legacy applications with maintainable architecture and current tooling",
      "Integrated APIs and delivered reliable, production-ready mobile experiences",
    ],
    stack: ["Flutter", "Dart", "Android", "Firebase", "REST APIs"],
  },
];

export const projects = [
  {
    title: "Hospital Management System",
    description:
      "End-to-end hospital workflow platform covering patients, doctors, appointments, and records with role-based access.",
    tech: ["Flutter", "FastAPI", "PostgreSQL", "Firebase"],
    challenge: "Modeling complex hospital workflows while keeping the UI clean for non-technical staff.",
    result: "Reduced manual record handling and centralized patient data into a single mobile-first system.",
    accent: "from-violet-500/30 to-fuchsia-500/20",
  },
  {
    title: "Realtime Chat Application",
    description:
      "Cross-platform chat app with 1:1 and group messaging, media sharing, typing indicators, and push notifications.",
    tech: ["Flutter", "Firebase", "FCM", "GetX"],
    challenge: "Reliable delivery and presence at low bandwidth.",
    result: "Smooth realtime UX with offline-first message queue.",
    accent: "from-sky-500/30 to-cyan-500/20",
  },
  {
    title: "Event-Driven Service Platform",
    description:
      "Event-driven platform that coordinates background jobs, notifications, and integrations across independent services.",
    tech: ["Node.js", "JavaScript", "React", "Serverless"],
    challenge: "Keeping asynchronous workflows reliable, observable, and easy to retry.",
    result: "Improved system responsiveness while decoupling long-running background work.",
    accent: "from-emerald-500/30 to-teal-500/20",
  },
  {
    title: "Serverless API Platform",
    description:
      "Scalable serverless APIs for user management, scheduled processing, and third-party integrations.",
    tech: ["Node.js", "JavaScript", "Firebase", "REST APIs"],
    challenge: "Designing stateless functions with secure access and predictable execution.",
    result: "Reduced infrastructure overhead and enabled independent feature deployments.",
    accent: "from-amber-500/30 to-orange-500/20",
  },
  {
    title: "Appointment Management System",
    description:
      "Slot-based booking system with calendar sync, reminders, and admin dashboards for service providers.",
    tech: ["Flutter", "Firebase", "FastAPI"],
    challenge: "Conflict-free scheduling across time zones and providers.",
    result: "Fewer no-shows and a clean self-serve booking experience.",
    accent: "from-pink-500/30 to-rose-500/20",
  },
  {
    title: "Fire Safety Platform",
    description:
      "Compliance and inspection platform for fire-safety checks, audits, and certifications with mobile field tooling.",
    tech: ["Flutter", "FastAPI", "SQL"],
    challenge: "Digitizing offline inspection workflows reliably.",
    result: "Faster audits and a single source of truth for compliance.",
    accent: "from-red-500/30 to-orange-500/20",
  },
];

export const services = [
  { title: "Mobile App Development", desc: "Production-ready Flutter and Android applications." },
  { title: "Web Application Development", desc: "Responsive, maintainable interfaces built with React." },
  { title: "Backend Development", desc: "Reliable APIs and services with Python, FastAPI, and Node.js." },
  { title: "Firebase Integration", desc: "Authentication, Firestore, messaging, storage, and security rules." },
  { title: "App Modernization", desc: "Legacy application upgrades, architecture improvements, and migrations." },
  { title: "Workflow Engineering", desc: "Document processing, search, automation, and event-driven workflows." },
];

export const socials = [
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: SiGmail },
  { label: "Phone", href: `tel:${profile.phone}`, icon: FiPhone },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const contactIcons = { mail: FiMail, phone: FiPhone };
