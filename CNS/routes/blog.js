var express = require("express");
const mongoose = require("mongoose");
// var Scrap = require("../models/scrap_Data");
var Blog = require('../models/blog');
var requireLogin = require("../middleware/requireLogin");
var route = express.Router();

//ALL_blog

route.get("/allblog", requireLogin, (req, res) => {
  Blog.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .sort('-createdAt')
    .then((blogs) => {
      res.status(200).json({ blogs });
    })
    .catch((error) => {
      console.log(error);
    });
});

//CREATED_blog

route.post("/createblog", requireLogin, (req, res) => {
  var { title, body, pic } = req.body;
  //console.log(title,body,pic)
  if (!title || !body || !pic) {
    return res.status(422).json({ error: "PLEASE ADD ALL THE FIELD" });
  }
  var blog = new Blog({
    title,
    body,
    photo: pic,
    postedBy: req.user,
  });
  blog
    .save()
    .then((result) => {
      //  console.log(result)
      res.json({ blog: result });
    })
    .catch((error) => {
      console.log(error);
    });
});



//MY_blog

route.get("/myblog", requireLogin, (req, res) => {
  Blog.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((myblog) => {
      res.status(200).json({ myblog });
    })
    .catch((error) => {
      console.log(error);
    });
});








module.exports = route;
