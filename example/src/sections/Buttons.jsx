import React from "react";
import {
  Row,
  Col,
  Label,
  FormGroup,
  Button,
  Input
} from "reactstrap";
import {
  MdCheckCircle,
  MdContentCopy,
  MdDelete,
  MdInfo,
  MdModeEdit,
  MdVisibility,
} from "react-icons/md";
import { Form, Formik } from "formik";

import {
  ContentSection,
  CopyToClipboardButton,
  GoBackButton,
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
            <div className="d-flex justify-content-around mt-3">
              <IconButton
                id="iconbutton-example-1"
                title="Example Button #1"
                Icon={() => <span>Example Button #1</span>}
              />
            </div>
            <div className="d-flex justify-content-around mt-3">
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
            </div>
          </>
        }
      />
      <ComponentAsExample
        name="SyncButton"
        bodyNode={
          <div className="d-flex justify-content-around">
            <SyncButton onClick={async () => alert("Example Alert #1")} />
            <SyncButton
              title="Custom title"
              className="btn btn-info"
              onClick={async () => alert("Example Alert #2")}
            />
          </div>
        }
      />
      <ComponentAsExample
        name="CopyToClipboardButton"
        bodyNode={
          <div className="d-flex justify-content-around">
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
          </div>
        }
      />
      <ComponentAsExample
        name="PopupFormButton"
        bodyNode={
          <div className="d-flex justify-content-around">
            <PopupFormButton
              id="popupform-example-1"
              title="Click me to edit"
              titlePlacement="top"
              popOverPlacement="top"
              Icon={MdModeEdit}
              Form={({ onFormSubmit }) => (
                <Formik
                  initialValues={{ name: "" }}
                  onSubmit={onFormSubmit}
                >
                  {(formik) => (
                    <Form className="p-2 ">
                      <FormGroup>
                        <Label className="required" for="email">
                          Name
                        </Label>
                        <Input
                          autoFocus
                          type="text"
                          name="name"
                          size="sm"
                        />
                      </FormGroup>
                      <Button type="submit" color="darker" className="btn-sm">
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              )}
              onFormSuccess={() => alert("onFormSuccess callback")}
            />
          </div>
        }
      />
      <ComponentAsExample
        name="ScrollToTopButton"
        bodyNode={
          <div className="d-flex justify-content-around">
            <ScrollToTopButton
              id="override"
              defaultVisible
              scrollYOffset={-50}
            />
          </div>
        }
      />
      <ComponentAsExample
        name="SocialShareBtn"
        bodyNode={
          <Row className="d-flex justify-content-around">
            <Col className="d-flex-center flex-column">
              <SocialShareBtn
                id="social-share-btn-example-1"
                url="https://github.com/certego/certego-ui"
                popoverTrigger="hover"
                popoverPlacement="left"
              />
              <small className="fst-italic">hover</small>
            </Col>
            <Col className="d-flex-center flex-column">
              <SocialShareBtn
                id="social-share-btn-example-2"
                url="https://github.com/certego/certego-ui"
                popoverPlacement="top"
                onlyIcon
              />
              <small className="fst-italic">hover</small>
            </Col>
            <Col className="d-flex-center flex-column">
              <SocialShareBtn
                id="social-share-btn-example-3"
                url="https://github.com/certego/certego-ui"
                popoverTrigger="click"
                popoverPlacement="top"
              />
              <small className="fst-italic">click</small>
            </Col>
          </Row>
        }
      />
      <ComponentAsExample
        name="GoBackButton"
        bodyNode={
          <Row className="d-flex justify-content-around">
            <Col className="d-flex-center flex-column">
              <GoBackButton />
              <small className="fst-italic">color: accent-2</small>
            </Col>
            <Col className="d-flex-center flex-column">
              <GoBackButton onlyIcon={false} color="gray" />
              <small className="fst-italic">
                onlyIcon: false, color: gray
              </small>
            </Col>
          </Row>
        }
      />
    </ContentSection>
  );
}
