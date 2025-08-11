import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { skills } from '../data/siteData';
import SkillGroup from './SkillGroup';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Container>
        <h2 className="h1 mb-4">A balanced, production‑minded toolkit</h2>
        <Row className="g-4">
          {Object.entries(skills).map(([group, items]) => (
            <Col md={6} lg={4} key={group}>
              <Card className="h-100 shadow-soft">
                <Card.Header className="fw-semibold">{group}</Card.Header>
                <Card.Body>
                  <SkillGroup items={items} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
