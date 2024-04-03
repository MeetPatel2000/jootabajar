const shoes = [
  {
    id: 1,
    image: require("../src/static/shoes/shoe - 1.jpg"),
    productName: "Classic Sneakers",
    productPrice: "$50",
    color1: "White",
    color2: "Black",
    stockAvailable: true,
    name: "men",
    size: "9",
  },
  {
    id: 2,
    image: require("../src/static/shoes/shoe - 2.jpg"),
    productName: "Running Shoes",
    productPrice: "$80",
    color1: "Blue",
    color2: "Red",
    stockAvailable: true,
  },
  {
    id: 3,
    image: require("../src/static/shoes/shoe - 3.jpg"),
    productName: "High Heels",
    productPrice: "$100",
    color1: "Pink",
    color2: "Black",
    stockAvailable: true,
  },
  {
    id: 4,
    image: require("../src/static/shoes/shoe - 4.jpg"),
    productName: "Casual Sandals",
    productPrice: "$40",
    color1: "Brown",
    color2: "Beige",
    stockAvailable: true,
  },
  {
    id: 5,
    image: require("../src/static/shoes/shoe - 5.jpg"),
    productName: "Sports Shoes",
    productPrice: "$70",
    color1: "Green",
    color2: "Gray",
    stockAvailable: false,
  },
  {
    id: 6,
    image: require("../src/static/shoes/shoe - 6.jpg"),
    productName: "Sports Shoes",
    productPrice: "$70",
    color1: "Green",
    color2: "Gray",
    stockAvailable: false,
  },
  {
    id: 7,
    image: require("../src/static/shoes/shoe - 7.jpg"),
    productName: "Sports Shoes",
    productPrice: "$70",
    color1: "Green",
    color2: "Gray",
    stockAvailable: false,
  },
  {
    id: 8,
    image: require("../src/static/shoes/shoe - 8.jpg"),
    productName: "Sports Shoes",
    productPrice: "$70",
    color1: "Green",
    color2: "Gray",
    stockAvailable: false,
  },

  {
    id: 9,
    image: require("../src/static/shoes/shoe - 9.jpg"),
    productName: "Sports Shoes",
    productPrice: "$70",
    color1: "Green",
    color2: "Gray",
    stockAvailable: false,
  },

  {
    id: 10,
    image: require("../src/static/shoes/shoe - 10.jpg"),
    productName: "Sports Shoes",
    productPrice: "$70",
    color1: "Green",
    color2: "Gray",
    stockAvailable: false,
  },

  {
    id: 11,
    image: require("../src/static/shoes/shoe - 11.jpeg"),
    productName: "Running Shoes",
    productPrice: "$80",
    color1: "Blue",
    color2: "White",
    stockAvailable: true,
  },
  {
    id: 12,
    image: require("../src/static/shoes/shoe - 12.jpg"),
    productName: "Casual Shoes",
    productPrice: "$60",
    color1: "Brown",
    color2: "Beige",
    stockAvailable: true,
  },
  {
    id: 13,
    image: require("../src/static/shoes/shoe - 13.jpg"),
    productName: "Sneakers",
    productPrice: "$90",
    color1: "Red",
    color2: "Black",
    stockAvailable: true,
  },
  {
    id: 14,
    image: require("../src/static/shoes/shoe - 14.jpg"),
    productName: "High Heels",
    productPrice: "$120",
    color1: "Black",
    color2: "Silver",
    stockAvailable: false,
  },
  {
    id: 15,
    image: require("../src/static/shoes/shoe - 15.jpg"),
    productName: "Boots",
    productPrice: "$100",
    color1: "Brown",
    color2: "Gold",
    stockAvailable: true,
  },
  {
    id: 16,
    image: require("../src/static/shoes/shoe - 16.jpg"),
    productName: "Flip Flops",
    productPrice: "$30",
    color1: "Pink",
    color2: "Orange",
    stockAvailable: true,
  },
  {
    id: 17,
    image: require("../src/static/shoes/shoe - 17.jpg"),
    productName: "Sandals",
    productPrice: "$50",
    color1: "Blue",
    color2: "Green",
    stockAvailable: true,
  },
  {
    id: 18,
    image: require("../src/static/shoes/shoe - 18.png"),
    productName: "Formal Shoes",
    productPrice: "$110",
    color1: "Black",
    color2: "White",
    stockAvailable: true,
  },
  {
    id: 19,
    image: require("../src/static/shoes/shoe - 19.jpg"),
    productName: "Slippers",
    productPrice: "$25",
    color1: "Gray",
    color2: "Black",
    stockAvailable: false,
  },
  {
    id: 20,
    image: require("../src/static/shoes/shoe - 9.jpg"),
    productName: "Platform Shoes",
    productPrice: "$95",
    color1: "White",
    color2: "Pink",
    stockAvailable: true,
  },
  {
    id: 21,
    image: require("../src/static/shoes/shoe - 16.jpg"),
    productName: "Hiking Boots",
    productPrice: "$85",
    color1: "Brown",
    color2: "Green",
    stockAvailable: true,
  },
  {
    id: 22,
    image: require("../src/static/shoes/shoe - 2.jpg"),
    productName: "Ankle Boots",
    productPrice: "$70",
    color1: "Black",
    color2: "Brown",
    stockAvailable: false,
  },
  {
    id: 23,
    image: require("../src/static/shoes/shoe - 23.jpg"),
    productName: "Espadrilles",
    productPrice: "$45",
    color1: "Blue",
    color2: "Red",
    stockAvailable: true,
  },
  {
    id: 24,
    image: require("../src/static/shoes/shoe - 24.jpg"),
    productName: "Dress Shoes",
    productPrice: "$115",
    color1: "Black",
    color2: "Brown",
    stockAvailable: true,
  },
  {
    id: 25,
    image: require("../src/static/shoes/shoe - 25.jpg"),
    productName: "Clogs",
    productPrice: "$55",
    color1: "Yellow",
    color2: "Orange",
    stockAvailable: false,
  },
  {
    id: 26,
    image: require("../src/static/shoes/shoe - 26.jpeg"),
    productName: "Wedge Shoes",
    productPrice: "$75",
    color1: "Black",
    color2: "Silver",
    stockAvailable: true,
  },
  {
    id: 27,
    image: require("../src/static/shoes/shoe - 27.jpg"),
    productName: "Rain Boots",
    productPrice: "$60",
    color1: "Blue",
    color2: "Yellow",
    stockAvailable: true,
  },
  {
    id: 28,
    image: require("../src/static/shoes/shoe - 28.png"),
    productName: "Lace-Up Shoes",
    productPrice: "$65",
    color1: "White",
    color2: "Blue",
    stockAvailable: false,
  },
  {
    id: 29,
    image: require("../src/static/shoes/shoe - 29.jpg"),
    productName: "Moccasins",
    productPrice: "$40",
    color1: "Brown",
    color2: "Tan",
    stockAvailable: true,
  },
  {
    id: 30,
    image: require("../src/static/shoes/shoe - 30.jpg"),
    productName: "Oxford Shoes",
    productPrice: "$95",
    color1: "Black",
    color2: "White",
    stockAvailable: true,
  },
  {
    id: 31,
    image: require("../src/static/shoes/shoe - 3.jpg"),
    productName: "Boat Shoes",
    productPrice: "$70",
    color1: "Navy",
    color2: "Beige",
    stockAvailable: false,
  },
  {
    id: 32,
    image: require("../src/static/shoes/shoe - 34.jpg"),
    productName: "Chukka Boots",
    productPrice: "$85",
    color1: "Brown",
    color2: "Tan",
    stockAvailable: true,
  },
  {
    id: 33,
    image: require("../src/static/shoes/shoe - 13.jpg"),
    productName: "Slingback Shoes",
    productPrice: "$75",
    color1: "Black",
    color2: "Gold",
    stockAvailable: true,
  },
  {
    id: 34,
    image: require("../src/static/shoes/shoe - 34.jpg"),
    productName: "Snow Boots",
    productPrice: "$110",
    color1: "Black",
    color2: "Gray",
    stockAvailable: true,
  },
  {
    id: 35,
    image: require("../src/static/shoes/shoe - 35.jpg"),
    productName: "Thigh-High Boots",
    productPrice: "$120",
    color1: "Black",
    color2: "Red",
    stockAvailable: false,
  },
  {
    id: 36,
    image: require("../src/static/shoes/shoe - 36.jpg"),
    productName: "Work Boots",
    productPrice: "$90",
    color1: "Brown",
    color2: "Black",
    stockAvailable: true,
  },
  {
    id: 37,
    image: require("../src/static/shoes/shoe - 37.jpg"),
    productName: "Wingtip Shoes",
    productPrice: "$100",
    color1: "Black",
    color2: "Brown",
    stockAvailable: true,
  },
  {
    id: 38,
    image: require("../src/static/shoes/shoe - 38.jpg"),
    productName: "Pumps",
    productPrice: "$85",
    color1: "Red",
    color2: "Black",
    stockAvailable: false,
  },
  {
    id: 39,
    image: require("../src/static/shoes/shoe - 39.jpg"),
    productName: "Workout Shoes",
    productPrice: "$75",
    color1: "Black",
    color2: "Pink",
    stockAvailable: true,
  },
  {
    id: 40,
    image: require("../src/static/shoes/shoe - 40.jpg"),
    productName: "Walking Shoes",
    productPrice: "$75",
    color1: "Yellow",
    color2: "Gray",
    stockAvailable: false,
  },
];

export default shoes;
