import React from "react";
import { Col, Label, FormGroup } from "reactstrap";
import { CustomInput as FormInput, Submit } from "formstrap";
import { Form, Formik } from "formik";

import {
  ContentSection,
  Select,
  AsyncSelect,
  ButtonSelect,
  TernaryCheckbox,
  MultiSelectTextInput,
  InputCheckBox,
  CustomJsonInput,
  TextBoxInput,
} from "@certego/certego-ui";

// constants
const asyncSelectProps = {
  url: "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-name.json",
  mapFn: (x) => ({ label: x["country"], value: x["country"] }),
};
const occupationChoices = [
  { label: "Software Engineer", value: "swe" },
  { label: "Super Shadowy Coder", value: "ssc" },
];
const genderChoices = ["Female", "Male", "Other"];
const initialValues = {
  name: "",
  country: "",
  gender: genderChoices[0],
  likeUI: true,
  occupation: occupationChoices[0]["value"],
  techTags: [],
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
              {/* FormInput */}
              <Col lg={4}>
                <Label className="required" htmlFor="name">
                  Name
                </Label>
                <FormInput
                  autoFocus
                  type="text"
                  name="name"
                  className="form-control"
                />
              </Col>
              {/* AsyncSelect */}
              <Col lg={3}>
                <Label className="required" htmlFor="country">
                  Country
                </Label>
                <AsyncSelect multi name="country" {...asyncSelectProps} />
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
              {/* Select */}
              <Col lg={3}>
                <Label className="required" htmlFor="occupation">
                  Select Occupation
                </Label>
                <Select name="occupation" choices={occupationChoices} />
              </Col>
              {/* MultiSelectTextInput  */}
              <Col lg={6}>
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
              {/* TernaryCheckbox */}
              <Col md={6}>
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
            </FormGroup>
            <FormGroup row className="d-flex-start-start">
              {/* TextBoxInput */}
              <Col lg={6}>
                <Label htmlFor="additionalNote">Additional Note</Label>
                <TextBoxInput name="additionalNote" />
              </Col>
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
            <FormGroup row className="d-flex-start-start">
              {/* CustomJsonInput */}
              <Col lg={6}>
                <Label htmlFor="debugForm">Debug Form Values</Label>
                <CustomJsonInput placeholder={formik.values} viewOnly />
              </Col>
            </FormGroup>
            {/* Submit */}
            <FormGroup row className="mt-5 d-flex-start-center">
              <Submit
                withSpinner
                disabled={!(formik.isValid || formik.isSubmitting)}
                color="primary"
                outline
                className="mx-auto"
                size="md"
              >
                {!formik.isSubmitting && "Submit"}
              </Submit>
            </FormGroup>
          </Form>
        )}
      </Formik>
      <h6>Above example form shows usage of all components.</h6>
    </ContentSection>
  );
}
