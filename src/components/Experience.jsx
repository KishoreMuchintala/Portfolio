import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { experience } from '../data/siteData';

export default function Experience() {
  return (
    <section id="experience" className="section section-light">
      <Container>
        <h2 className="h1 mb-4">Professional Journey</h2>
        <Row className="g-4">
          {experience.map((e) => (
            <Col key={e.company}>
              <Card className="shadow-soft">
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
  );
}
