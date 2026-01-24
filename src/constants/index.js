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
  automation,
  robotics,
  vision,
  matlab
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
  { title: "C++", icon: cpp },
  { title: "C", icon: c },
  { title: "Angular", icon: angular },
  { title: "MATLAB", icon: matlab },
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
    date: "2024 - Present",
    points: [
      "Developed a high-security industrial control system (ICS) solution (GE Vernova’s ICS Security Management Suite), implementing ICSArmor as a hardened host for cyber-security toolchain.",
      "Implemented PKI infrastructure for device trust and certificate management in alignment with IEC 62351-8.",
      "Built and managed LDAP-based authentication integrated with Active Directory via ICS Security Management Suite, enabling role-based access control (RBAC) and two-factor authentication."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Alten UK - Innovation LAB",
    icon: alten,
    iconBg: "#161329",
    date: "2023 - 2024",
    points: [
      "Developed a RESTful backend API using Flask and SQLAlchemy to automatically detect and identify objects in live video streams from a mobile application, leveraging PyTorch-based deep learning models.",
      "Designed and implemented a backend pipeline for 3D CAD model generation from mobile-captured images using computer vision and 3D reconstruction techniques.",
      "Applied PyTorch and OpenCV for deep learning and image processing workflows, enabling automated 3D model reconstruction and generation."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "University of Lancashire",
    icon: uclan,
    iconBg: "#161329",
    date: "2021 - 2023",
    points: [
      "Developed software for a 6-DOF industrial robotic system with object detection, implementing inverse kinematics algorithms, control logic, and system integration using C++, Assembly, and MATLAB, in collaboration with mechanical and electronic components.",
      "Built a data-driven body stability analysis application, processing EMG and motion data to model the impact of temperature changes on human stability; implemented data pipelines, visualization, and machine learning models using Python, Pandas, Matplotlib, OpenCV, and PyTorch.",
      "Developed an automated production line system integrating electrical and hydraulic subsystems with a computer vision–based auto-picking mechanism; implemented PLC control logic (ladder diagrams), vision processing, and system-level software using C# and C++."
    ],
  },
];

export const projects = [
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
    name: "PhotoPart Pro",
    description:
      "PhotoPart Pro is a mobile app that converts images and videos into 3D models using advanced computer vision and photogrammetry. It supports mesh smoothing, scaling, CAD alignment, and repair for 3D printing, making it ideal for manufacturing, VR, robotics, and reverse engineering.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Flask", color: "pink-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
    ],
    image: photopartpro,
    source_code_link: "https://medium.com/alten-uk-innovation-lab/photopart-pro-transforming-images-and-videos-into-3d-models-930a0269bfe8",
  },
  {
    name: "VR Vision",
    description:
      "Worked as part of a team developing a VR-assisted maintenance solution, where technicians wear VR glasses that provide step-by-step instructions for machine repair. The system automatically detects task completion in real time, guiding technicians through each repair step and validating whether tasks are performed correctly.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Pytorch", color: "green-text-gradient" },
      { name: "Flask", color: "pink-text-gradient" }
    ],
    image: vision,
    source_code_link: "",
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
  },
  {
  name: "Automation (S10) UI updater",
  description:
    "Built a marine HMI auto-update tool as part of the S10 automation system, enabling safe and automated updates of UI symbols while preserving aliases and correctly updating individual UI elements.",
  tags: [
    { name: "Python", color: "blue-text-gradient" },
    { name: "C#", color: "green-text-gradient" },
    { name: "ICONICS", color: "pink-text-gradient" }
  ],
  image: automation,
  source_code_link:
    "https://www.gevernova.com/power-conversion/product-solutions/Automation-and-Control",
  },
  {
  name: "Auto Picker Robot",
  description:
    "Built a robotic system that automatically detects objects using image processing techniques, estimates their position in space, and computes inverse kinematics to autonomously plan motion and pick up the object.",
  tags: [
    { name: "C++", color: "green-text-gradient" },
    { name: "MATLAB", color: "pink-text-gradient" }
  ],
  image: robotics,
  source_code_link:
    "",
  }
];
