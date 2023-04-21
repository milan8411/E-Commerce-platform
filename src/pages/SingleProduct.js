import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsIncognito } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

import { Link } from "react-router-dom";

import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";

function SingleProduct() {
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <img
                  src="https://img.etimg.com/thumb/msid-93171891,width-1200,height-800,imgsize-33064,overlay-economictimes/photo.jpg"
                  className="imgdvs"
                  alt="watch"
                />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://img.etimg.com/thumb/msid-93171891,width-1200,height-800,imgsize-33064,overlay-economictimes/photo.jpg"
                  alt="watch"
                  className="imgdvs1"
                />
              </div>
              <div>
                <img
                  src="https://img.etimg.com/thumb/msid-93171891,width-1200,height-800,imgsize-33064,overlay-economictimes/photo.jpg"
                  alt="watch"
                  className="imgdvs1"
                />
              </div>
              <div>
                <img
                  src="https://img.etimg.com/thumb/msid-93171891,width-1200,height-800,imgsize-33064,overlay-economictimes/photo.jpg"
                  alt="watch"
                  className="imgdvs1"
                />
              </div>
              <div>
                <img
                  src="https://img.etimg.com/thumb/msid-93171891,width-1200,height-800,imgsize-33064,overlay-economictimes/photo.jpg"
                  alt="watch"
                  className="imgdvs1"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  kids headphones bulk 10 pack multi colord
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ 100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Review)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>

              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Havels</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availabilty :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15  flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{
                        width: "70px",
                      }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">
                      Add To Cart
                    </button>
                    <button className="button signup">Buy It Now</button>
                  </div>
                </div>
                <div className="d-flex algin-items-center gap-15">
                  <div>
                    <a href="">
                      <BsIncognito className="fs-5 me-2" />
                      Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Shipping And Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns availabel on all order! <br />
                    we ship all us domestic orders <b>5-10 business days</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                However, keep in mind that Bootstrap 5 provides many other
                features and benefits beyond just the "img-fluid"
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end ">
                <div>
                  <h4 className="mb-2">Customer review</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Review</p>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control "
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-3 ">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">dvs</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    However, keep in mind that Bootstrap 5 provides many other
                    features and benefits beyond just the "img-fluid" However,
                    keep in mind that Bootstrap 5 provides many other features
                    and benefits beyond just the "img-fluid"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
}

export default SingleProduct;
