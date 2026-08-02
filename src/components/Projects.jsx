import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { projects } from '../data/siteData';

export default function Projects() {
  return (
    <section id="projects" className="section section-light">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-2 mb-4">
          <div>
            <h2 className="h1 mb-2">Selected Work</h2>
            <p className="lead-muted mb-0">A mix of product engineering, enterprise platforms, and modern web architecture.</p>
          </div>
        </div>
        <Row className="g-4">
          {projects.map((p) => (
            <Col md={6} key={p.title}>
              <Card className="h-100 shadow-soft">
                <Card.Header>
                  <div className="fw-semibold">{p.title}</div>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {p.stack.map((s) => (<span key={s} className="chip">{s}</span>))}
                  </div>
                </Card.Header>
                <Card.Body>
                  <p className="text-muted">{p.description}</p>
                  <div className="fw-semibold mb-2">Key outcomes</div>
                  <ul className="text-muted mb-0">
                    {p.impact.map((i) => (<li key={i}>{i}</li>))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
