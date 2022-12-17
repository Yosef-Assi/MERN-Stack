const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(allDaUsers => res.json({ jokes: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.findOneJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleUser => res.json({ joke: oneSingleUser }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.findRandomJoke = (req, res) => {
	Joke.aggregate([{ $sample: { size: 1 } }])
		.then(oneRandomJoke => res.json({ joke: oneRandomJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
      .then(newlyCreatedUser => res.json({ joke: newlyCreatedUser }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedUser => res.json({ joke: updatedUser }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
