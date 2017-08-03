const express = require("express")
const authRoutes = express.Router()
const passport = require("passport")
const bcrypt = require("bcrypt")
const bcryptSalt = 10
const ensureLogin = require("connect-ensure-login")
const AuthController = require("../controllers/AuthController")
const User = require("../models/User")

authRoutes.get("/signup", AuthController.signup)
authRoutes.post('/signup', (req, res, next) => {
  const {
    username,
    password
  } = req.body;

  if (!username || !password) {
    res.status(400).json({
      message: 'Provide username and password'
    });
    return;
  }

  User.findOne({
    username
  }, '_id').exec().then(foundUser => {
    if (foundUser) {
      res.status(400).json({
        message: 'The username already exists'
      });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const theUser = new User({
      username,
      password: hashPass
    }).save().then(user => {
      req.login(user, (err) => {
        if (err) {
          res.status(500).json({
            message: 'Something went wrong'
          });
          return;
        }
        res.status(200).json(req.user);
      });
    }).catch(e => res.status(400).json({
      message: 'Something went wrong'
    }));

  });
});

authRoutes.get('/login',ensureLogin.ensureLoggedOut('/'), AuthController.login)
authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local-login', (err, user, failureDetails) => {
    if (err) {
      res.status(500).json({
        message: 'Something went wrong'
      })
      return
    }

    if (!user) {
      res.status(401).json(failureDetails)
      return
    }

    req.login(user, (err) => {
      if (err) {
        res.status(500).json({
          message: 'Something went wrong'
        })
        return
      }
      // We are now logged in (notice req.user)
      res.status(200).json(req.user)
    })
  })(req, res, next)
})

authRoutes.get("/logout", AuthController.logout)

function ensureLoginOrJsonError(error = "Unauthorized") {
  return (req, res, next) => req.isAuthenticated() ? next() : res.status(403).json({
    error: error
  });
}

/* Check if user is logged in and returns the user or shows error as JSON instead*/
authRoutes.get('/loggedin', ensureLoginOrJsonError(), (req, res, next) => {
  console.log('Entro en LOGGEDIN');
  console.log(req.user);
  return res.status(200).json(req.user);
});

module.exports = authRoutes
