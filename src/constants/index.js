import {
  c,
  python,
  cpp,
  angular,
  javascript,
  typescript,
  go,
  reactjs,
  nodejs,
  git,
  uclan,
  photopartpro,
  sms,
  dp,
  alten,
  ge,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "GO", icon: go },
  { title: "Python", icon: python },
  { title: "Javascript", icon: javascript },
  { title: "Typescript", icon: typescript },
];

export const technologies = [
  { name: "Angular", icon: angular },
  { name: "Rect JS", icon: reactjs },
  { name: "C++", icon: cpp },
  { name: "C", icon: c },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "GE Vernova",
    icon: ge,
    iconBg: "#161329",
    date: "Sep 2024 - Present",
    points: [
      "Developed a high-security industrial control system (ICS) solution (GE Vernova’s ICS Security Management Suite), implementing ICSArmor as a hardened host for cyber-security toolchain.",
      "Implemented PKI infrastructure for device trust and certificate management in alignment with IEC 62351-8.",
      "Built and managed LDAP-based authentication integrated with Active Directory via ICS Security Management Suite, enabling role-based access control (RBAC) and two-factor authentication."
    ],
  },
  {
    title: "Graduate Software Engineer",
    company_name: "Alten UK - Innovation LAB",
    icon: alten,
    iconBg: "#161329",
    date: "Sep 2023 - Aug 2024",
    points: [
      "Worked on PhotoPart Pro, a system that transforms images and videos into accurate 3D models using advanced computer-vision pipelines and neural reconstruction techniques. Contributed to data processing, model training, and pipeline optimisation to improve accuracy and performance.",
      "Developed a backend system using Flask and SQLAlchemy for an AR-based maintenance assistant. Implemented a Vision Transformer (ViT) model to analyse real-time camera input from AR glasses and detect missing steps or incorrect procedures performed by technicians.",
    ],
  },
  {
    title: "Associate Lecturer",
    company_name: "University of Lancashire",
    icon: uclan,
    iconBg: "#161329",
    date: "OCT 2021 - Aug 2023",
    points: [
      "Delivered hands-on robotics instruction at UCLan, teaching students how to design and build robots from first principles. This included mechanical design, calculating inverse kinematics, and implementing computer-vision techniques for automated object detection and grasping. I also taught industrial automation concepts such as PLC programming, Arduino development, and core programming fundamentals.",
    ],
  },
];

export const projects = [
  {
    name: "PhotoPart Pro",
    description:
      "PhotoPart Pro is a mobile app that converts images and videos into 3D models using advanced computer vision and photogrammetry. It supports mesh smoothing, scaling, CAD alignment, and repair for 3D printing, making it ideal for manufacturing, VR, robotics, and reverse engineering.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Pytorch", color: "green-text-gradient" },
      { name: "Flask", color: "pink-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
    ],
    image: photopartpro,
    source_code_link: "https://medium.com/alten-uk-innovation-lab/photopart-pro-transforming-images-and-videos-into-3d-models-930a0269bfe8",
  },
  {
    name: "ICS Security Management Suite",
    description:
      "The ICS Security Management Suite is a cybersecurity solution for industrial control systems, handling user management, certificate management, authentication, and authorization to ensure secure access and compliance.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "Typescript", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "Go", color: "pink-text-gradient" },
      { name: "SQLite", color: "pink-text-gradient" },
    ],
    image: sms,
    source_code_link: "https://www.gevernova.com/power-conversion/services/cybersecurity/security-suite",
  },
  {
    name: "Dynamic Positioning (DP)",
    description:
      "The SeaStream DP system is a dynamic positioning (DP) solution for vessels that keeps them precisely at heading and position by automatically controlling thrusters. Its energy‑efficient mode uses predictive software to optimise thrust, cutting fuel use and emissions.",
    tags: [
      { name: "C", color: "blue-text-gradient" },
      { name: "C#", color: "green-text-gradient" },
      { name: "MATLAB", color: "pink-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" }
    ],
    image: dp,
    source_code_link:
      "https://www.gevernova.com/power-conversion/product-solutions/automation-control/seastream-dp",
  }
];
