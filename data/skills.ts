export type IconName = "frontend" | "backend" | "database" | "layers";

export type SkillGroup = {
  label: string;
  title: string;
  icon: IconName;
  items: string[];
  points?: string[];
};

export const frontend: SkillGroup = {
  label: "Interface",
  title: "Frontend",
  icon: "frontend",
  items: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Bootstrap",
    "Tailwind CSS",
    "Laravel Blade Templates",
  ],
  points: ["Responsive Web Design", "UI Development & Enhancement"],
};

export const backend: SkillGroup = {
  label: "Server",
  title: "Backend",
  icon: "backend",
  items: ["Node.js", "Express.js"],
  points: [
    "REST API Integration",
    "JWT Authentication",
    "Frontend–Backend Integration",
  ],
};

export type Database = {
  name: string;
  note: string;
};

export const databases: Database[] = [
  { name: "MongoDB", note: "NoSQL document database" },
  { name: "MongoDB Atlas", note: "Cloud-hosted MongoDB" },
  { name: "MySQL", note: "Relational SQL database" },
];

export type MernItem = {
  letter: string;
  name: string;
};

export const mern: MernItem[] = [
  { letter: "M", name: "MongoDB" },
  { letter: "E", name: "Express.js" },
  { letter: "R", name: "React.js" },
  { letter: "N", name: "Node.js" },
];

export const mernPoints = [
  "Full Stack Web Application Development",
  "Authentication & Authorization",
];