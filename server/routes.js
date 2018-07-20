//get all tasks

// const readAll = require('./controller');
const api = require('./controller');
const bp = require('body-parser');
//import readAll

function router(app){
	app.use(bp.json());
	app.get("/api/pets", api.readAll);
	app.get("/api/pets/:id", api.readOne);
	app.delete("/api/pets/:id", api.deleteOne);
	app.patch("/api/pets/:id", api.updateOne);
	app.post("/api/pets", api.createOne);
	app.post("/api/skills/:id", api.addSkill);
	app.patch("/api/likes/:id", api.addLike);
}

module.exports = router;