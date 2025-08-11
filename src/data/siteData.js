export const resumeUrl = "%PUBLIC_URL%/resume.pdf";
export const profilePicture = "%PUBLIC_URL%/Profile_picture.jpeg"; // Place your profile image in public/profile.jpg
export function ProfilePicture({ size = 80 }) {
  return (
    <img
      src={profilePicture}
      alt="Profile"
      className="rounded-circle shadow-lg border border-3 border-white ms-3"
      style={{ width: `${size}px`, height: `${size}px`, objectFit: 'cover' }}
    />
  );
}

export const contact = {
  name: "Kishore R M",
  title: "Software Development Engineer",
  location: "Allen, Texas (Open to Relocate)",
  phone: "+1 518-614-3857",
  email: "kmuchintala02@gmail.com",
  github: "https://github.com/KishoreMuchintala",
  linkedin: "https://www.linkedin.com/in/kishorerm/",
};

export const highlights = [
  "4.5+ years building scalable, high‑throughput systems",
  "Microservices, event‑driven architectures, GraphQL",
  "PostgreSQL, MongoDB, Redis performance tuning",
  "AWS‑first delivery with CI/CD & observability",
  "WCAG 2.1 accessibility and design systems",
  "35% UI render‑time reduction via profiling & metrics",
];

export const skills = {
  Programming: ["Java", "Python", "TypeScript", "JavaScript (ES6+)", "Kotlin", "SQL", "Bash"],
  Frameworks: ["Spring Boot", "Express.js", "React", "Next.js", "Tailwind CSS", "React Testing Library", "Webpack Module Federation", "SpringDoc", "Headless UI"],
  "Cloud & DevOps": [
    "AWS (Lambda, API Gateway, RDS, AppConfig, Step Functions, S3, CloudWatch, Cognito, VPC)",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions"
  ],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis"],
  Testing: ["JUnit", "Postman", "Swagger/OpenAPI", "CloudWatch Logs Insights", "Grafana"],
  Tools: ["Jira", "Git", "VS Code", "Linux", "macOS", "Windows"],
};

export const projects = [
  {
    title: "Airline Transaction Microservices Platform",
    stack: ["Spring Boot", "GraphQL", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
    description:
      "Built RESTful + GraphQL microservices powering high‑throughput airline workflows. Implemented caching, schema versioning, and materialized views to accelerate queries and maintain multi‑tenant isolation.",
    impact: [
      "Reduced over‑fetching with GraphQL and improved responsiveness",
      "35% performance gain via React profiling and custom CloudWatch metrics",
      "Helm‑based deployments with service discovery and load balancing",
    ],
  },
  {
    title: "FEMA Message Design Dashboard",
    stack: ["React", "Next.js 14", "AWS Lambda", "PostgreSQL", "Amplify UI", "Cognito", "Tailwind"],
    description:
      "Secure, real‑time dashboard improving emergency communication workflows with accessibility‑by‑default components and infrastructure‑as‑code.",
    impact: [
      "WCAG 2.1 compliant UI (keyboard, screen readers, responsive)",
      "Automated CI/CD via GitHub Actions and CloudFormation",
      "Proactive monitoring with CloudWatch and custom metrics",
    ],
  },
  {
    title: "Plugin‑Ready Micro Frontend Architecture",
    stack: ["React", "Webpack Module Federation", "Tailwind", "Headless UI"],
    description:
      "Composable, client‑specific features enabled at runtime via Module Federation with independent team deployments and design‑system cohesion.",
    impact: [
      "Accelerated delivery via reusable components & theming",
      "Runtime integration for client‑specific needs",
      "Improved onboarding with self‑documenting APIs",
    ],
  },
];

export const insights = [
  {
    title: "Workday Candidate Experience — fix the account creation loop",
    summary:
      "Applying via Workday often leads to a confusing loop when creating an account: no clear success, error, or 'account already exists' message. Suggested UX tweaks: show explicit existing-account notice, confirm success instantly, and display precise errors without delay to reduce candidate friction.",
    url: "https://www.linkedin.com/posts/activity-7359788244605022208-jkGC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJHJxoByo1nhJCqrPFCzUeCKFtIR35qR4Y",
    embedUrl: "",
    tags: ["CandidateExperience", "JobSearch", "UX", "Workday", "HRTech", "Recruitment", "Hiring", "ProductDesign"],
    date: "" // optional: add YYYY-MM-DD if you want the exact post date
  },
  {
    title: "Walmart+ — monthly/annual spend statement for power users",
    summary:
      "As a long-time Walmart+ customer with high monthly spend, proposed a consolidated statement/report feature to track expenditures without digging through orders—similar to credit card statements. This would delight heavy users, reduce friction, and unlock AI-friendly personal insights.",
    url: "https://www.linkedin.com/posts/activity-7349142820806410243-pIZz?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJHJxoByo1nhJCqrPFCzUeCKFtIR35qR4Y",
    embedUrl: "",
    tags: ["Walmart", "WalmartPlus", "CustomerExperience", "ProductSuggestion", "UXDesign", "MagenticUI", "AIAutomation", "RetailInnovation"],
    date: "" // optional
  },
  {
    title: "AWS Dev Hour: Learn Gen AI from Scratch — S1E1 takeaways",
    summary:
      "Highlighted a hands-on session showing how to build GenAI-powered features with AWS tools. Great on-ramp for developers—clear, practical, and motivating for anyone exploring the AI + Cloud intersection.",
    url: "https://www.linkedin.com/posts/activity-7345596009185452032-sGaC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJHJxoByo1nhJCqrPFCzUeCKFtIR35qR4Y",
    embedUrl: "",
    tags: ["AWSDevHour", "GenAI", "AWSTraining", "CloudDevelopment", "VibeCode", "BuildOnAWS", "GenerativeAI", "LearningNeverStops"],
    date: "" // optional
  },  
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Singular Analysts Inc (USA)",
    period: "Sep 2024 – Present",
    bullets: [
      "Integrated GraphQL APIs into Spring Boot; reduced over‑fetching on the frontend",
      "Event‑driven pipelines with Kafka for flight status & booking confirmations",
      "Redis caching for seat availability and sessions; Helm + K8s deployments",
      "Feature‑flag system using AWS AppConfig and Lambda layers",
      "Self‑documenting APIs via SpringDoc & Kotlin DSL; accelerated onboarding",
      "Re‑architected data models with materialized views & partial indexes",
      "E2E + component tests embedded in CI/CD; Dynatrace + CloudWatch monitoring",
      "Design system in React with accessibility hooks; 35% render‑time reduction",
      "Micro‑frontend architecture with Module Federation; independent deployments",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Center for Technology in Government (USA)",
    period: "Jan 2023 – Dec 2023",
    bullets: [
      "Real‑time FEMA MDD using React/Next.js; integrated testing via Jira",
      "Kafka Connect + Schema Registry; complex SQL for itinerary tracking",
      "K8s readiness/liveness probes; auto‑scaling & quotas",
      "Backend on AWS Lambda + RDS; reusable Python frameworks",
      "Amplify UI + Cognito for authN/authZ; VPC + IAM for compliance",
      "CI/CD via Jenkins/CloudFormation; WCAG 2.1 compliance",
      "Swagger/OpenAPI docs; CloudWatch monitoring & alerting",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "ValueLabs LLC (India)",
    period: "Oct 2019 – Jul 2022",
    bullets: [
      "Developed 50+ RESTful APIs with Spring Boot & AWS; RDS‑backed storage",
      "React + Spring Boot integration; Dockerized microservices",
      "Cognito + 2FA with TDD; hybrid on‑prem & AWS deployments",
      "Optimized SQL for PostgreSQL/MySQL; improved throughput",
    ],
  },
];

export const education = [
  { degree: "M.S., Data Science", school: "University at Albany, NY", period: "Aug 2022 – May 2024" },
  { degree: "B.Tech., Electronics & Communications", school: "S R University, India", period: "Jun 2016 – May 2020" },
];

export const certifications = [
  { name: "AWS Certified Cloud Practitioner" },
  { name: "Agile Software Development – Completed (Shashi Shekhar)" }
];