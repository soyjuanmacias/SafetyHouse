const sosModel = require('./sosModel.js');

module.exports = {

  list: function(req, res) {
    sosModel.find(function(err, soss) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting sos.',
          error: err
        });
      }
      return res.json(soss);
    });
  },

  show: function(req, res) {
    const id = req.params.id;
    sosModel.findOne({
        _id: id
      },
      function(err, sos) {
        if (err) {
          return res.status(500).json({
            message: 'Error when getting SOS Alert.',
            error: err
          });
        }
        if (!sos) {
          return res.status(404).json({
            message: 'No such SOS Alert'
          });
        }
        return res.json(sos);
      });
  },

  create: function(req, res) {
    const {lat, lon, user, isEmergency} = req.body
    const newsos = new sosModel({lat, lon, user, isEmergency});

    sos.save(function(err, sos) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating sos',
          error: err
        });
      }
      return res.status(201).json(sos);
    });
  },

  update: function(req, res) {
    const id = req.params.id;
    sosModel.findOne({
      _id: id
    }, function(err, sos) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting sos',
          error: err
        });
      }
      if (!sos) {
        return res.status(404).json({
          message: 'No such sos'
        });
      }

      sos.lat = req.body.lat ? req.body.lat : sos.lat;
      sos.lon = req.body.lon ? req.body.lon : sos.lon;
      sos.user = req.body.user ? req.body.user : sos.user;
      sos.isEmergency = req.body.isEmergency ? req.body.isEmergency : sos.isEmergency;

      sos.save(function(err, sos) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating sos.',
            error: err
          });
        }

        return res.json(sos);
      });
    });
  },

  remove: function(req, res) {
    const id = req.params.id;
    sosModel.findByIdAndRemove(id, function(err, sos) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the sos.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
