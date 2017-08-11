const alertModel = require('./alertModel.js');
var socket = require('socket.io-client')('http://localhost:3001');

module.exports = {
  list: function(req, res) {
    // socket.emit('notification:security', 'MAN ROBAO');

    alertModel.find(function(err, alerts) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting alert.',
          error: err
        });
      }
      return res.json(alerts);
    });
  },

  show: function(req, res) {
    const id = req.params.id;
    alertModel.findOne({
      _id: id
    }, function(err, alert) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting alert.',
          error: err
        });
      }
      if (!alert) {
        return res.status(404).json({
          message: 'No such alert'
        });
      }
      return res.json(alert);
    });
  },

  create: function(req, res) {
    console.log('Entro en la alerta create => ');
    console.log(req.body)
    const {
      title,
      description,
      lat,
      lon,
      emergencyLevel,
      status
    } = req.body

    const alert = new alertModel({
      title,
      description,
      lat,
      lon,
      emergencyLevel,
      status
    });

    alert.save(function(err, alert) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating alert',
          error: err
        });
      }
      return res.status(201).json(alert);
    });
  },

  update: function(req, res) {
    const id = req.params.id;
    alertModel.findOne({
      _id: id
    }, function(err, alert) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting alert',
          error: err
        });
      }
      if (!alert) {
        return res.status(404).json({
          message: 'No such alert'
        });
      }

      alert.title = req.body.title ? req.body.title : alert.title;
      alert.description = req.body.description ? req.body.description : alert.description;
      alert.lat = req.body.lat ? req.body.lat : alert.lat;
      alert.lon = req.body.lon ? req.body.lon : alert.lon;
      alert.emergencyLevel = req.body.emergencyLevel ? req.body.emergencyLevel : alert.emergencyLevel;
      alert.status = req.body.status ? req.body.status : alert.status;

      alert.save(function(err, alert) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating alert.',
            error: err
          });
        }

        return res.json(alert);
      });
    });
  },

  remove: function(req, res) {
    const id = req.params.id;
    alertModel.findByIdAndRemove(id, function(err, alert) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the alert.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
