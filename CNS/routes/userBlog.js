var express = require("express");
const mongoose = require("mongoose");
// var Scrap = require("../models/scrap_Data");
var Blog = require('../models/blog');
var Post = require('../models/post')
// var requireLogin = require("../middleware/requireLogin");
var route = express.Router();

route.get("/allblog2", (req, res) => {
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

  route.get("/allpost2",  (req, res) => {
    Post.find()
      .populate("postedBy", "_id name")
      .populate("comments.postedBy", "_id name")
      .sort('-createdAt')
      .then((posts) => {
        res.status(200).json({ posts });
      })
      .catch((error) => {
        console.log(error);
      });
  });
  

  module.exports = route;