import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Button, Card, Badge, Form } from 'react-bootstrap';

// ======= DATA =======
const resumeUrl = "/Kishore_RM_Resume.pdf"; // put your PDF in public/Kishore_RM_Resume.pdf

const contact = {
  name: "Kishore R M",
  title: "Software Development Engineer",
  location: "Allen, Texas (Open to Relocate)",
  phone: "+1 518-614-3857",
  email: "kmuchintala02@gmail.com",
  github: "https://github.com/your-username", // TODO
  linkedin: "https://www.linkedin.com/in/your-linkedin", // TODO
};

const highlights = [
  "4.5+ years building scalable, high‑throughput systems",
  "Microservices, event‑driven architectures, GraphQL",
  "PostgreSQL, MongoDB, Redis performance tuning",
  "AWS‑first delivery with CI/CD & observability",
  "WCAG 2.1 accessibility and design systems",
  "35% UI render‑time reduction via profiling & metrics",
];

const skills = {
  Programming: ["Java", "Python", "TypeScript", "JavaScript (ES6+)", "Kotlin", "SQL", "Bash"],
  Frameworks: ["Spring Boot", "Express.js", "React", "Next.js", "Tailwind CSS", "React Testing Library", "Webpack Module Federation", "SpringDoc", "Headless UI"],
  "Cloud & DevOps": ["AWS (Lambda, API Gateway, RDS, AppConfig, Step Functions, S3, CloudWatch, Cognito, VPC)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab CI"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis"],
  Testing: ["JUnit", "Postman", "Swagger/OpenAPI", "CloudWatch Logs Insights", "Grafana"],
  Tools: ["Jira", "Git", "VS Code", "Linux", "macOS", "Windows"],
};

const projects = [
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

const experience = [
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

const education = [
  { degree: "M.S., Data Science", school: "University at Albany, NY", period: "Aug 2022 – May 2024" },
  { degree: "B.Tech., Electronics & Communications", school: "S R University, India", period: "Jun 2016 – May 2020" },
];

const certifications = [{ name: "AWS Certified Cloud Practitioner" }];

// ======= MAIN APP =======
export default function App() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div>
      {/* NAV */}
      <Navbar bg="light" expand="md" fixed="top" className="border-bottom">
        <Container>
          <Navbar.Brand href="#home"><strong>KR</strong> • {contact.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button as="a" href={resumeUrl} download className="ms-2" variant="primary">Resume</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO */}
      <section id="home" className="pt-5" style={{ paddingTop: "5rem" }}>
        <Container className="py-4 py-md-5">
          <Row className="align-items-center g-4">
            <Col md={7}>
              <h1 className="display-5 fw-bold">Software Development Engineer</h1>
              <p className="lead text-muted mt-3">
                Results‑driven engineer crafting scalable web applications, cloud‑native microservices, and accessible UI systems. Passionate about performance, developer experience, and measurable impact.
              </p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <Button href="#projects" variant="primary">View Projects</Button>
                <Button href="#contact" variant="outline-secondary">Contact Me</Button>
                <Button href={contact.github} target="_blank" rel="noreferrer" variant="link">GitHub</Button>
                <Button href={contact.linkedin} target="_blank" rel="noreferrer" variant="link">LinkedIn</Button>
              </div>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
                {highlights.map((h) => (
                  <Col key={h}>
                    <Card className="h-100">
                      <Card.Body className="py-3"><small className="text-muted">{h}</small></Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={5}>
              <Card>
                <Card.Header>At a Glance</Card.Header>
                <Card.Body>
                  <div className="mb-2"><strong>Location:</strong> {contact.location}</div>
                  <div className="mb-2"><strong>Phone:</strong> <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a></div>
                  <div className="mb-2">
                    <strong>Email:</strong> <Button variant="link" className="p-0" onClick={copyEmail}>{copied ? "Copied!" : contact.email}</Button>
                  </div>
                  <div className="d-flex flex-wrap gap-2 pt-2">
                    {Object.keys(skills).slice(0,3).map((k) => (
                      <Badge bg="secondary" key={k}>{k}</Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-light">
        <Container className="py-5">
          <Row className="g-4">
            <Col lg={8}>
              <h2 className="h1">Engineer, builder, and systems thinker</h2>
              <p className="text-muted mt-2">
                I design, implement, and scale full‑stack systems with a focus on developer experience, accessibility, and measurable performance. I specialize in <strong>cloud‑native microservices</strong>, <strong>React/Next.js</strong> frontends, and <strong>AWS‑backed pipelines</strong>.
              </p>
              <ul className="text-muted">
                {highlights.map((h) => (<li key={h}>{h}</li>))}
              </ul>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Header>Core Stack</Card.Header>
                <Card.Body className="d-flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "React", "Next.js", "AWS", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "Redis"].map((t) => (
                    <Badge bg="light" text="dark" className="border" key={t}>{t}</Badge>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <Container className="py-5">
          <h2 className="h1 mb-4">A balanced, production‑minded toolkit</h2>
          <Row className="g-4">
            {Object.entries(skills).map(([group, items]) => (
              <Col md={6} lg={4} key={group}>
                <Card className="h-100">
                  <Card.Header className="fw-semibold">{group}</Card.Header>
                  <Card.Body className="d-flex flex-wrap gap-2">
                    {items.map((it) => (
                      <Badge bg="light" text="dark" className="border" key={it}>{it}</Badge>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-light">
        <Container className="py-5">
          <h2 className="h1 mb-4">Selected Work</h2>
          <Row className="g-4">
            {projects.map((p) => (
              <Col md={6} key={p.title}>
                <Card className="h-100">
                  <Card.Header>
                    <div className="fw-semibold">{p.title}</div>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {p.stack.map((s) => (<Badge bg="outline" key={s} className="border text-dark">{s}</Badge>))}
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <p className="text-muted">{p.description}</p>
                    <ul>
                      {p.impact.map((i) => (<li key={i}>{i}</li>))}
                    </ul>
                    <div className="pt-2">
                      <Button variant="link" onClick={(e)=> e.preventDefault()}>View details</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <Container className="py-5">
          <h2 className="h1 mb-4">Professional Journey</h2>
          <Row className="g-4">
            {experience.map((e) => (
              <Col key={e.company}>
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <div><strong>{e.role}</strong> • <span className="text-muted">{e.company}</span></div>
                    <small className="text-muted">{e.period}</small>
                  </Card.Header>
                  <Card.Body>
                    <Row className="row-cols-1 row-cols-md-2 g-2">
                      {e.bullets.map((b) => (
                        <Col key={b}><small className="text-muted">• {b}</small></Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* EDUCATION & CERTS */}
      <section id="education" className="bg-light">
        <Container className="py-5">
          <h2 className="h1 mb-4">Academic Background & Certifications</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100">
                <Card.Header>Education</Card.Header>
                <Card.Body>
                  {education.map((ed) => (
                    <div key={ed.degree} className="mb-3">
                      <div className="fw-semibold">{ed.degree}</div>
                      <div className="text-muted">{ed.school}</div>
                      <small className="text-muted">{ed.period}</small>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100">
                <Card.Header>Certifications</Card.Header>
                <Card.Body>
                  {certifications.map((c) => (
                    <div key={c.name} className="d-flex align-items-center gap-2 mb-2">
                      <Badge bg="success">Verified</Badge>
                      <span>{c.name}</span>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Container className="py-5">
          <h2 className="h1 mb-4">Let’s build something great</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card>
                <Card.Header>Send a Message</Card.Header>
                <Card.Body>
                  <Form action={`mailto:${contact.email}`} method="post" encType="text/plain">
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Your name</Form.Label>
                      <Form.Control name="name" placeholder="Your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Your email</Form.Label>
                      <Form.Control type="email" name="email" placeholder="you@example.com" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={6} name="message" placeholder="How can I help?" required />
                    </Form.Group>
                    <div className="d-flex gap-2">
                      <Button type="submit" variant="primary">Send</Button>
                      <Button as="a" href={resumeUrl} download variant="outline-secondary">Download Resume</Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Header>Direct</Card.Header>
                <Card.Body>
                  <div className="mb-2"><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></div>
                  <div className="mb-2"><strong>Phone:</strong> <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a></div>
                  <div className="mb-2"><strong>Location:</strong> {contact.location}</div>
                  <div className="mb-2"><strong>GitHub:</strong> <a href={contact.github} target="_blank" rel="noreferrer">Profile</a></div>
                  <div className="mb-2"><strong>LinkedIn:</strong> <a href={contact.linkedin} target="_blank" rel="noreferrer">Profile</a></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-top">
        <Container className="py-4 d-flex flex-column flex-sm-row justify-content-between small text-muted">
          <div>© {new Date().getFullYear()} {contact.name}. All rights reserved.</div>
          <a href="#home" className="text-decoration-none">Back to top ↑</a>
        </Container>
      </footer>
    </div>
  );
}
