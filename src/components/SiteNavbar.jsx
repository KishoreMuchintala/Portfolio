import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { resumeUrl } from '../data/siteData';

export default function SiteNavbar() {
  return (
    <Navbar bg="white" expand="md" fixed="top" className="border-bottom navbar-shadow">
      <Container>
        <Navbar.Brand href="#home"><strong>KR</strong> • Kishore R M</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-md-center gap-1">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#insights">Insights</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button as="a" href={resumeUrl} download className="ms-md-2" variant="primary">Resume</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
