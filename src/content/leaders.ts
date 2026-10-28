import aniketSingh from "@/assets/aniket-singh.jpg";
import karthikKS from "@/assets/karthik-k-s.jpg";
import { facts } from "@/content/facts";

/**
 * Bios use only facts the founders have confirmed. Add previous roles, education
 * and products shipped (with outcomes) to `knownFor` and `bio` once verified.
 */
export const leaders = [
  {
    name: "Aniket Singh",
    role: "Founder, Managing Director & CEO",
    location: "New Delhi, India",
    knownFor: null as string | null,
    bio: "Aniket founded ZARX Technologies to give founders a senior product team that moves at startup speed and hands over everything it builds. He leads the company's strategy and its client partnerships, and sets the commercial terms behind every engagement – from the fixed quote to IP assignment. He joins every client kickoff and monthly review.",
    accountableFor: ["Client outcomes", "Commercial terms", "Company strategy"],
    focus: ["Strategy", "Client partnerships", "IP-driven products"],
    linkedin:
      "https://www.linkedin.com/in/aniket-singh-53a401230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: facts.founderEmails["Aniket Singh"],
    image: aniketSingh,
  },
  {
    name: "Karthik K S",
    role: "Director & Chief Technology Officer",
    location: "India",
    knownFor: null as string | null,
    bio: "Karthik leads engineering at ZARX. He designed the AI-assisted delivery pipeline the team uses on every project – where AI drafts code, tests and documentation and engineers review every line – and owns the architecture, security and code-quality standards each build ships with. He leads the engineering team across web, mobile, games, Web3 and AI.",
    accountableFor: ["Architecture and code quality", "AI and security practices", "The engineering team"],
    focus: ["AI-assisted engineering", "System architecture", "Game-grade interfaces"],
    linkedin: "https://www.linkedin.com/in/karthik-k-s-183029373/",
    email: facts.founderEmails["Karthik K S"],
    image: karthikKS,
  },
];
