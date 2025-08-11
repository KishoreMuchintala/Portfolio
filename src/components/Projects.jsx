import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { projects } from '../data/siteData';

export default function Projects() {
  return (
    <section id="projects" className="section section-light">
      <Container>
        <h2 className="h1 mb-4">Selected Work</h2>
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
  );
}
