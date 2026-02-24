import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    challengeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Challenge',
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: 'javascript',
    },
    status: {
      type: String,
      enum: ['Accepted', 'Rejected', 'Pending'],
      default: 'Pending',
    },
    message: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

export default mongoose.models.Submission || mongoose.model('Submission', submissionSchema);