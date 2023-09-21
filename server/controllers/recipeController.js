require("../models/database");
const Category = require("../models/Category");

exports.homepage = async (req, res) => {
  res.render("index", { title: "Cooking Page:HomePage" });
};

async function insertDummyCategoryData() {
  try {
    await Category.insertMany([
      {
        name: "Thai",
        image: "thai-food.jpg",
      },
      {
        name: "American",
        image: "american-food.jpg",
      },
      {
        name: "Chinese",
        image: "chinese-food.jpg",
      },
    ]);
  } catch (error) {
    console.log("error: " + error);
  }
}

insertDummyCategoryData();
