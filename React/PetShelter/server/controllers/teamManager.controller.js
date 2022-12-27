const { Pet } = require('../models/teamManager.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPet = (request, response) => {
    const { name,date,status } = request.body;
Pet.create({
    name,date,status
    })
        .then(Pet => response.json(Pet))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPets = (request, response) => {
    Pet.find({})
        .then(Pets => response.json(Pets))
        .catch(err => response.json(err))
}
module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(Pet => response.json(Pet))
        .catch(err => response.json(err))
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {
        new: true,
        runValidators: [true, "{PATH} is required"],
      })
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.status(400).json(err));
}
module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.updateStatusPet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {
        new: true,
        runValidators: [true, "{PATH} is required"],
      })
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.status(400).json(err));
}


