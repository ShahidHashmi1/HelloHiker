const { Schema, model } = require('mongoose');

const trailSchema = new Schema({
    name: {
        type: String,
        required: true, 
        unique: true,
    },
   description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    }
});

const Trails = model('Trails', trailSchema);

module.export = Trails;