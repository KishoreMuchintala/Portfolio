import React from 'react';
import { Container } from 'react-bootstrap';
import { contact } from '../data/siteData';

export default function SiteFooter() {
  return (
    <footer className="border-top">
      <Container className="py-4 d-flex flex-column flex-sm-row justify-content-between small text-muted">
        <div>© {new Date().getFullYear()} {contact.name}. All rights reserved.</div>
        <a href="#home" className="text-decoration-none">Back to top ↑</a>
      </Container>
    </footer>
  );
}
