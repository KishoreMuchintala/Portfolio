import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { education, certifications } from '../data/siteData';

export default function EducationCerts() {
  return (
    <section id="education" className="section">
      <Container>
        <h2 className="h1 mb-4">Academic Background & Certifications</h2>
        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 shadow-soft">
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
            <Card className="h-100 shadow-soft">
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
  );
}
