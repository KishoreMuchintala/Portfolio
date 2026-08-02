import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { resumeUrl } from '../data/siteData';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'insights', label: 'Insights' },
  { id: 'experience', label: 'Professional Journey' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function SiteNavbar() {
  const [activeSection, setActiveSection] = useState('home');
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      if (!sections.length) return;

      let closestSection = sections[0];
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - 120);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      setActiveSection(closestSection.id);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <Navbar bg="white" expand="md" fixed="top" className="border-bottom navbar-shadow">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <span><strong>KR</strong> • Kishore R M</span>
          <span
            className="text-muted fw-semibold"
            style={{
              fontSize: '0.72rem',
              backgroundColor: '#e8f8ee',
              color: '#2e7d32',
              padding: '0.2rem 0.5rem',
              borderRadius: '999px',
              border: '1px solid #b7e4c7',
            }}
          >
            Last Updated: {lastUpdated}
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-md-center gap-1">
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                active={activeSection === item.id}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </Nav.Link>
            ))}
            <Button as="a" href={resumeUrl} download className="ms-md-2" variant="primary">Resume</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
