
import express = require('express');
const Router = express.Router();


const FeedBack = require('../models/feedback');

Router.get('/feedback', async (req: express.Request ,res : express.Response) => {
  try {
    const Feedback = await FeedBack.find();
    res.send(Feedback)
  } catch (e) {
    res.status(500).send(e);
  }
})

Router.get('/feedback/:id', async (req,res) => {
  const _id = req.params.id;
  try {
    const feedback = await FeedBack.findOne({_id});
    if (!feedback) {
      return res.status(404).send({message: "feedback not found for id"})
    }
    return res.status(200).send(feedback)
  } catch (e) {
    return res.status(500).send(e);
  }
});

Router.post('/feedback', async (req,res) => {
  const feedback = new FeedBack({
    rating: req.body.rating,
    text: req.body.text
  })
  try {
    await feedback.save();
    return res.status(201).send(feedback);
  } catch (e) {
    return res.status(400).send(e);
  }
});

Router.delete('/feedback/:id', async (req,res) => {
  const _id = req.params.id;
  try {
    await FeedBack.findOneAndDelete({_id});
    return res.status(201).send();
  } catch (e) {
    return res.status(400).send(e);
  }
});

Router.patch('/feedback/:id', async (req,res) => {
  const _id = req.params.id;
  try {
    const feedback = await FeedBack.findByIdAndUpdate(_id, req.body, { new: true});

    if (!feedback) {
      return res.status(404).send()
    }

    res.send(feedback)
  } catch (e) {
    return res.status(500).send(e);
  }
})

module.exports = Router;