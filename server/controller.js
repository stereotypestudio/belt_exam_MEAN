// import { Tasks } from './models';
const Pets = require('./models');
//get all tasks
function readAll(req, res){
	Pets.find({}).sort([['type', 'ascending']])
	.then(data=> res.json(data))
	.catch(errs=> res.json(errs));
}

function readOne(req, res){
	Pets.findById(req.params.id)
	.then(data=> res.json(data))
	.catch(errs=> res.json(errs));
}

function deleteOne(req, res){
	Pets.findByIdAndRemove(req.params.id)
	.then(data=> res.json(data))
	.catch(errs=> res.json(errs));
}

function updateOne(req, res){
	Pets.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, context: "query"}) //
	.then(data=> {
		console.log(req.body.skillsArr)
		console.log(req.body)
		console.log(data);
		for(var s in req.body.skillsArr){
			data.skills[s] = {skill: req.body.skillsArr[s]};
			console.log(s);
		}
		data.save();
		res.json(data);
	})
	.catch(errs=> res.json(errs));
}

function createOne(req, res){
	Pets.create(req.body)
	.then(data=> {
		console.log(req.body.skillsArr)
		console.log(req.body)
		console.log(data);
		for(var s in req.body.skillsArr){
			data.skills.push({skill: req.body.skillsArr[s]});
			console.log(s);
		}
		data.save();
		res.json(data);
	})
	.catch(errs=> res.json(errs));
}

function addSkill(req, res){
	Pets.findByIdAndUpdate(req.params.id, {$push: {skills: req.body}})
	.then(data=> {
		console.log(req.body._id, req.body.skill)
		console.log(data);
		res.json(data);
	})
	.catch(errs=> res.json(errs));
}

function addLike(req, res){
	Pets.findById(req.params.id)
	.then(pet => {
		pet.likes += 1;
		pet.save();
		res.json(pet);
	})
	.catch(errs => {
		console.log("errs:" ,errs);
		res.json(errs)
	})
}

//deleteVote 
//findByIdAndUpdate( author_id, {$pull {quotes: {_id: quote_id}}})

module.exports = {
	readAll: readAll,
	readOne: readOne,
	deleteOne: deleteOne,
	updateOne: updateOne,
	createOne: createOne,
	addSkill: addSkill,
	addLike: addLike
};





//unique validator mongoose-unique-validator 

// module.exports = {readAll, readOne}