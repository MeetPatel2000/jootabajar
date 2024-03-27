import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Main = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <>
      <div className="main-container">
        <div className="sidebar">
          <div class="filter_menu">
            <article>
              <p>Gender:</p>
              <select class="filterby">
                <option value="all">All</option>
                <option value="men">Men's</option>
                <option value="women">Women's</option>
                <option value="kids">Kids'</option>
              </select>
            </article>
            <article>
              <p>Brand:</p>
              <select class="filterby">
                <option value="all">All Brands</option>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
                <option value="puma">Puma</option>
                <option value="reebok">Reebok</option>
              </select>
            </article>

            <article>
              <p>Size:</p>
              <select class="filterby">
                <option value="all">All Sizes</option>
                <option value="size_7">Size 7</option>
                <option value="size_8">Size 8</option>
                <option value="size_9">Size 9</option>
                <option value="size_10">Size 10</option>
              </select>
            </article>
            <article>
              <p>Price Range:</p>
              <select class="filterby">
                <option value="all">All Prices</option>
                <option value="under_50">$0 - $50</option>
                <option value="50_100">$50 - $100</option>
                <option value="100_200">$100 - $200</option>
                <option value="over_200">Over $200</option>
              </select>
            </article>
          </div>
          <br />

          <div id="container" class="container">
            <div class="all">All</div>
            <div class="all trait trait star_0">
              <a href="#running_shoes">Running Shoes</a>
            </div>
            <div class="all trait trait star_1">
              <a href="#sneakers">Sneakers</a>
            </div>
            <div class="all trait trait star_5">
              <a href="#boots">Boots</a>
            </div>
            <div class="all trait trait star_4">
              <a href="#sandals">Sandals</a>
            </div>
          </div>
        </div>

        <div className="main-content">
          <motion.div
            className="card card-1"
            whileHover={{ rotateY: 10, scale: 1.05, zIndex: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="card card-1">
              <img
                className="cardimg"
                src={require("../static/logo.png")}
                alt="img"
              />
              <h4>Product Name</h4>
              <h5>Product Price</h5>
            </div>
          </motion.div>
          <motion.div
            className="card card-2"
            whileHover={{ rotateY: 10, scale: 1.05, zIndex: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="card card-2">
              <img
                className="cardimg"
                src={require("../static/logo.png")}
                alt="img"
              />
              <h4>Product Name</h4>
              <h5>Product Price</h5>
            </div>
          </motion.div>
          <motion.div
            className="card card-3"
            whileHover={{ rotateY: 10, scale: 1.05, zIndex: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="card card-3">
              <img
                className="cardimg"
                src={require("../static/logo.png")}
                alt="img"
              />
              <h4>Product Name</h4>
              <h5>Product Price</h5>
            </div>
          </motion.div>
          <motion.div
            className="card card-4"
            whileHover={{ rotateY: 10, scale: 1.05, zIndex: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="card card-4">
              <img
                className="cardimg"
                src={require("../static/logo.png")}
                alt="img"
              />
              <h4>Product Name</h4>
              <h5>Product Price</h5>
            </div>
          </motion.div>
          <motion.div
            className="card card-5"
            whileHover={{ rotateY: 10, scale: 1.05, zIndex: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="card card-5">
              <img
                className="cardimg"
                src={require("../static/logo.png")}
                alt="img"
              />
              <h4>Product Name</h4>
              <h5>Product Price</h5>
            </div>
          </motion.div>
          <motion.div
            className="card card-6"
            whileHover={{ rotateY: 10, scale: 1.05, zIndex: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="card card-6">
              <img
                className="cardimg"
                src={require("../static/logo.png")}
                alt="img"
              />
              <h4>Product Name</h4>
              <h5>Product Price</h5>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Main;
