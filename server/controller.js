var Pets = require('./models');

module.exports = {

    getAllPets: (req, res) => {
        Pets.find({}).sort([['type']])
            .then(pets => res.json(pets))
            .catch(err => res.json(err))
    },

    getPet: (req, res) => {
        Pets.findById(req.params.id)
            .then(pet => res.json(pet))
            .catch(err => res.json(err))
    },

    createPet: (req, res) => {
        var exists = false;
        var newname = req.body.name;
        console.log(newname);
        Pets.find({})
            .then(allpets => {
                console.log(allpets);
                for (i=0;i<allpets.length;i++) {
                    console.log("pets!")
                    console.log(allpets[i])
                    if (allpets[i].name == newname) {
                        console.log(exists);
                        exists = true;
                        console.log("This name exists. Now to tell the user!")
                        req.body.name=null;
                    }
                }
                Pets.create(req.body)
                    .then(pet => {
                        res.json(pet)
                        console.log("I made a pet")
                    })
                    .catch(err => {
                        res.json(err);
                        console.log(err.errors.name.message)
                    })

            })
    },

    updatePet: (req, res) => {
        console.log("I'm the controller, and I'm updating a pet now")
        //new=true indicates that I'm returning the updated document rather than the original, and runValidators=true indicated that I want the updates information to be run thru the Schema's validations
        Pets.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(pet => {
                res.json(pet);
                console.log("I think that I updated a pet");
            })
            .catch(err => {
                res.json(err);
                console.log("There was a problem updating the pet");
                console.log(err);
            })
    },

    deletePet: (req, res) => {
        Pets.findByIdAndDelete(req.params.id)
            .then(pet => res.json(pet))
            .catch(err => res.json(err))
    },

    likePet: (req, res) => {
        Pets.findByIdAndUpdate(req.params.id)
            .then(pet => {
                pet.likes = pet.likes + 1;
                pet.save();
                res.json(pet)
            })
            .catch(err => res.json(err))
    }

}