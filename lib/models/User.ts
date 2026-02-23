import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  points: number;
  totalSolves: number;
  badges: string[];
  joinDate: Date;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  points: { type: Number, default: 0 },
  totalSolves: { type: Number, default: 0 },
  badges: [{ type: String }],
  joinDate: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: null },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);