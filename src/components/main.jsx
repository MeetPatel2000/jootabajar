import React from "react";

const Main = () => {
  return (
    <>
      <div className="main-container">
        <div className="sidebar">
          <div class="filter_menu">
            <article>
              <p>Category_1:</p>
              <select class="filterby">
                <option value="all">All</option>
                <option value="c1_o1">c2_o1</option>
                <option value="c1_o2">c2_01</option>
                <option value="c1_o2">c2_o2</option>
                <option value="c1_o3">c2_o3</option>
              </select>
            </article>
            <article>
              <p>Category_2:</p>
              <select class="filterby">
                <option value="all">All</option>
                <option value="c2_o1">c2_o1</option>
                <option value="c2_o12">c2_1</option>
                <option value="c2_o2">c2_o2</option>
                <option value="c2_o3">c2_o3</option>
              </select>
            </article>

            <article>
              <p>Category_3:</p>
              <select class="filterby">
                <option value="all">All</option>
                <option value="c3_o1">c3_o1</option>
                <option value="c3_o12">c3_1</option>
                <option value="c3_o2">c3_o2</option>
                <option value="c3_o3">c3_o3</option>
              </select>
            </article>
            <article>
              <p>★Rating★:</p>
              <select class="filterby">
                <option value="all">All Ratings</option>
                <option value="star_0">☆☆☆☆☆</option>
                <option value="star_1">★☆☆☆☆</option>
                <option value="star_2">★★☆☆☆</option>
                <option value="star_3">★★★☆☆</option>
                <option value="star_4">★★★★☆</option>
                <option value="star_5">★★★★★</option>
              </select>
            </article>
          </div>
          <br />

          <div id="container" class="container">
            <div class="all">All</div>
            <div class="all trait trait star_0">
              <a href="#amber">One</a>
            </div>
            <div class="all trait trait star_1">
              <a href="#amber">Two</a>
            </div>
            <div class="all trait trait star_5">
              <a href="#amber">Three</a>
            </div>
            <div class="all trait trait star_4">
              <a href="#amber">Four</a>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="card card-1">
            <img
              className="cardimg"
              src={require("../static/logo.png")}
              alt="img"
            />
            <h4>Product Name</h4>
            <h5>Product Price</h5>
          </div>
          <div className="card card-1">
            <img
              className="cardimg"
              src={require("../static/logo.png")}
              alt="img"
            />
            <h4>Product Name</h4>
            <h5>Product Price</h5>
          </div>
          <div className="card card-1">
            <img
              className="cardimg"
              src={require("../static/logo.png")}
              alt="img"
            />
            <h4>Product Name</h4>
            <h5>Product Price</h5>
          </div>
          <div className="card card-1">
            <img
              className="cardimg"
              src={require("../static/logo.png")}
              alt="img"
            />
            <h4>Product Name</h4>
            <h5>Product Price</h5>
          </div>
          <div className="card card-1">
            <img
              className="cardimg"
              src={require("../static/logo.png")}
              alt="img"
            />
            <h4>Product Name</h4>
            <h5>Product Price</h5>
          </div>
          <div className="card card-1">
            <img
              className="cardimg"
              src={require("../static/logo.png")}
              alt="img"
            />
            <h4>Product Name</h4>
            <h5>Product Price</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
