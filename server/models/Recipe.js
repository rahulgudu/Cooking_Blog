const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "This is required"
    },
    description: {
        type: String,
        required: "This is required"
    },
    email: {
        type: String,
        required: "This is required"
    },
    ingredients: {
        type: Array,
        required: "This is required"
    },
    category: {
        type: String,
        enum: ["Thai", "American", "Chinese", "Mexican", "Indian"],
        required: "This is required"
    },
    image: {
        type: String,
        required: "This is required"
    },
});

//this is code i.e, required for implementing search feature
recipeSchema.index({ name: 'text', description: 'text' });
// --end--

module.exports = mongoose.model("Recipe", recipeSchema);