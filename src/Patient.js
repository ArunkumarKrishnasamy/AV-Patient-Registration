import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
function Patient() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      Title: "",
      FirstName: "",
      LastName: "",
      externalID: "",
      dob: "",
      sex: "",
      Aadhaar: "",
      License: "",
      maritalStatus: "",
      userDefined: "",
      userDefined2: "",
      billingNote: "",
      genderIdentity: "",
      sexualOrientation: "",
      birthName: "",
      birthLastName: "",
      previousName: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.Title) {
        errors.Title = "Please Choose Title";
      }
      if (!values.FirstName) {
        errors.FirstName = "Please Enter FirstName";
      }
      if (!values.LastName) {
        errors.LastName = "Please Enter LastName";
      }
      if (!values.externalID) {
        errors.externalID = "Please Enter external ID Number";
      }
      if (!values.dob) {
        errors.dob = "Please Enter DOB";
      }
      if (!values.sex) {
        errors.sex = "Please Choose sex";
      }
      if (!values.Aadhaar) {
        errors.Aadhaar = "Please Enter Aadhaar Number";
      }
      if (!values.License) {
        errors.License = "Please Enter License Number";
      }
      if (!values.maritalStatus) {
        errors.maritalStatus = "Please Choose Marital Status";
      }
      if (!values.userDefined) {
        errors.userDefined = "Please Enter any User defined Information";
      }
      if (!values.billingNote) {
        errors.billingNote = "Please Enter Billing Note";
      }
      if (!values.genderIdentity) {
        errors.genderIdentity = "Please Choose Gender Identity";
      }
      if (!values.sexualOrientation) {
        errors.sexualOrientation = "Please Choose Sexual Orientation";
      }
      if (!values.birthName) {
        errors.birthName = "Please Enter Birth First Name";
      }
      if (!values.birthLastName) {
        errors.birthLastName = "Please Enter Birth Last Name";
      }
      if (!values.previousName) {
        errors.previousName = "Please Choose any Previous Name";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3001/patient", values);
        alert("Patient added successfully");
        formik.resetForm();
        navigate("/PatientList");
      } catch (error) {
        console.log(error);
        alert("Error in Posting Data");
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row g-3 align-items-center m-3">
          <div className="row col-6">
            <div className="col-4">
              <label for="Title" className="col-form-label">
                Title:
              </label>
            </div>
            <div className="col-5">
              <select
                id="Title"
                name="Title"
                className="form-select"
                aria-label="Default select example"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Title}
              >
                <option value={""} selected>
                  Unassigned
                </option>
                <option value="Mr">Mr.</option>
                <option value="Ms">Ms.</option>
                <option value="Mrs">Mrs.</option>
              </select>
              <span style={{ color: "red" }}>
                {formik.touched.Title && formik.errors.Title ? (
                  <div>{formik.errors.Title}</div>
                ) : null}
              </span>
            </div>
          </div>
        </div>
        <div className="row g-3 align-items-center m-2">
          <div className="row col-11">
            <div className="col-2 text-danger">
              <label for="name" className="col-form-label">
                Name:
              </label>
            </div>
            <div className="col-8 ms-3">
              <div className="row" id="name" name="name">
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                    id="FirstName"
                    name="FirstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.FirstName}
                  />
                  <span style={{ color: "red" }}>
                    {formik.touched.FirstName && formik.errors.FirstName ? (
                      <div>{formik.errors.FirstName}</div>
                    ) : null}
                  </span>
                </div>
                <div className="col-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Middle name"
                    aria-label="Middle name"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                    id="LastName"
                    name="LastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.LastName}
                  />{" "}
                  <span style={{ color: "red" }}>
                    {formik.touched.LastName && formik.errors.LastName ? (
                      <div>{formik.errors.LastName}</div>
                    ) : null}
                  </span>
                </div>
                <div className="col-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Suffix Name"
                    aria-label="Suffix Name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 align-items-center m-2">
          <div className="col-6">
            <div className="row align-items-center">
              <div className="col-4">
                <label for="externalID" className="col-form-label">
                  External ID:
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="externalID"
                  name="externalID"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.externalID}
                />
                <span style={{ color: "red" }}>
                  {formik.touched.externalID && formik.errors.externalID ? (
                    <div>{formik.errors.externalID}</div>
                  ) : null}
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row align-items-center">
              <div className="col-4 text-danger">
                <label for="dob" className="col-form-label">
                  DOB :
                </label>
              </div>
              <div className="col-6">
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dob}
                />
                <span style={{ color: "red" }}>
                  {formik.touched.dob && formik.errors.dob ? (
                    <div>{formik.errors.dob}</div>
                  ) : null}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 align-items-center m-2">
          <div className="col-6">
            <div className="row align-items-center">
              <div className="col-4 text-danger">
                <label for="sex" className="col-form-label">
                  Sex:
                </label>
              </div>
              <div className="col-6">
                <select
                  id="sex"
                  name="sex"
                  className="form-select"
                  aria-label="Default select example"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sex}
                >
                  <option value={""} selected>
                    Unassigned
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
                <span style={{ color: "red" }}>
                  {formik.touched.sex && formik.errors.sex ? (
                    <div>{formik.errors.sex}</div>
                  ) : null}
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row align-items-center">
              <div className="col-4">
                <label for="Aadhaar" className="col-form-label">
                  Aadhaar Number :
                </label>
              </div>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  id="Aadhaar"
                  name="Aadhaar"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Aadhaar}
                />
                <span style={{ color: "red" }}>
                  {formik.touched.Aadhaar && formik.errors.Aadhaar ? (
                    <div>{formik.errors.Aadhaar}</div>
                  ) : null}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 align-items-center m-2">
          <div className="col-6">
            <div className="row align-items-center">
              <div className="col-4">
                <label for="License" className="col-form-label">
                  License Number :
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="License"
                  name="License"
                  required="required"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.License}
                />
                <span style={{ color: "red" }}>
                  {formik.touched.License && formik.errors.License ? (
                    <div>{formik.errors.License}</div>
                  ) : null}
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row align-items-center">
              <div className="col-4">
                <label for="maritalStatus" className="col-form-label">
                  Marital Status:
                </label>
              </div>
              <div className="col-6">
                <select
                  id="maritalStatus"
                  name="maritalStatus"
                  className="form-select"
                  aria-label="Default select example"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.maritalStatus}
                >
                  <option value={""} selected>
                    Unassigned
                  </option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Others">Others</option>
                </select>
                <span style={{ color: "red" }}>
                  {formik.touched.maritalStatus &&
                  formik.errors.maritalStatus ? (
                    <div>{formik.errors.maritalStatus}</div>
                  ) : null}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 align-items-center m-2">
          <div className="col-2">User Defined :</div>
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              id="userDefined"
              name="userDefined"
              required="required"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userDefined}
            />
            <span style={{ color: "red" }}>
              {formik.touched.userDefined && formik.errors.userDefined ? (
                <div>{formik.errors.userDefined}</div>
              ) : null}
            </span>
          </div>
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              id="userDefined2"
              name="userDefined2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userDefined2}
            />
          </div>
          <div className="col-2">
            <input type="text" className="form-control" />
          </div>
          <div className="col-2">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row g-3 align-items-center m-2">
          <div className="col-2">Billing Note:</div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              id="billingNote"
              name="billingNote"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.billingNote}
            />
            <span style={{ color: "red" }}>
              {formik.touched.billingNote && formik.errors.billingNote ? (
                <div>{formik.errors.billingNote}</div>
              ) : null}
            </span>
          </div>
        </div>
        <div className="row g-3 align-items-center m-2">
          <div className="col-6">
            <div className="row align-items-center">
              <div className="col-4">
                <label for="genderIdentity" className="col-form-label">
                  Gender Identity:
                </label>
              </div>
              <div className="col-6">
                <select
                  id="genderIdentity"
                  name="genderIdentity"
                  className="form-select"
                  aria-label="Default select example"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.genderIdentity}
                >
                  <option value={""} selected>
                    Unassigned
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
                <span style={{ color: "red" }}>
                  {formik.touched.genderIdentity &&
                  formik.errors.genderIdentity ? (
                    <div>{formik.errors.genderIdentity}</div>
                  ) : null}
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row align-items-center">
              <div className="col-4">
                <label for="sexualOrientation" className="col-form-label">
                  Sexual Orientation:
                </label>
              </div>
              <div className="col-6">
                <select
                  id="sexualOrientation"
                  name="sexualOrientation"
                  className="form-select"
                  aria-label="Default select example"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sexualOrientation}
                >
                  <option value={""} selected>
                    Unassigned
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Others">Others</option>
                </select>
                <span style={{ color: "red" }}>
                  {formik.touched.sexualOrientation &&
                  formik.errors.sexualOrientation ? (
                    <div>{formik.errors.sexualOrientation}</div>
                  ) : null}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 align-items-center m-2">
          <div className="col-2 ">
            <label for="birthName" className="col-form-label">
              Birth Name:
            </label>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Birth First name"
                  aria-label="First name"
                  id="birthName"
                  name="birthName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.birthName}
                />
                <span style={{ color: "red" }}>
                  {formik.touched.birthName && formik.errors.birthName ? (
                    <div>{formik.errors.birthName}</div>
                  ) : null}
                </span>
              </div>
              <div className="col-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Middle name"
                  aria-label="Middle name"
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Birth Last name"
                  aria-label="Birth Last name"
                  id="birthLastName"
                  name="birthLastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.birthLastName}
                />{" "}
                <span style={{ color: "red" }}>
                  {formik.touched.birthLastName &&
                  formik.errors.birthLastName ? (
                    <div>{formik.errors.birthLastName}</div>
                  ) : null}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 align-items-center m-2 mb-5">
          <div className="col-2">Previous Names:</div>
          <div className="col-6">
            <select
              id="previousName"
              name="previousName"
              className="form-select"
              size="4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.previousName}
            >
              <option value="">Choose from Menu</option>
              <option value="User A">User A</option>
              <option value="User B">User B</option>
              <option value="User C">User C</option>
              <option value="User D">User D</option>
              <option value="User E">User E</option>
              <option value="User F">User F</option>
              <option value="User G">User G</option>
              <option value="User H">User H</option>
              <option value="None">None of the Above</option>
            </select>
            <span style={{ color: "red" }}>
              {formik.touched.previousName && formik.errors.previousName ? (
                <div>{formik.errors.previousName}</div>
              ) : null}
            </span>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value={"Add User"}
              className="btn btn-primary btn-lg ms-3"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Patient;
