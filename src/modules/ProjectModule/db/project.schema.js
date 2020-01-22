const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
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
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
