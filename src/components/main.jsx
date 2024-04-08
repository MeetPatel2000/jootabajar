import React, { useState } from "react";
import { motion } from "framer-motion";
import shoesCards from "../shoesCards";
import Entry from "./entry";

function createEntry(cardDetail) {
  return (
    <motion.div
      whileHover={{ rotateY: 10, scale: 1.05, zIndex: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Entry
        key={cardDetail.id}
        image={cardDetail.image}
        name={cardDetail.productName}
        price={cardDetail.productPrice}
        size={cardDetail.size}
      />
    </motion.div>
  );
}

const Main = () => {
  const [filterSize, setFilterSize] = useState("");

  const filterProductsBySize = shoesCards.filter((shoe) =>
    filterSize === ""
      ? true
      : shoe.size.toLowerCase() === filterSize.toLowerCase()
  );

  return (
    <>
      <div className="side_container">
        <div className="sidebar">
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
            <select
              class="filterby"
              value={filterSize}
              onChange={(e) => setFilterSize(e.target.value)}
            >
              <option value="">All Sizes</option>
              <option value="7">Size 7</option>
              <option value="8">Size 8</option>
              <option value="9">Size 9</option>
              <option value="10">Size 10</option>
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
      </div>
      <div className="main-container">
        <div>
          {filterProductsBySize.map((product, index) => (
            <div className="box" key={index}>
              {createEntry(product)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
