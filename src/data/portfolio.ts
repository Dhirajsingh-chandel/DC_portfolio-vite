import {
  SiFlutter, SiDart, SiFirebase, SiAndroid, SiKotlin,
  SiFastapi, SiPython, SiPostgresql, SiOpensearch,
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss,
  SiOpenai, SiLangchain, SiHuggingface,
  SiGithub, SiGmail,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FiSmartphone, FiServer, FiCpu, FiDatabase, FiLayout, FiPhone, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";

export const profile = {
  name: "Dhiraj Chandel",
  roles: ["Flutter Developer", "AI Developer", "Full Stack Engineer"],
  tagline:
    "Building modern mobile applications, AI-powered solutions, and scalable software experiences.",
  experience: "3+ Years",
  location: "India",
  email: "abcd@gmail.com",
  phone: "8372345328",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};

export const heroBadges = ["Flutter", "FastAPI", "RAG", "AI Agents", "Firebase", "OpenSearch"];

export const about = [
  "I'm a developer from India with 3+ years of experience crafting production mobile apps with Flutter, building robust Python/FastAPI backends, and shipping AI-powered features that feel genuinely useful.",
  "My day-to-day spans Flutter app architecture (GetX, BLoC, Riverpod), Firebase, REST APIs, OpenSearch and lately a lot of agentic AI — RAG pipelines, LLM tooling, and AI automation.",
  "I care about clean architecture, smooth UX, and solving real problems — whether that's a hospital management system, a chat platform, or an AI assistant talking to your own data.",
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
      { name: "REST APIs", icon: FiServer },
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
    title: "AI Development",
    icon: FiCpu,
    skills: [
      { name: "RAG", icon: SiLangchain },
      { name: "AI Agents", icon: SiOpenai },
      { name: "Prompt Eng.", icon: SiHuggingface },
      { name: "LLM Apps", icon: SiOpenai },
    ],
  },
  {
    title: "Databases & Search",
    icon: FiDatabase,
    skills: [
      { name: "OpenSearch", icon: SiOpensearch },
      { name: "SQL", icon: SiPostgresql },
      { name: "Firestore", icon: SiFirebase },
    ],
  },
];

export const experiences = [
  {
    company: "DCB",
    role: "Flutter & AI Developer",
    period: "Present",
    points: [
      "Architecting Flutter mobile applications for production",
      "Building FastAPI backends with OpenSearch integrations",
      "Designing RAG pipelines and AI agents for real workflows",
      "Shipping AI-powered features end to end",
    ],
    stack: ["Flutter", "FastAPI", "OpenSearch", "Python", "RAG", "AI Agents"],
  },
  {
    company: "XYZ",
    role: "Flutter Developer",
    period: "Past",
    points: [
      "Built and maintained Flutter mobile apps",
      "Integrated Firebase (Auth, Firestore, Cloud Messaging)",
      "Connected REST APIs and handled state management",
      "Published applications to the Google Play Store",
    ],
    stack: ["Flutter", "Dart", "Firebase", "REST APIs"],
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
    title: "AI Agent Platform",
    description:
      "Agentic AI platform where users compose multi-step agents with tools, memory, and structured outputs.",
    tech: ["FastAPI", "Python", "LLMs", "Next.js"],
    challenge: "Orchestrating tool-using agents safely with predictable behavior.",
    result: "Cut repetitive workflows by automating multi-step reasoning over internal data.",
    accent: "from-emerald-500/30 to-teal-500/20",
  },
  {
    title: "RAG Assistant",
    description:
      "Retrieval-Augmented assistant grounded on private documents using OpenSearch as the vector + lexical store.",
    tech: ["FastAPI", "OpenSearch", "Python", "LLMs"],
    challenge: "Hybrid retrieval that stays accurate on long, messy enterprise documents.",
    result: "Trustworthy answers with cited sources from internal knowledge bases.",
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

export const aiCapabilities = [
  { title: "RAG Pipelines", desc: "Hybrid retrieval over private data with grounded, cited answers." },
  { title: "AI Agents", desc: "Tool-using agents with memory, planning, and structured outputs." },
  { title: "Agentic AI", desc: "Multi-step autonomous workflows that act, not just chat." },
  { title: "Prompt Engineering", desc: "Reliable prompts, evals, and guardrails for production LLMs." },
  { title: "AI Automation", desc: "Replacing repetitive workflows with LLM-driven orchestration." },
  { title: "LLM Applications", desc: "End-to-end LLM apps from API to UI, optimized for cost and latency." },
];

export const services = [
  { title: "Flutter App Development", desc: "Production-grade cross-platform mobile apps." },
  { title: "AI Agent Development", desc: "Custom agents with tools, memory, and structured workflows." },
  { title: "FastAPI Development", desc: "Typed, fast, well-documented Python backends." },
  { title: "Firebase Integration", desc: "Auth, Firestore, FCM, Storage and security rules." },
  { title: "Mobile App Consulting", desc: "Architecture reviews and roadmap planning for mobile teams." },
  { title: "AI Integration", desc: "Add RAG, agents, and LLM features to existing products." },
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: SiGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: SiGmail },
  { label: "Phone", href: `tel:${profile.phone}`, icon: FiPhone },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI", href: "#ai" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const contactIcons = { mail: FiMail, phone: FiPhone };