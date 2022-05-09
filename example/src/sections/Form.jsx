import React from "react";
import {
  Col,
  Label,
  FormGroup,
  Button,
  Input,
  Spinner,
  Row
} from "reactstrap";
import { Form, Formik } from "formik";

import {
  ContentSection,
  Select,
  AsyncSelect,
  ButtonSelect,
  TernaryCheckbox,
  MultiRangeSlider,
  MultiSelectCreatableInput,
  MultiSelectDropdownInput,
  MultiSelectTextInput,
  InputCheckBox,
  CustomJsonInput,
} from "@certego/certego-ui";

// constants
const asyncSelectProps = {
  url: "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-name.json",
  mapFn: (x) => ({ label: x["country"], value: x["country"] }),
};
const occupationChoices = [
  { label: "Software Engineer", value: "swe" },
  { label: "Super Shadowy Coder", value: "ssc" },
  { label: "Data Engineer", value: "dee" },
  { label: "ML engineer", value: "mle" },
  { label: "Security engineer", value: "se" },
];
const hearAboutUsChoices = [
  {
    label: "Search Engine (Google, DuckDuckGo, etc.)",
    value: "search_engine",
  },
  {
    label: "Recommended by friend or colleague",
    value: "was_recommended",
  },
  {
    label: "Social media",
    value: "social_media",
  },
  {
    label: "Blog or Publication",
    value: "blog_or_publication",
  },
  {
    label: "Other",
    value: "other",
  },
];
const genderChoices = ["Female", "Male", "Other"];
const initialValues = {
  name: "",
  country: "",
  gender: genderChoices[0],
  likeUI: true,
  likeUIRange: [1, 10],
  occupation: occupationChoices[0]["value"],
  pastOccupations: [],
  techTags: [],
  discover_from: "",
  acceptTerms: false,
  additionalNote: "",
};

// Examples
export default function FormExample(props) {
  const onFormSubmit = React.useCallback(async (values, formik) => {
    try {
      await alert(JSON.stringify(values));
    } catch (e) {
      // redundant catch
    } finally {
      formik.setSubmitting(false);
    }
  }, []);

  return (
    <ContentSection {...props}>
      <Formik
        initialValues={initialValues}
        onSubmit={onFormSubmit}
        validateOnMount
      >
        {(formik) => (
          <Form className="content-section bg-body">
            <Row>
              {/* Input */}
              <Col lg={4}>
                <FormGroup>
                  <Label className="required" for="name">
                    Name
                  </Label>
                  <Input
                    autoFocus
                    type="text"
                    name="name"
                    className="input-dark"
                  />
                </FormGroup>
              </Col>
              {/* AsyncSelect */}
              <Col lg={3}>
                <FormGroup>
                  <Label className="required" for="country">
                    Country
                  </Label>
                  <AsyncSelect
                    name="country"
                    {...asyncSelectProps}
                    className="input-dark"
                  />
                </FormGroup>
              </Col>
              {/* ButtonSelect */}
              <Col lg={3}>
                <FormGroup>
                  <Label className="required" for="gender">
                    Gender
                  </Label>
                  <ButtonSelect
                    className="d-block"
                    name="gender"
                    value={formik.values.gender}
                    choices={genderChoices}
                    onChange={(ch) => formik.setFieldValue("gender", ch)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              {/* MultiSelectDropdownInput */}
              <Col lg={4}>
                <FormGroup>
                  <Label className="required" for="likeUI">
                    Select Occupation
                  </Label>
                  <MultiSelectDropdownInput
                    isMulti={false}
                    options={occupationChoices}
                    value={formik.values.occupation}
                    onChange={v => formik.setFieldValue("occupation", v)}
                  />
                </FormGroup>
              </Col>
              {/* MultiSelectCreatableInput */}
              <Col lg={4}>
                <FormGroup>
                  <Label className="required" for="likeUI">
                    Past Occupations
                  </Label>
                  <MultiSelectCreatableInput
                    options={occupationChoices}
                    value={formik.values.pastOccupations}
                    onChange={(v) => formik.setFieldValue("pastOccupations", v)}
                  />
                </FormGroup>
              </Col>
              {/* MultiSelectTextInput  */}
              <Col lg={4}>
                <FormGroup>
                  <Label className="required" for="techTags">
                    Add some technologies you work with
                  </Label>
                  <MultiSelectTextInput
                    defaultElements={formik.values.techTags}
                    onElementsChange={v => formik.setFieldValue("techTags", v)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              {/* Select */}
              <Col md={4}>
                <FormGroup>
                  <Label className="required" for="discover_from">
                    How did you discover <code>certego-ui</code>?
                  </Label>
                  <Select
                    name="discover_from"
                    choices={hearAboutUsChoices}
                    className="input-dark"
                  />
                </FormGroup>
              </Col>
              {/* Input */}
              <Col md={6}>
                <FormGroup>
                  <Label for="additionalNote">Additional Note</Label>
                  <Input
                    type="textarea"
                    name="additionalNote"
                    className="input-dark"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              {/* TernaryCheckbox */}
              <Col md={2}>
                <FormGroup>
                  <Label className="required" for="likeUI">
                    Do you like this UI?
                  </Label>
                  <TernaryCheckbox
                    className="d-block"
                    undefLabel="Maybe"
                    value={formik.values.likeUI}
                    onChange={ch => formik.setFieldValue("likeUI", ch)}
                  />
                </FormGroup>
              </Col>
              {/* MultiRangeSlider */}
              {formik.values.likeUI && (
                <Col md={4} className="pt-3">
                  <FormGroup>
                    <Label className="required" for="likeUI">
                      On a scale of 1-10?
                    </Label>
                    <MultiRangeSlider
                      domain={[1, 10]}
                      defaultValues={formik.values.likeUIRange}
                      onChange={(v) => formik.setFieldValue("likeUIRange", v)}
                    />
                  </FormGroup>
                </Col>
              )}
            </Row>
            <Row>
              {/* InputCheckBox */}
              <Col>
                <InputCheckBox
                  className="bg-body"
                  label="I Accept the terms and conditions"
                  name="acceptTerms"
                  valid={formik.values.acceptTerms}
                />
              </Col>
            </Row>
            <Row>
              {/* CustomJsonInput */}
              <Col lg={6}>
                <FormGroup>
                  <Label for="debugForm">Debug Form Values</Label>
                  <CustomJsonInput placeholder={formik.values} viewOnly />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-5">
              {/* Submit */}
              <Col>
                <Button
                  type="submit"
                  disabled={!(formik.isValid || formik.isSubmitting)}
                  color="primary"
                  outline
                  size="md"
                >
                  {formik.isSubmitting && <Spinner />}Submit
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <small className="text-muted">
                  Note: This form is only for demo purposes, input data is neither
                  sent nor stored.
                </small>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
      <h6>Above example form shows usage of all components.</h6>
    </ContentSection>
  );
}
