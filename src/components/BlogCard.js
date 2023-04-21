import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="blog-card">
      <div className="car-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">11 june, 2223 </p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          However, keep in mind that Bootstrap 5 provides many other features
          and benefits beyond just the "img-fluid"
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
