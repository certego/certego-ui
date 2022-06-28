import React from "react";
import { Row, Col, Container } from "reactstrap";
import { FaTwitter } from "react-icons/fa";

import { Toaster, ScrollToTopButton, useToastr } from "@certego/certego-ui";

// constants
const CERTEGO_UI_VERSION = "v0.1.1";
const selector = (state) => state.toasts;

function AppFooter() {
  console.debug("AppFooter rendered!");

  // consume store
  const toasts = useToastr(selector);

  return (
    <div className="d-flex flex-column">
      {/* Toasts */}
      <section className="fixed-bottom" id="app-toasts">
        {toasts.map((tProps) => (
          <Toaster key={tProps.id} {...tProps} />
        ))}
      </section>
      {/* Footer */}
      <Container fluid className="border-top mt-2 py-1">
        <Row className="d-flex flex-column text-center lead g-0">
          <Col className="text-muted small standout">
            <strong>certego-ui </strong> &copy; By{" "}
            <a
              className="text-muted link"
              href="https://certego.net/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Certego S.R.L
            </a>
          </Col>
          <Col className="text-muted small standout">
            <a
              className="text-muted link"
              href={`https://github.com/certego/certego-ui`}
              target="_blank"
              rel="noreferrer noopener"
            >
              ({CERTEGO_UI_VERSION})
            </a>
          </Col>
        </Row>
        <Row className="mt-3 text-center g-0">
          <Col>
            <a
              href={`https://twitter.com/Certego_IRT?ref_src=twsrc%5Etfw`}
              target="_blank"
              rel="noopener noreferrer"
              className="twitter-follow-button"
            >
              <FaTwitter /> Follow @Certego_IRT
            </a>
          </Col>
        </Row>
      </Container>
      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
}

export default AppFooter;
