const mongoose = require('./connection');

const type = {
  s: {
    type: String,
    required: true,
  },
  n: {
    type: Number,
    required: true,
  },
  a: {
    type: Array,
    required: false,
  },
  d: {
    type: Date,
    default: Date.now(),
  },
};

const motorSchema = new mongoose.Schema({
  model: (type.s),
  tension: (type.n),
  magnets: (type.n),
  poles: (type.n),
  potency: (type.s),
  wire: (type.s),
  turns: (type.n),
  'parallel-wire': (type.n),
  'wire-length': (type.s),
  images: (type.a),
  date: (type.d),
  
});

// const newMotor = async (obj) => {
//   const response = await mongoose.model('Motor', motorSchema).create(obj);
//   return response;
// };

module.exports = mongoose.model('Motor', motorSchema);
