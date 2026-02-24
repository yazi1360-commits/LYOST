import mongoose from 'mongoose';

const challengeSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      default: 'Easy',
    },
    points: {
      type: Number,
      required: true,
    },
    statement: {
      type: String,
      required: true,
    },
    starter: {
      type: String,
      required: true,
    },
    testCases: [
      {
        input: String,
        output: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Challenge || mongoose.model('Challenge', challengeSchema);