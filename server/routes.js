const controller = require('./controller')
const path = require('path')

module.exports = function(app){
    app.get('/api/pets', controller.getAllPets);//check
    app.get('/api/pets/:id', controller.getPet);//check
    app.get('/api/pets/:id/like', controller.likePet);//check
    app.post('/api/pets', controller.createPet);//check
    app.put('/api/pets/:id', controller.updatePet);//check
    app.delete('/api/pets/:id', controller.deletePet);//check
    app.all("*", (req,res,next) => res.sendFile(path.resolve("./public/dist/public/index.html")))
}