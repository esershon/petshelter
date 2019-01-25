var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/BeltExamPets2');

const SkillSchema = new mongoose.Schema({
    skill1:{type:String},
    skill2:{type:String},
    skill3:{type:String},
})

const PetSchema = new mongoose.Schema({
    name:{type:String, required: [true, "You must enter a unique pet name"], minlength:[3, "Name must be at least 3 characters long."]},
    type:{type:String, minlength:[3, "Type must be at least 3 characters long."]},
    description:{type:String, minlength:[3, "Description must be at least 3 characters long."]},
    skills:[SkillSchema],
    likes:{type:Number}
}, {timestamps:true})

// PetSchema.plugin(uniqueValidator, {message: "This pet is already up for adoption. Please choose a unique name."});
module.exports = mongoose.model('Pets', PetSchema)