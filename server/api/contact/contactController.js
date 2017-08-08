const contactModel = require('../../models/User.js');

module.exports = {

  listUser: function(req, res) {
    contactModel.find({role: 'User'}, function(err, users) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting users from db.',
          error: err
        });
      }
      return res.json(users);
    });
  },

  listSecurity: function(req, res) {
    contactModel.find({role: ['Security', 'Admin']}, function(err, users) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting users from db.',
          error: err
        });
      }
      return res.json(users);
    });
  },

  showSecurity: function(req, res) {
    const id = req.params.id;
    contactModel.findOne({
      _id: id
    }, function(err, user) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting user from db.',
          error: err
        });
      }
      if (!user) {
        return res.status(404).json({
          message: 'No such user'
        });
      }
      return res.json(user);
    });
  },

  showUser: function(req, res) {
    const id = req.params.id;
    contactModel.findOne({
      _id: id
    }, function(err, user) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting user from db.',
          error: err
        });
      }
      if (!user) {
        return res.status(404).json({
          message: 'No such user'
        });
      }
      return res.json(user);
    });
  },
};
