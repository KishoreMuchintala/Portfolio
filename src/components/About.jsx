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
              I build reliable digital products that balance strong engineering fundamentals with excellent user experience. My work spans modern frontend architecture, enterprise CMS platforms, cloud-native services, and performance-focused delivery for fast-moving teams.
            </p>
            <p className="lead-muted mt-3">
              I’m especially interested in solving complex product problems with pragmatic engineering — improving scalability, reducing friction, and creating experiences that feel effortless for both users and developers.
            </p>
            <ul className="text-muted mt-3">
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
