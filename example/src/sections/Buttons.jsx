import React from "react";
import { Row, Col, Label, FormGroup } from "reactstrap";
import {
  MdCheckCircle,
  MdContentCopy,
  MdDelete,
  MdInfo,
  MdModeEdit,
  MdVisibility,
} from "react-icons/md";
import { CustomInput as FormInput, Submit } from "formstrap";
import { Form, Formik } from "formik";

import {
  ContentSection,
  CopyToClipboardButton,
  IconButton,
  PopupFormButton,
  ScrollToTopButton,
  SocialShareBtn,
  SyncButton,
} from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

// component
export default function Buttons(props) {
  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="IconButton"
        bodyNode={
          <>
            <Row className="d-flex justify-content-around mt-3">
              <IconButton
                id="iconbutton-example-1"
                title="Example Button #1"
                Icon={() => <span>Example Button #1</span>}
              />
            </Row>
            <Row className="d-flex justify-content-around mt-3">
              <IconButton
                id="iconbutton-example-2"
                title="Example Button #2"
                Icon={MdCheckCircle}
                color="success"
              />
              <IconButton
                id="iconbutton-example-3"
                title="Example Button #3"
                Icon={MdDelete}
                color="danger"
              />
              <IconButton
                id="iconbutton-example-4"
                title="Example Button #4"
                Icon={MdInfo}
                color="info"
              />
              <IconButton
                id="iconbutton-example-5"
                title="Example Button #5"
                Icon={MdVisibility}
                color="dark"
              />
            </Row>
          </>
        }
      />
      <ComponentAsExample
        name="SyncButton"
        bodyNode={
          <Row className="d-flex justify-content-around">
            <SyncButton onClick={async () => alert("Example Alert #1")} />
            <SyncButton
              title="Custom title"
              className="btn btn-info"
              onClick={async () => alert("Example Alert #2")}
            />
          </Row>
        }
      />
      <ComponentAsExample
        name="CopyToClipboardButton"
        bodyNode={
          <Row className="d-flex justify-content-around">
            <CopyToClipboardButton
              id="copybtn-example-1"
              text="Example text #1"
              showOnHover
            />
            <CopyToClipboardButton
              id="copybtn-example-3"
              text="Example text #3"
              showOnHover
            >
              <MdContentCopy />
            </CopyToClipboardButton>
          </Row>
        }
      />
      <ComponentAsExample
        name="PopupFormButton"
        bodyNode={
          <Row className="d-flex justify-content-around">
            <PopupFormButton
              id="popupform-example-1"
              title="Click me to edit"
              Icon={MdModeEdit}
              Form={({ onFormSubmit }) => (
                <Formik
                  initialValues={{ name: "" }}
                  onSubmit={onFormSubmit}
                  validateOnMount
                >
                  {(formik) => (
                    <Form className="p-2 ">
                      <FormGroup>
                        <Label className="required" htmlFor="email">
                          Name
                        </Label>
                        <FormInput
                          autoFocus
                          type="text"
                          name="name"
                          className="form-control form-control-sm"
                        />
                      </FormGroup>
                      <Submit type="submit" color="darker" size="sm">
                        Submit
                      </Submit>
                    </Form>
                  )}
                </Formik>
              )}
              onFormSuccess={() => alert("onFormSuccess callback")}
            />
          </Row>
        }
      />
      <ComponentAsExample
        name="ScrollToTopButton"
        bodyNode={
          <Row className="d-flex justify-content-around">
            <ScrollToTopButton
              id="override"
              defaultVisible
              scrollYOffset={-50}
            />
          </Row>
        }
      />
      <ComponentAsExample
        name="SocialShareBtn"
        bodyNode={
          <Row className="d-flex justify-content-around">
            <Col className="d-flex flex-column align-items-center">
              <SocialShareBtn
                id="social-share-btn-example-1"
                url="https://github.com/certego/certego-ui"
                popoverTrigger="hover"
                popoverPlacement="left"
              />
              <small className="font-italic">hover</small>
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <SocialShareBtn
                id="social-share-btn-example-2"
                url="https://github.com/certego/certego-ui"
                popoverTrigger="click"
                popoverPlacement="top"
              />
              <small className="font-italic">click</small>
            </Col>
          </Row>
        }
      />
    </ContentSection>
  );
}
