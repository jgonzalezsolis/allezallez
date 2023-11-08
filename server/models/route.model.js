const mongoose = require('mongoose');
const RouteSchema = new mongoose.Schema({
    state: { 
        type: String,
        required:[true, "State is required"],
        minlength:[3, "State must be at least 3 characters long"]
    },
    city: { 
        type: String,
        required:[true, "City is required"],
        minlength:[3, "City must be at least 3 characters long"]
    },
    start: { 
        type: String,
        required:[true, "Start is required"],
        minlength:[3, "Start must be at least 3 characters long"]
    },
    end: { 
        type: String,
        required:[true, "End is required"],
        minlength:[3, "End must be at least 3 characters long"]
    },
    rating: { 
        type: Number,
        required:[true, "Rating is required"],
        min:[1, "rating must be at least 1"],
        max:[5, "Maximum rating is 5"]
    },
    distance: { 
        type: Number,
        required:[true, "Distance is required"],
        min:[5, "Distance must be at least 5 miles"]
    },
    suggestions: { 
        type: String,
        required:[true, "suggestions is required"],
    }
},
{ timestamps: true }
)
const Route = mongoose.model('Route', RouteSchema)
module.exports = Route


