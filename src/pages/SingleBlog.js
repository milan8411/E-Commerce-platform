import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
function SingleBlog() {
  return (
    <>
      <Meta title={"Dynamic"} />
      <BreadCrumb title="Dynamic" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <BsArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <img
                src="images/blog-1.jpg"
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p>
                However, keep in mind that Bootstrap 5 provides many other
                features and benefits beyond just the "img-fluid" However, keep
                in mind that Bootstrap 5 provides many other features and
                benefits beyond just the "img-fluid" However, keep in mind that
                Bootstrap 5 provides many other features and benefits beyond
                just the "img-fluid" However, keep in mind that Bootstrap 5
                provides many other features and benefits beyond just the
                "img-fluid"
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SingleBlog;
