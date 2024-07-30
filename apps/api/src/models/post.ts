import mongoose, { Document, Schema, Types } from 'mongoose';

interface IPost extends Document {
  id: string;
  title: string;
  image: string;
  description: string;
  category: Types.ObjectId;
  comments: [Types.ObjectId];
}

export const postSchema = new Schema<IPost>({
  id: {
    type: String,
    required: [true, 'Property is required']
  },
  title: {
    type: String,
    required: [true, 'Property is required']
  },
  image: {
    type: String,
    required: [true, 'Property is required']
  },
  description: {
    type: String,
    required: [true, 'Property is required']
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: [true, 'Property is required']
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment",
    required: [true, 'Property is required']
  }]
}, {
  timestamps: true
});

const Post = mongoose.model<IPost>('Post', postSchema);

export default Post;
