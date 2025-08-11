import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { contact, resumeUrl } from '../data/siteData';

// === EmailJS config (fill these in) ===
const EMAILJS_PUBLIC_KEY = 'XGsBzTCt2iCa0pkNz';
const EMAILJS_SERVICE_ID = 'service_nek41kr';
const EMAILJS_TEMPLATE_ID = 'template_12m4lxe';

// Helper: init EmailJS once
function useEmailJsInit() {
  const inited = useRef(false);
  useEffect(() => {
    if (!inited.current && EMAILJS_PUBLIC_KEY) {
      try { emailjs.init(EMAILJS_PUBLIC_KEY); } catch {}
      inited.current = true;
    }
  }, []);
}

// Helper: get visitor geo info
async function getGeo() {
  try {
    const r = await fetch('https://ipapi.co/json/');
    if (!r.ok) throw new Error('geo fetch failed');
    return await r.json();
  } catch {
    return {};
  }
}

// Throttle using localStorage (1 email per minute)
function canSend(key) {
  const last = parseInt(localStorage.getItem(key) || '0', 10);
  const now = Date.now();
  if (now - last < 60 * 1000) return false;
  localStorage.setItem(key, String(now));
  return true;
}

export default function Contact() {
  useEmailJsInit();

  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [sending, setSending] = useState(false);

  // VISIT EMAIL — on mount, 1/min
  useEffect(() => {
    const throttleKey = 'visit_last_email_at';
    if (!canSend(throttleKey)) return;

    (async () => {
      const geo = await getGeo();
      const vars = {
        subject: 'Someone has visited your portfolio',
        body:
          `A visitor opened your portfolio.\n\n` +
          `Location: ${geo.city || 'Unknown'}, ${geo.region || ''} ${geo.country_name || ''}\n` +
          `Time: ${new Date().toISOString()}\n` +
          `Page: ${window.location.href}\n` +
          `Time Zone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}\n` +
          `IP: ${geo.ip || 'Unknown'}\n` +
          `User-Agent: ${navigator.userAgent}`,
        page: window.location.href,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
        ua: navigator.userAgent,
        city: geo.city || '',
        region: geo.region || '',
        country: geo.country_name || '',
        ip: geo.ip || '',
      };

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, vars);
      } catch {
        // ignore failures (e.g., offline)
      }
    })();
  }, []);

  // CONTACT EMAIL — on submit, 1/min
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ state: 'idle', message: '' });

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const throttleKey = 'contact_last_email_at';
    if (!canSend(throttleKey)) {
      setSending(false);
      setStatus({ state: 'error', message: 'Please wait a minute before submitting again.' });
      return;
    }

    try {
      const geo = await getGeo();
      const vars = {
        subject: 'Someone requested to contact you through your profile',
        body:
          `A visitor submitted your contact form.\n\n` +
          `Name: ${payload.name || 'N/A'}\n` +
          `Email: ${payload.email || 'N/A'}\n` +
          `Message: ${payload.message || 'N/A'}\n\n` +
          `Location: ${geo.city || 'Unknown'}, ${geo.region || ''} ${geo.country_name || ''}\n` +
          `Time: ${new Date().toISOString()}\n` +
          `IP: ${geo.ip || 'Unknown'}\n` +
          `User-Agent: ${navigator.userAgent}`,
        name: payload.name || '',
        email: payload.email || '',
        message: payload.message || '',
        city: geo.city || '',
        region: geo.region || '',
        country: geo.country_name || '',
        ip: geo.ip || '',
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
        ua: navigator.userAgent,
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, vars);
      setStatus({ state: 'success', message: 'Thanks! Your message has been sent.' });
      //e.currentTarget.reset();
    } catch {
      setStatus({
        state: 'error',
        message: 'Something went wrong while sending your message. Please try again.',
      });
      // roll back throttle timestamp if failed
      localStorage.setItem('contact_last_email_at', '0');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section section-light">
      <Container>
        <h2 className="h1 mb-4">Let’s build something great</h2>
        <Row className="g-4">
          <Col md={6}>
            <Card className="shadow-soft">
              <Card.Header>Send a Message</Card.Header>
              <Card.Body>
                {status.state === 'success' && (
                  <Alert variant="success" className="mb-3">{status.message}</Alert>
                )}
                {status.state === 'error' && (
                  <Alert variant="danger" className="mb-3">{status.message}</Alert>
                )}

                <Form onSubmit={handleSubmit}>
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

                  {/* Honeypot to reduce spam bots */}
                  <div style={{ display: 'none' }}>
                    <label>Do not fill this out if you are human:</label>
                    <input name="_gotcha" tabIndex="-1" autoComplete="off" />
                  </div>

                  <div className="d-flex gap-2">
                    <Button type="submit" variant="primary" disabled={sending}>
                      {sending ? 'Sending…' : 'Send'}
                    </Button>
                    <Button as="a" href={resumeUrl} download variant="outline-secondary">
                      Download Resume
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow-soft">
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
  );
}
