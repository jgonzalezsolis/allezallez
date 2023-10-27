const Route = require('../models/route.model');

module.exports ={
    allRoutes: (req,res) => {
        Route.find({})
            .then((routes)=>{
                console.log(routes);
                res.status(200).json(routes);
            })
            .catch(err=>{
                res.status(500).json({message: 'Error in controllers for find all routes',error: err})
            })
    },
    getOneRoute: (req, res) => {
        Route.findOne({_id: req.params.id })
            .then((oneRoute)=>{
                console.log(oneRoute)
                res.status(200).json(oneRoute)
            })
            .catch((err)=>{
                res.status(500).json({message: 'error in the controllers for find one route', error: err})
            })
    },
    createNewRoute: (req, res) => {
        Route.create(req.body)
        .then(newRoute=>{
            console.log(newRoute)
            res.status(200).json( newRoute)
        })
        .catch(err=>{
            res.status(500).json({message: 'error in the controllers for create new route', error: err})
        })
    },
    updateRoute: (req, res) => {
        Route.findOneAndUpdate(
            { _id: req.params.id }, 
            req.body,
            {new: true, runValidators: true}
            )
            .then(updatedRoute => {
                console.log(updatedRoute)
                res.status(200).json( updatedRoute)
            })
            .catch(err => {
                res.status(500).json({message: 'Something went wrong in the update route controllers', error: err})
            })
    },
    deleteRoute: (req, res) => {
        Route.deleteOne({ _id: req.params.id })
            .then(deleted => {
                res.status(200).json(deleted)
            })
            .catch(err => {
                res.status(500).json({message: 'Something went wrong in the delete route controllers', error: err})
            })
    }
}

