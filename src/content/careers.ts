/** Open roles for /careers. Each one also gets JobPosting structured data. */
export type Role = {
  title: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  location: string;
  remote: boolean;
  /** Link to the application form or job listing. */
  applyUrl: string;
  /** ISO date the role was posted. */
  posted: string;
  summary: string;
};

export const roles: Role[] = [];

export const whyWorkHere: { title: string; text: string }[] = [
  { title: "Ownership", text: "You own what you ship, from the first commit to the fix after launch." },
  { title: "AI-first tooling", text: "AI handles the repetitive work, so your time goes on the interesting problems." },
  { title: "Game-studio craft", text: "We care about feel, feedback and motion in everything we build." },
  { title: "Senior people around you", text: "A small team where you work directly with the founders and leads." },
];

export const hiringSteps: { title: string; text: string }[] = [
  { title: "Send your work", text: "Apply for a role, or send work you're proud of if none fits." },
  { title: "Intro call", text: "30 minutes with a lead about what you've built and what you want next." },
  { title: "Practical task", text: "A short task based on the kind of work we actually do – no puzzles." },
  { title: "Meet the founders", text: "A final conversation, then a decision and an offer." },
];
