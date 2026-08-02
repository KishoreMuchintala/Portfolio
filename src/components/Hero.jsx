// import React, { useState } from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import { contact, highlights, skills } from '../data/siteData';
// import { profilePicture } from '../data/siteData';
// import { Car } from 'lucide-react';
// export default function Hero() {
//   const [copied, setCopied] = useState(false);

//   const copyEmail = async () => {
//     try {
//       await navigator.clipboard.writeText(contact.email);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1500);
//     } catch {}
//   };

//   return (
//     <section id="home" className="section" style={{ paddingTop: "6rem" }}>
//       <Container>
//         <Row className="align-items-center g-4">
        
//           <Col md={7}>
//             <h1 className="display-5 fw-bold">Software Development Engineer</h1>
            
//             <p className="lead lead-muted mt-3">
//               Results‑driven engineer crafting scalable web applications, cloud‑native microservices, and accessible UI systems. Passionate about performance, developer experience, and measurable impact.
//             </p>
//             <div className="d-flex flex-wrap gap-2 mt-3">
//               <Button href="#projects" variant="primary">View Projects</Button>
//               <Button href="#contact" variant="outline-secondary">Contact Me</Button>
//               <Button href={contact.github} target="_blank" rel="noreferrer" variant="link">GitHub</Button>
//               <Button href={contact.linkedin} target="_blank" rel="noreferrer" variant="link">LinkedIn</Button>
//             </div>
//             <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
//               {highlights.map((h) => (
//                 <Col key={h}>
//                   <Card className="h-100 shadow-soft">
//                     <Card.Body className="py-3"><small className="text-muted">{h}</small></Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           </Col>
          
//           <Col md={5}>
//             <Card className="shadow-soft">
//               <Card.Header>At a Glance</Card.Header>
//               <Card.Body>
//                 <div className="mb-2"><strong>Location:</strong> {contact.location}</div>
//                 <div className="mb-2"><strong>Phone:</strong> <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a></div>
//                 <div className="mb-2">
//                   <strong>Email:</strong> <Button variant="link" className="p-0" onClick={copyEmail}>{copied ? "Copied!" : contact.email}</Button>
//                 </div>
//                 <div className="d-flex flex-wrap gap-2 pt-2">
//                   {Object.keys(skills).slice(0,3).map((k) => (
//                     <span key={k} className="chip chip-wide">{k}</span>
//                   ))}
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }


import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { contact, highlights, skills } from '../data/siteData';
import { ProfilePicture } from '../data/siteData'; // <-- use the component

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <section id="home" className="section" style={{ paddingTop: "6rem" }}>

      <Container>
        <Row className="align-items-center g-4">
          <Row>
          <Col xs={12} md={9}>
            
            {/* Title + Profile Picture */}
            <h1 className="display-5 fw-bold d-flex align-items-center">
              Full-Stack Engineer Building Scalable, Product-Ready Digital Experiences
            </h1>
            <p className="lead lead-muted mt-3">
              I design and ship high-impact web platforms across frontend, backend, and cloud systems — with a strong focus on performance, accessibility, and measurable business outcomes.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-3">
              <Button href="#projects" variant="primary">Explore My Work</Button>
              <Button href="#contact" variant="outline-secondary">Let’s Connect</Button>
              <Button href={contact.github} target="_blank" rel="noreferrer" variant="link">GitHub</Button>
              <Button href={contact.linkedin} target="_blank" rel="noreferrer" variant="link">LinkedIn</Button>
            </div>

            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
              {highlights.map((h) => (
                <Col key={h}>
                  <Card className="h-100 shadow-soft">
                    <Card.Body className="py-3">
                      <small className="text-muted">{h}</small>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

          </Col>
          <Col >
          <Card>
            <Card.Body>
            <ProfilePicture size={250} />
            </Card.Body>
          </Card>
          
          </Col>

          </Row>

          <Col md={7}>
            <Card className="shadow-soft">
              <Card.Header>At a Glance</Card.Header>
              <Card.Body>
                <div className="mb-2"><strong>Location:</strong> {contact.location}</div>
                <div className="mb-2"><strong>Phone:</strong> <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a></div>
                <div className="mb-2">
                  <strong>Email:</strong>{" "}
                  <Button variant="link" className="p-0" onClick={copyEmail}>
                    {copied ? "Copied!" : contact.email}
                  </Button>
                </div>
                <div className="d-flex flex-wrap gap-2 pt-2">
                  {Object.keys(skills).slice(0, 3).map((k) => (
                    <span key={k} className="chip chip-wide">{k}</span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
}
