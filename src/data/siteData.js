// export const resumeUrl = `${process.env.PUBLIC_URL}/Kishore_RM_Resume.pdf`;
// export const profilePicture = `${process.env.PUBLIC_URL}/Profile_picture.jpeg`; // Place your profile image in public/profile.jpg
// export function ProfilePicture({ size = 80 }) {
//   return (
//     <img
//       src={profilePicture}
//       alt="Profile"
//       className="rounded-circle shadow-lg border border-3 border-white ms-3"
//       style={{ width: `${size}px`, height: `${size}px`, objectFit: 'cover' }}
//     />
//   );
// }

// export const contact = {
//   name: "Kishore R M",
//   title: "Software Development Engineer",
//   location: "Allen, Texas (Open to Relocate)",
//   phone: "+1 518-614-3857",
//   email: "kmuchintala02@gmail.com",
//   github: "https://github.com/KishoreMuchintala",
//   linkedin: "https://www.linkedin.com/in/kishorerm/",
// };

// export const highlights = [
//   "4.5+ years building scalable, high‑throughput systems",
//   "Microservices, event‑driven architectures, GraphQL",
//   "PostgreSQL, MongoDB, Redis performance tuning",
//   "AWS‑first delivery with CI/CD & observability",
//   "WCAG 2.1 accessibility and design systems",
//   "35% UI render‑time reduction via profiling & metrics",
// ];

// export const skills = {
//   Programming: ["Java", "Python", "TypeScript", "JavaScript (ES6+)", "Kotlin", "SQL", "Bash"],
//   Frameworks: ["Spring Boot", "Express.js", "React", "Next.js", "Tailwind CSS", "React Testing Library", "Webpack Module Federation", "SpringDoc", "Headless UI"],
//   "Cloud & DevOps": [
//     "AWS (Lambda, API Gateway, RDS, AppConfig, Step Functions, S3, CloudWatch, Cognito, VPC)",
//     "Docker",
//     "Kubernetes",
//     "Jenkins",
//     "GitHub Actions"
//   ],
//   Databases: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis"],
//   Testing: ["JUnit", "Postman", "Swagger/OpenAPI", "CloudWatch Logs Insights", "Grafana"],
//   Tools: ["Jira", "Git", "VS Code", "Linux", "macOS", "Windows"],
// };

// export const projects = [
//   {
//     title: "Airline Transaction Microservices Platform",
//     stack: ["Spring Boot", "GraphQL", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
//     description:
//       "Built RESTful + GraphQL microservices powering high‑throughput airline workflows. Implemented caching, schema versioning, and materialized views to accelerate queries and maintain multi‑tenant isolation.",
//     impact: [
//       "Reduced over‑fetching with GraphQL and improved responsiveness",
//       "35% performance gain via React profiling and custom CloudWatch metrics",
//       "Helm‑based deployments with service discovery and load balancing",
//     ],
//   },
//   {
//     title: "FEMA Message Design Dashboard",
//     stack: ["React", "Next.js 14", "AWS Lambda", "PostgreSQL", "Amplify UI", "Cognito", "Tailwind"],
//     description:
//       "Secure, real‑time dashboard improving emergency communication workflows with accessibility‑by‑default components and infrastructure‑as‑code.",
//     impact: [
//       "WCAG 2.1 compliant UI (keyboard, screen readers, responsive)",
//       "Automated CI/CD via GitHub Actions and CloudFormation",
//       "Proactive monitoring with CloudWatch and custom metrics",
//     ],
//   },
//   {
//     title: "Plugin‑Ready Micro Frontend Architecture",
//     stack: ["React", "Webpack Module Federation", "Tailwind", "Headless UI"],
//     description:
//       "Composable, client‑specific features enabled at runtime via Module Federation with independent team deployments and design‑system cohesion.",
//     impact: [
//       "Accelerated delivery via reusable components & theming",
//       "Runtime integration for client‑specific needs",
//       "Improved onboarding with self‑documenting APIs",
//     ],
//   },
// ];

// export const insights = [
//   {
//     title: "Workday Candidate Experience — fix the account creation loop",
//     summary:
//       "Applying via Workday often leads to a confusing loop when creating an account: no clear success, error, or 'account already exists' message. Suggested UX tweaks: show explicit existing-account notice, confirm success instantly, and display precise errors without delay to reduce candidate friction.",
//     url: "https://www.linkedin.com/posts/activity-7359788244605022208-jkGC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJHJxoByo1nhJCqrPFCzUeCKFtIR35qR4Y",
//     embedUrl: "",
//     tags: ["CandidateExperience", "JobSearch", "UX", "Workday", "HRTech", "Recruitment", "Hiring", "ProductDesign"],
//     date: "" // optional: add YYYY-MM-DD if you want the exact post date
//   },
//   {
//     title: "Walmart+ — monthly/annual spend statement for power users",
//     summary:
//       "As a long-time Walmart+ customer with high monthly spend, proposed a consolidated statement/report feature to track expenditures without digging through orders—similar to credit card statements. This would delight heavy users, reduce friction, and unlock AI-friendly personal insights.",
//     url: "https://www.linkedin.com/posts/activity-7349142820806410243-pIZz?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJHJxoByo1nhJCqrPFCzUeCKFtIR35qR4Y",
//     embedUrl: "",
//     tags: ["Walmart", "WalmartPlus", "CustomerExperience", "ProductSuggestion", "UXDesign", "MagenticUI", "AIAutomation", "RetailInnovation"],
//     date: "" // optional
//   },
//   {
//     title: "AWS Dev Hour: Learn Gen AI from Scratch — S1E1 takeaways",
//     summary:
//       "Highlighted a hands-on session showing how to build GenAI-powered features with AWS tools. Great on-ramp for developers—clear, practical, and motivating for anyone exploring the AI + Cloud intersection.",
//     url: "https://www.linkedin.com/posts/activity-7345596009185452032-sGaC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJHJxoByo1nhJCqrPFCzUeCKFtIR35qR4Y",
//     embedUrl: "",
//     tags: ["AWSDevHour", "GenAI", "AWSTraining", "CloudDevelopment", "VibeCode", "BuildOnAWS", "GenerativeAI", "LearningNeverStops"],
//     date: "" // optional
//   },  
// ];

// export const experience = [
//   {
//     role: "Senior Software Engineer",
//     company: "Singular Analysts Inc (USA)",
//     period: "Sep 2024 – Present",
//     bullets: [
//       "Integrated GraphQL APIs into Spring Boot; reduced over‑fetching on the frontend",
//       "Event‑driven pipelines with Kafka for flight status & booking confirmations",
//       "Redis caching for seat availability and sessions; Helm + K8s deployments",
//       "Feature‑flag system using AWS AppConfig and Lambda layers",
//       "Self‑documenting APIs via SpringDoc & Kotlin DSL; accelerated onboarding",
//       "Re‑architected data models with materialized views & partial indexes",
//       "E2E + component tests embedded in CI/CD; Dynatrace + CloudWatch monitoring",
//       "Design system in React with accessibility hooks; 35% render‑time reduction",
//       "Micro‑frontend architecture with Module Federation; independent deployments",
//     ],
//   },
//   {
//     role: "Full Stack Developer",
//     company: "Center for Technology in Government (USA)",
//     period: "Jan 2023 – Dec 2023",
//     bullets: [
//       "Real‑time FEMA MDD using React/Next.js; integrated testing via Jira",
//       "Kafka Connect + Schema Registry; complex SQL for itinerary tracking",
//       "K8s readiness/liveness probes; auto‑scaling & quotas",
//       "Backend on AWS Lambda + RDS; reusable Python frameworks",
//       "Amplify UI + Cognito for authN/authZ; VPC + IAM for compliance",
//       "CI/CD via Jenkins/CloudFormation; WCAG 2.1 compliance",
//       "Swagger/OpenAPI docs; CloudWatch monitoring & alerting",
//     ],
//   },
//   {
//     role: "Senior Software Engineer",
//     company: "ValueLabs LLC (India)",
//     period: "Oct 2019 – Jul 2022",
//     bullets: [
//       "Developed 50+ RESTful APIs with Spring Boot & AWS; RDS‑backed storage",
//       "React + Spring Boot integration; Dockerized microservices",
//       "Cognito + 2FA with TDD; hybrid on‑prem & AWS deployments",
//       "Optimized SQL for PostgreSQL/MySQL; improved throughput",
//     ],
//   },
// ];

// export const education = [
//   { degree: "M.S., Data Science", school: "University at Albany, NY", period: "Aug 2022 – May 2024" },
//   { degree: "B.Tech., Electronics & Communications", school: "S R University, India", period: "Jun 2016 – May 2020" },
// ];

// export const certifications = [
//   { name: "AWS Certified Cloud Practitioner" },
//   { name: "Agile Software Development – Completed (Shashi Shekhar)" }
// ];



export const resumeUrl = `${process.env.PUBLIC_URL}/Kishore_RM_Resume.pdf`;
export const profilePicture = `${process.env.PUBLIC_URL}/Profile_picture.jpeg`;

export function ProfilePicture({ size = 80 }) {
  return (
    <img
      src={profilePicture}
      alt="Kishore R M"
      className="rounded-circle shadow-lg border border-3 border-white ms-3"
      style={{ width: `${size}px`, height: `${size}px`, objectFit: 'cover' }}
    />
  );
}

export const contact = {
  name: "Kishore R M",
  title: "Senior Full Stack & CMS Engineer",
  location: "Dallas / Allen, Texas (Open to Relocate)",
  phone: "+1 (518) 614-3857",
  email: "kmuchintala02@gmail.com",
  github: "https://github.com/KishoreMuchintala",
  linkedin: "https://www.linkedin.com/in/kishorerm/",
};

export const highlights = [
  "6+ years building scalable microservices, CMS platforms, and dynamic frontend experiences",
  "Expertise spanning Java 21, Spring Boot, React.js, Next.js, GraphQL, & AEM",
  "High-throughput microservices, event-driven architectures (Kafka), and cloud-native solutions (AWS, K8s)",
  "Database tuning (PostgreSQL, MongoDB, Redis) and GraphQL over-fetching reduction",
  "WCAG 2.1 accessibility compliance, design systems, and Webpack Module Federation micro-frontends",
  "35% UI render-time reduction via profiling and custom CloudWatch metrics",
];

export const skills = {
  "Frontend Development": [
    "React.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Next.js 14",
    "Redux Toolkit",
    "HTML5 / CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Material-UI",
    "Webpack Module Federation",
    "Headless UI",
    "AJAX"
  ],
  "Backend & APIs": [
    "Java (11, 21)",
    "Spring Boot",
    "Spring Cloud",
    "Microservices",
    "GraphQL",
    "RESTful APIs",
    "Node.js",
    "Express.js",
    "Python",
    "Kotlin",
    "Apache Kafka",
    "gRPC",
    "WebSockets",
    "SpringDoc / OpenAPI"
  ],
  "CMS & E-Commerce": [
    "Adobe Experience Manager (AEM)",
    "Java Sling Models",
    "HTL / Sightly",
    "Component & Template Development",
    "Metadata & Tagging Management",
    "Context-Aware Configurations",
    "Promotional Dashboards"
  ],
  "Cloud & DevOps": [
    "AWS (Lambda, ECS, EKS, API Gateway, RDS, AppConfig, S3, CloudWatch, Cognito, VPC, CloudFormation)",
    "Docker",
    "Kubernetes",
    "Helm",
    "Jenkins",
    "GitHub Actions",
    "Terraform",
    "ArgoCD"
  ],
  "Databases & Caching": [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "DynamoDB",
    "Redis",
    "ElastiCache",
    "Oracle",
    "SQL Server"
  ],
  "Testing & Observability": [
    "JUnit",
    "Mockito",
    "Cucumber (BDD)",
    "React Testing Library",
    "Postman",
    "Dynatrace",
    "Grafana",
    "ELK Stack (Elasticsearch, Logstash, Kibana)",
    "Prometheus",
    "CloudWatch Logs Insights"
  ],
  "Methodologies & Tools": [
    "Agile / Scrum / Kanban",
    "Git / GitHub / GitLab",
    "Jira",
    "Confluence",
    "Linux",
    "macOS",
    "VS Code"
  ]
};

export const projects = [
  {
    title: "Project Mandara — IQEA (Freelance)",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "State Management"],
    description:
      "Architecting and building a dynamic, responsive React.js web interface for an emerging startup under IQEA. Focused on modular component design, optimal state handling, and seamless RESTful API integration.",
    impact: [
      "Engineered high-performance, reusable UI components for rapid product feature iterations",
      "Delivered responsive, cross-browser interfaces designed for scalability and high usability",
      "Collaborated directly with startup stakeholders to translate business workflows into UI architecture",
    ],
  },
  {
    title: "Promotional & Content Engine — Royal Caribbean Group",
    stack: ["AEM", "Java 21", "React.js", "GraphQL", "Sling Models", "HTL/Sightly", "Jenkins"],
    description:
      "Enterprise CMS and promotional dashboard architecture powering global marketing campaigns, multi-tier promotions, and localized customer experiences across web properties.",
    impact: [
      "Upgraded core backend infrastructure from Java 11 to Java 21 for enhanced LTS security and API performance",
      "Architected React promotional dashboard interacting with AEM source code via optimized GraphQL queries",
      "Built dynamic, Context-Aware alert banner systems and HTL-decoupled view logic for content authors",
    ],
  },
  {
    title: "Airline Transaction Microservices Platform",
    stack: ["Spring Boot", "GraphQL", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Helm"],
    description:
      "High-throughput microservices architecture supporting critical flight workflows, real-time seat availability queries, and automated booking confirmations.",
    impact: [
      "Reduced payload over-fetching by integrating GraphQL into Spring Boot microservices",
      "Achieved 35% frontend performance improvement using React profiling and custom CloudWatch metrics",
      "Deployed resilient K8s clusters using Helm charts with Spring Cloud Eureka/Ribbon service discovery",
    ],
  },
  {
    title: "FEMA Message Design Dashboard (MDD)",
    stack: ["React", "Next.js 14", "AWS Lambda", "PostgreSQL (RDS)", "Kafka", "Amplify UI", "Cognito", "Tailwind"],
    description:
      "Government-grade emergency communication platform providing real-time message distribution, high security, and strict accessibility compliance.",
    impact: [
      "Delivered fully WCAG 2.1 AA compliant interfaces (screen readers, keyboard navigation, responsive layout)",
      "Decreased development cycle times by 30% using reusable serverless Python/Java AWS Lambda frameworks",
      "Architected zero-trust FISMA/NIST compliant authentication using AWS Cognito and VPC access controls",
    ],
  },
  {
    title: "Plugin-Ready Micro Frontend Architecture",
    stack: ["React", "Webpack Module Federation", "Tailwind CSS", "Headless UI"],
    description:
      "Composable micro-frontend platform allowing independent engineering teams to deploy client-specific feature plugins at runtime without redeploying the core container.",
    impact: [
      "Accelerated feature delivery while enforcing design system consistency across multiple product teams",
      "Implemented runtime plugin integration for highly custom corporate client needs",
    ],
  },
];

export const experience = [
  {
    role: "Frontend Developer (Freelance)",
    company: "IQEA — Startup",
    period: "Present",
    bullets: [
      "Supporting Project Mandara, building a high-performance React.js frontend application tailored for startup workflows.",
      "Developing modular, accessible, and responsive user interfaces using modern React conventions, TypeScript, and clean state management.",
      "Integrating frontend views with backend RESTful APIs, optimizing user experience, load speed, and cross-device consistency.",
    ],
  },
  {
    role: "Senior Software Engineer / CMS Developer",
    company: "Royal Caribbean Group (USA)",
    period: "Oct 2025 – Present",
    bullets: [
      "Modernized enterprise backend infrastructure by upgrading codebase from Java 11 to Java 21, achieving LTS security compliance and boosted API execution speeds.",
      "Architected a React-based promotional dashboard interfacing with AEM source code via optimized GraphQL queries, enabling single-click management of multi-tier promotions, perks, and merchandising alerts.",
      "Authored and published high-impact digital content across enterprise AEM platforms, utilizing custom Sling Models, HTL/Sightly, and Context-Aware Configurations.",
      "Built reusable, responsive UI components using HTML5, CSS3, JavaScript (ES6+), and React integrated seamlessly into AEM templates.",
      "Established automated CI/CD deployment pipelines using GitHub Actions, Jenkins, and Maven to ensure bug-free, zero-downtime releases.",
      "Orchestrated content release packaging and multi-project digital asset management, keeping global e-commerce systems in sync across global environments.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Singular Analysts Inc (USA)",
    period: "Jun 2024 – Oct 2025",
    bullets: [
      "Integrated GraphQL APIs into Spring Boot microservices for high-throughput airline transaction workflows, cutting frontend data over-fetching.",
      "Engineered event-driven streaming pipelines with Kafka producers/consumers for real-time flight status updates and booking confirmations.",
      "Optimized query performance and multi-tenant data isolation in PostgreSQL and MongoDB using materialized views, partial indexes, and schema versioning.",
      "Designed feature-flag infrastructure using AWS AppConfig and Lambda layers, enabling dynamic backend rollouts without requiring service redeployments.",
      "Containerized microservices with Docker, deploying to Kubernetes using Helm charts with automated liveness/readiness probes.",
      "Constructed a custom React design system with Tailwind CSS, Headless UI, and accessibility hooks, achieving a 35% UI render-time reduction via React Profiler.",
      "Implemented micro-frontend architecture leveraging Webpack Module Federation for independent team deployments and runtime feature integration.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Center for Technology in Government (USA)",
    period: "Jan 2023 – Dec 2023",
    bullets: [
      "Engineered the FEMA Message Design Dashboard (MDD) using React, Next.js 14, and Spring Boot microservices for emergency communications.",
      "Developed serverless backends using AWS Lambda and RDS (PostgreSQL), reducing development cycle time by 30%.",
      "Configured zero-trust cloud security with AWS VPCs, IAM policies, and Cognito User Pools to meet FISMA/NIST government standards.",
      "Integrated Kafka Connect with Schema Registry to ensure strong data contracts and seamless inter-service communication.",
      "Achieved full WCAG 2.1 accessibility compliance using Tailwind CSS, keyboard navigation support, and screen-reader optimizations.",
      "Automated infrastructure-as-code deployments using CloudFormation, Jenkins, and GitHub Actions with automated BDD testing (Cucumber, JUnit).",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "ValueLabs LLC (India)",
    period: "Oct 2019 – Jul 2022",
    bullets: [
      "Architected and deployed 50+ RESTful APIs with Spring Boot, AWS Lambda, and API Gateway backed by PostgreSQL on AWS RDS.",
      "Integrated ReactJS frontends with Spring Boot backends following SOLID/OOD principles to improve system scalability.",
      "Orchestrated hybrid cloud deployments across on-premises servers and AWS (Elastic Beanstalk, EC2, CloudFormation) for 10,000+ active users.",
      "Established enterprise security frameworks using AWS Cognito, OAuth 2.0, JWT, and 2FA with role-based access control (RBAC).",
      "Optimized relational databases (PostgreSQL, MySQL) via query tuning, indexing, and Redis caching, improving throughput by 35%.",
      "Championed TDD/BDD engineering methodologies, achieving over 90% unit test coverage using JUnit, Mockito, and Cucumber.",
    ],
  },
];

export const education = [
  { 
    degree: "M.S., Data Science", 
    school: "University at Albany, State University of New York", 
    period: "Aug 2022 – May 2024" 
  },
  { 
    degree: "B.Tech., Electronics & Communications Engineering", 
    school: "S R University, Telangana, India", 
    period: "Jun 2016 – May 2020" 
  },
];

export const certifications = [
  { name: "AWS Certified Cloud Practitioner" },
  { name: "Agile Software Development — Completed (Shashi Shekhar)" }
];

export const insights = [
  {
    title: "Workday Candidate Experience — fix the account creation loop",
    summary:
      "Applying via Workday often leads to a confusing loop when creating an account: no clear success, error, or 'account already exists' message. Suggested UX tweaks: show explicit existing-account notice, confirm success instantly, and display precise errors without delay to reduce candidate friction.",
    url: "https://www.linkedin.com/posts/activity-7359788244605022208-jkGC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJHJxoByo1nhJCqrPFCzUeCKFtIR35qR4Y",
    embedUrl: "",
    tags: ["CandidateExperience", "JobSearch", "UX", "Workday", "HRTech", "Recruitment", "Hiring", "ProductDesign"],
    date: ""
  },
  {
    title: "Walmart+ — monthly/annual spend statement for power users",
    summary:
      "As a long-time Walmart+ customer with high monthly spend, proposed a consolidated statement/report feature to track expenditures without digging through orders—similar to credit card statements. This would delight heavy users, reduce friction, and unlock AI-friendly personal insights.",
    url: "https://www.linkedin.com/posts/activity-7349142820806410243-pIZz?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJHJxoByo1nhJCqrPFCzUeCKFtIR35qR4Y",
    embedUrl: "",
    tags: ["Walmart", "WalmartPlus", "CustomerExperience", "ProductSuggestion", "UXDesign", "MagenticUI", "AIAutomation", "RetailInnovation"],
    date: ""
  },
  {
    title: "AWS Dev Hour: Learn Gen AI from Scratch — S1E1 takeaways",
    summary:
      "Highlighted a hands-on session showing how to build GenAI-powered features with AWS tools. Great on-ramp for developers—clear, practical, and motivating for anyone exploring the AI + Cloud intersection.",
    url: "https://www.linkedin.com/posts/activity-7345596009185452032-sGaC?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJHJxoByo1nhJCqrPFCzUeCKFtIR35qR4Y",
    embedUrl: "",
    tags: ["AWSDevHour", "GenAI", "AWSTraining", "CloudDevelopment", "VibeCode", "BuildOnAWS", "GenerativeAI", "LearningNeverStops"],
    date: ""
  },  
];