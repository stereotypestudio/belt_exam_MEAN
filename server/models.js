const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

mongoose.connect('mongodb://localhost/belt_exam_db', function(){
	console.log('Connected!')
});

const SkillSchema = new mongoose.Schema({
	skill: {type: String, minlength: [3, "skills must be at least 3 characters long"]}
})

const PetSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: [3, "Author names must be at least 3 characters long"], unique: true},
	type: {type: String, required: true, minlength: [3, "Pet type must be at least 3 characters long"]}, 
	description: {type: String, required: true, minlength: [3, "Pet description must be at least 3 characters long"]},
	likes: {type:Number, default: 0},
	skills: [SkillSchema]
}, {timestamps: true})

PetSchema.plugin(uniqueValidator, { message: 'Pet names must be unique' });

const Pets = mongoose.model('pets', PetSchema);

module.exports = Pets