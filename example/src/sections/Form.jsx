import React from "react";
import { Col, Label, FormGroup } from "reactstrap";
import {
  CustomInput as FormCustomInput,
  Input as FormInput,
  Submit,
} from "formstrap";
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
            <FormGroup
              row
              className="d-flex-start-center flex-lg-row flex-md-column"
            >
              {/* FormCustomInput */}
              <Col lg={4}>
                <Label className="required" htmlFor="name">
                  Name
                </Label>
                <FormCustomInput
                  autoFocus
                  type="text"
                  name="name"
                  className="form-control input-dark"
                />
              </Col>
              {/* AsyncSelect */}
              <Col lg={3}>
                <Label className="required" htmlFor="country">
                  Country
                </Label>
                <AsyncSelect
                  multi
                  name="country"
                  {...asyncSelectProps}
                  className="input-dark"
                />
              </Col>
              {/* ButtonSelect */}
              <Col lg={3}>
                <Label className="required" htmlFor="gender">
                  Gender
                </Label>
                <ButtonSelect
                  className="d-block"
                  name="gender"
                  value={formik.values.gender}
                  choices={genderChoices}
                  onChange={(ch) => formik.setFieldValue("gender", ch)}
                />
              </Col>
            </FormGroup>
            <FormGroup
              row
              className="d-flex-start-start flex-lg-row flex-md-column"
            >
              {/* MultiSelectDropdownInput */}
              <Col lg={4}>
                <Label className="required" htmlFor="likeUI">
                  Select Occupation
                </Label>
                <MultiSelectDropdownInput
                  isMulti={false}
                  options={occupationChoices}
                  value={formik.values.occupation}
                  onChange={(v) => formik.setFieldValue("occupation", v)}
                />
              </Col>
              {/* MultiSelectCreatableInput */}
              <Col lg={4}>
                <Label className="required" htmlFor="likeUI">
                  Past Occupations
                </Label>
                <MultiSelectCreatableInput
                  options={occupationChoices}
                  value={formik.values.pastOccupations}
                  onChange={(v) => formik.setFieldValue("pastOccupations", v)}
                />
              </Col>
              {/* MultiSelectTextInput  */}
              <Col lg={4}>
                <Label className="required" htmlFor="techTags">
                  Add some technologies you work with
                </Label>
                <MultiSelectTextInput
                  defaultElements={formik.values.techTags}
                  onElementsChange={(v) => formik.setFieldValue("techTags", v)}
                />
              </Col>
            </FormGroup>
            <FormGroup
              row
              className="d-flex-start-start flex-lg-row flex-md-column"
            >
              {/* Select */}
              <Col md={4}>
                <Label className="required" htmlFor="discover_from">
                  How did you discover certego-ui ?
                </Label>
                <Select
                  name="discover_from"
                  choices={hearAboutUsChoices}
                  className="input-dark"
                />
              </Col>
              {/* FormInput */}
              <Col md={6}>
                <Label htmlFor="additionalNote">Additional Note</Label>
                <FormInput
                  type="textarea"
                  name="additionalNote"
                  className="input-dark"
                />
              </Col>
            </FormGroup>
            <FormGroup
              row
              className="d-flex-start-start flex-lg-row flex-md-column"
            >
              {/* TernaryCheckbox */}
              <Col md={2}>
                <Label className="required" htmlFor="likeUI">
                  Do you like this UI ?
                </Label>
                <TernaryCheckbox
                  className="d-block"
                  undefLabel="Maybe"
                  value={formik.values.likeUI}
                  onChange={(ch) => formik.setFieldValue("likeUI", ch)}
                />
              </Col>
              {/* MultiRangeSlider */}
              {formik.values.likeUI && (
                <Col md={4} className="pt-3">
                  <Label className="required" htmlFor="likeUI">
                    On a scale of 1 - 10 ?
                  </Label>
                  <MultiRangeSlider
                    domain={[1, 10]}
                    defaultValues={formik.values.likeUIRange}
                    onChange={(v) => formik.setFieldValue("likeUIRange", v)}
                  />
                </Col>
              )}
            </FormGroup>
            <FormGroup row className="ml-1">
              {/* InputCheckBox */}
              <InputCheckBox
                className="bg-body"
                label="I Accept the terms and conditions"
                name="acceptTerms"
                valid={formik.values.acceptTerms}
              />
            </FormGroup>
            <FormGroup
              row
              className="d-flex-start-start flex-lg-row flex-md-column"
            >
              {/* CustomJsonInput */}
              <Col lg={6}>
                <Label htmlFor="debugForm">Debug Form Values</Label>
                <CustomJsonInput placeholder={formik.values} viewOnly />
              </Col>
            </FormGroup>
            <FormGroup row className="mt-5 d-flex-center">
              {/* Submit */}
              <Submit
                withSpinner
                disabled={!(formik.isValid || formik.isSubmitting)}
                color="primary"
                outline
                size="md"
              >
                {!formik.isSubmitting && "Submit"}
              </Submit>
            </FormGroup>
            <small className="text-muted">
              Note: This form is only for demo purposes, input data is neither
              sent nor stored.
            </small>
          </Form>
        )}
      </Formik>
      <h6>Above example form shows usage of all components.</h6>
    </ContentSection>
  );
}
