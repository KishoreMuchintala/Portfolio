import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { insights } from '../data/siteData';

export default function Insights() {
  return (
    <section id="insights" className="section">
      <Container>
        <h2 className="h1 mb-1">Insights & Suggestions</h2>
        <p className="lead-muted mb-4">Product/engineering recommendations I’ve shared to help organizations improve end‑user experience. Pulled from my LinkedIn posts.</p>
        <Row className="g-4">
          {insights.map((ins) => (
            <Col md={6} key={ins.title}>
              <Card className="h-100 shadow-soft">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h3 className="h5 mb-1">{ins.title}</h3>
                      <small className="text-muted">{ins.date}</small>
                    </div>
                    <div className="d-flex flex-wrap gap-1">
                      {ins.tags?.map(t => <Badge key={t} bg="light" text="dark" className="badge-outline">{t}</Badge>)}
                    </div>
                  </div>
                  <p className="text-muted mt-3">{ins.summary}</p>
                  {ins.embedUrl ? (
                    <div className="mt-3">
                      <iframe
                        className="post-iframe"
                        src={ins.embedUrl}
                        height="560"
                        title={ins.title}
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="mt-2">
                      <Button as="a" href={ins.url} target="_blank" rel="noreferrer" variant="outline-secondary">View on LinkedIn</Button>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="mt-3">
          {/* <small className="text-muted">Tip: To embed a LinkedIn post, click the post’s “…” menu → <em>Embed this post</em> → copy the <code>linkedin.com/embed/…</code> URL and paste it into <code>embedUrl</code> in the <code>insights</code> array.</small> */}
        </div>
      </Container>
    </section>
  );
}
