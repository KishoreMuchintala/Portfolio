import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { experience } from '../data/siteData';

export default function Experience() {
  return (
    <section id="experience" className="section section-light">
      <Container>
        <h2 className="h1 mb-4">Professional Journey</h2>
        <div className="d-flex flex-column gap-4">
          {experience.map((e) => (
            <Card key={e.company} className="shadow-soft border-0 overflow-hidden">
              <Card.Body className="p-4">
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-start gap-3">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="rounded-pill px-2 py-1" style={{ backgroundColor: '#e8f0ff', color: '#1d4ed8', fontSize: '0.72rem', fontWeight: 700 }}>
                        {e.company}
                      </span>
                    </div>
                    <h4 className="mb-1 fw-semibold">{e.role}</h4>
                    <div className="text-muted">{e.period}</div>
                  </div>
                </div>
                <div className="mt-3 ps-1">
                  <div className="d-flex flex-column gap-2">
                    {e.bullets.map((b) => (
                      <div key={b} className="d-flex align-items-start gap-2 text-muted">
                        <span className="mt-1" style={{ color: '#2563eb' }}>▹</span>
                        <div><small>{b}</small></div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
