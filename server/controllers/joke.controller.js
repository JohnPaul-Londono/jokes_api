const Joke = require("../models/joke.model");

// module.exports.testResponse = (req, res) => {
//     res.json({ message: "inside the controller" });
// }

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(results => res.json({ results: results }))
        .catch(err => res.status(404).json({ message: "didnt werq sucka", error: err }));
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ results: newJoke }))
        .catch(err => res.status(400).json({ message: "didnt werq sucka", error: err }))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then(results => res.json({ results: results }))
        .catch(err => res.status(404).json({ message: "didnt werq sucka", error: err }));
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(results => res.json({ results: results }))
        .catch(err => res.status(404).json({ message: "didnt werq sucka", error: err }));
}

module.exports.updateOneJoke = (req, res) => {
    Joke.updateOne({ _id: req.params._id }, req.body)
        .then(results => res.json({ results: results }))
        .catch(err => res.status(400).json({ message: "didnt werq", error: err }))
}

// module.exports.randomJoke = (req,res) => {
//     Joke.find()
//     .then( results => res.json({results[Math.floor(Math.random()*results.length)]}))
// }