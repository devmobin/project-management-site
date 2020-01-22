const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      default: 'active'
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
