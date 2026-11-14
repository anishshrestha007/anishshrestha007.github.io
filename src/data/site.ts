export const site = {
  name: "Anish Shrestha",
  role: "Senior Full-Stack Engineer",
  pitch:
    "I build business software end to end with .NET Core and React: invoicing, workforce management and e-learning platforms that teams rely on every day.",
  description:
    "Anish Shrestha is a senior full-stack engineer working with .NET Core and React since 2015.",
  email: "anishronnie@gmail.com",
  resume: "/resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/anishshrestha007" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anish-shrestha-331712152",
    },
  ],
  repo: "https://github.com/anishshrestha007/anishshrestha007.github.io",
} as const;

export const skills = [
  {
    group: "Backend",
    items: ["C#", ".NET Core", "ASP.NET Web API", "Entity Framework", "Dapper"],
  },
  {
    group: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Angular", "Material UI"],
  },
  { group: "Data", items: ["SQL Server", "PostgreSQL", "T-SQL", "MongoDB"] },
  {
    group: "Practice",
    items: ["API design", "Performance tuning", "Code review", "Agile / Scrum"],
  },
] as const;
