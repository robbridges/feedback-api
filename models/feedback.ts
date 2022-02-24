import {Schema, model, } from 'mongoose';



interface Feedback {
  rating: number,
  text: string,
  [key: string ]: number | string
}

// this interface seems much more simple than the user model. We'll probably add more to it, but for now it works. NO need to overcomplicate with unused fuctionality yet



const feedbackSchema = new Schema<Feedback>({
  rating: { 
    type: Number, 
    required: true,
    
  },
  text: {
    type: String,
    required: true,
    
  },
}, {
  timestamps: true,
});



const feedBack = model<Feedback>('Feedback', feedbackSchema)

module.exports = feedBack;