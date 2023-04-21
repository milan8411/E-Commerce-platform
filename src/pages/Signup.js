import React from "react";

import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
function Signup() {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="text" name="name" placeholder="name" />

                {/* <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="last name"
                    className="form-control"
                  />
                </div> */}
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="mobile number"
                />
                <CustomInput type="email" name="email" placeholder="email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="password"
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Create</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Signup;
