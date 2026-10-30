export type Project = {
  title: string;
  description: string;
  stack: string[];
  kind: "real" | "personal";
  tone: "sky" | "rose" | "dark";
  link?: { href: string; label: string };
  image?: string;
};

export const projects: Project[] = [


  {
    title: "Rahat Boat Management",
    description:
      "A boat management platform featuring a responsive interface for managing boat-related operations, with a clean and user-friendly design.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    kind: "real",
    tone: "dark",
    image: "/UPBOAT.jpg",
    link: { href: "https://boat.uprahat.com/", label: "Visit live site" },
  },

  {
    title: "Uttar Pradesh Bhumi Sudhar Nigam website",
    description:
      "Public website pages and layouts, including the About Us page and shared header and footer.",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    kind: "real",
    tone: "dark",
    image: "/BS.png",
    link: { href: "https://demo2.techsseract.com/upbsn/", label: "Visit live site" },
  },

  {
    title: "UpMyFleet",
    description: "A fleet management app built from reusable components.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    kind: "real",
    tone: "sky",
    image: "/mvdasp.png",
    link: { href: "https://upmyfleet.com/", label: "Visit live site" },
  },
  {
    title: "Suzanne Paris",
    description: "A fashion website that feels smooth on phones and desktops.",
    stack: ["React", "HTML", "CSS"],
    kind: "real",
    tone: "rose",
    image: "/suz.png",
    link: { href: "https://suzanneparis.com/", label: "Visit live site" },

  },

  {
    title: "Brew & Beyond",
    description: "A dynamic coffee shop web app with a responsive ordering experience.",
    stack: ["React", "Tailwind CSS"],
    kind: "personal",
    tone: "rose",
    image: "/brw.png",
    link: { href: "https://brew-and-beyond-eta.vercel.app/", label: "Live demo" },
  },

  {
    title: "Admin dashboard",
    description: "Dashboard modules and validated forms connected to REST APIs.",
    stack: ["React", "Tailwind CSS", "Axios", "React Query"],
    kind: "personal",
    tone: "sky",
  },

  {
    title: "ShopEasy",
    description: "Dashboard modules and validated forms connected to REST APIs.",
    stack: ["React", "Tailwind CSS", "Axios", "React Query"],
    kind: "personal",
    tone: "sky",
    image: "/Shop.png",
    link: { href: "https://shopsphere-frontend-8cmx.onrender.com", label: "Live demo" }
  },

];