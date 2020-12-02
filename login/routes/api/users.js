const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");


// Retrieve all users
router.get('/', (req, res) => {
  User.find()

.then(users => {
  res.send(users);
})

.catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while getting list of users."
});
});
});

//retrive single user with id
router.get('/:id', (req, res)=>{
  User.findById(req.params.id)
 
  .then(user => {
   
      if(!user) {
          return res.status(404).send({
          message: "User not found with id " + req.params.id
   });
  }
   res.send(user);
  })
  
  .catch(err => {
  
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
          message: "User not found with id " + req.params.id
    });
  }
  
  return res.status(500).send({
    message: "Error getting user with id " + req.params.id
  });
  });
});


// Update a user with id
router.put('/:id', (req, res)=> {
  // Validate Request
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}

// Find user and update it with the request body
User.findByIdAndUpdate(req.params.id, {
  name: req.body.name,
  username: req.body.username,
  email: req.body.email,
  phone: req.body.phone,
  // password: req.body.password,
  // createdby: req.body.createdby,
}, {new: true})

.then(user => {
if(!user) {
   return res.status(404).send({
   message: "user not found with id " + req.params.id
 });
}
res.send(user);
})

.catch(err => {
if(err.kind === 'ObjectId') {
  return res.status(404).send({
  message: "user not found with id " + req.params.id
});
}

return res.status(500).send({
  message: "Error updating user with id " + req.params.id + err
});
});
});

// Delete a user with id
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)

.then(user => {
if(!user) {
  return res.status(404).send({
  message: "user not found with id " + req.params.id
});
}
res.send({message: "user deleted successfully!"});
})

.catch(err => {
if(err.kind === 'ObjectId' || err.name === 'NotFound') {
  return res.status(404).send({
  message: "user not found with id " + req.params.id
});
}

return res.status(500).send({
  message: "Could not delete user with id " + req.params.id
});
});
});






// register user
router.post("/register", (req, res) => {

  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        
        const newUser = new User({
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          createdby: req.body.createdby,
          phone: req.body.phone
         
        });
        

        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

  router.post("/session", (req, res) => {

    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {

      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }

      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {

          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };

          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 1000000
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
                name: user.name
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

//logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.send("logged out", 401);
  });




  module.exports = router;