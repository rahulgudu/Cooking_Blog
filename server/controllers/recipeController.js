require("../models/database");
const Category = require("../models/Category");

// --get / --
exports.homepage = async (req, res) => {
  try{ 
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    res.render("index", { title: "Cooking Page:HomePage", categories });
  } catch(error){
    res.status(500).send({message: error.message || "Error Occcured"});
  }
};


// --get /categories--

exports.exploreCategories = async(req, res)=>{
  try{
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render("categories", {title: "Cooking Blog - Categories", categories});
  } catch (error){
    res.staus(500).send({message: error.message || "Error Occured" });
  }
}


// --I have commented the below codes, as it will keep on adding the same data to the database--
// async function insertDummyCategoryData() {
//   try {
//     await Category.insertMany([
//       {
//         name: "Thai",
//         image: "thai-food.jpg",
//       },
//       {
//         name: "American",
//         image: "american-food.jpg",
//       },
//       {
//         name: "Chinese",
//         image: "chinese-food.jpg",
//       },
//       {
//         name: "Mexican",
//         image: "mexican-food.jpg"
//       },
//       {
//         name: "Indian",
//         image: "indian-food.jpg"
//       },
//       {
//         name: "Spanish",
//         image: "spanish-food.jpg"
//       },
//     ]);
//   } catch (error) {
//     console.log("error: " + error);
//   }
// }

// insertDummyCategoryData();
