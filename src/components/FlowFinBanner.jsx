import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ArrowUpRight } from 'lucide-react';

export default function FlowFinBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => setShow(false);

  return (
    <Modal show={show} onHide={dismiss} centered aria-labelledby="ff-popup-title" className="ff-popup">
      <Modal.Header closeButton>
        <div>
          <div className="ff-popup-eyebrow">Latest build</div>
          <Modal.Title id="ff-popup-title" className="h5 mb-0">
            FlowFin — split expenses on a real ledger
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <p className="text-muted mb-3">
          A finance app I built end to end: bank-linked transactions, group expense splitting and
          settle-up, all on a double-entry ledger where no split ever loses a cent.
        </p>
        <p className="text-muted mb-0">
          It runs entirely on Plaid Sandbox demo data, so you can sign up and explore it freely —
          no real bank account needed.
        </p>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <a className="ff-popup-secondary" href="#projects" onClick={dismiss}>
          How it's built
        </a>
        <div className="d-flex gap-2">
          <Button variant="light" onClick={dismiss}>Maybe later</Button>
          <Button
            as="a"
            variant="primary"
            href="https://flowfin.us"
            target="_blank"
            rel="noreferrer"
            onClick={dismiss}
            className="d-inline-flex align-items-center gap-1"
          >
            Try FlowFin <ArrowUpRight size={15} aria-hidden="true" />
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
