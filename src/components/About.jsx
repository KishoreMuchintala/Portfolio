import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { highlights } from '../data/siteData';
import SkillChip from './SkillChip';

export default function About() {
  const core = ["Java", "Spring Boot", "React", "Next.js", "AWS", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "Redis"];

  return (
    <section id="about" className="section section-light">
      <Container>
        <Row className="g-4">
          <Col lg={8}>
            <h2 className="h1">Engineer, builder, and systems thinker</h2>
            <p className="lead-muted mt-2">
              I design, implement, and scale full‑stack systems with a focus on developer experience, accessibility, and measurable performance. I specialize in <strong>cloud‑native microservices</strong>, <strong>React/Next.js</strong> frontends, and <strong>AWS‑backed pipelines</strong>.
            </p>
            <ul className="text-muted">
              {highlights.map((h) => (<li key={h}>{h}</li>))}
            </ul>
          </Col>
          <Col lg={4}>
            <Card className="shadow-soft">
              <Card.Header>Core Stack</Card.Header>
              <Card.Body>
                <div className="skills-grid">
                  {core.map((t) => (<SkillChip key={t}>{t}</SkillChip>))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
