const complaintModel = require('./complaintModel.js');

module.exports = {

  list: function(req, res) {
    complaintModel.find(function(err, complaints) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting complaint.',
          error: err
        });
      }
      return res.json(complaints);
    });
  },

  show: function(req, res) {
    const id = req.params.id;
    complaintModel.findOne({
      _id: id
    }, function(err, complaint) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting complaint.',
          error: err
        });
      }
      if (!complaint) {
        return res.status(404).json({
          message: 'No such complaint'
        });
      }
      return res.json(complaint);
    });
  },

  create: function(req, res) {
    const { title, description, img_url, lat, lon, date, user, status, hour } = req.body
    const complaint = new complaintModel({ title, description, img_url, lat, lon, date, user, status, hour });

    complaint.save(function(err, complaint) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating complaint',
          error: err
        });
      }
      return res.status(201).json(complaint);
    });
  },

  update: function(req, res) {
    const id = req.params.id;
    complaintModel.findOne({
      _id: id
    }, function(err, complaint) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting complaint',
          error: err
        });
      }
      if (!complaint) {
        return res.status(404).json({
          message: 'No such complaint'
        });
      }

      complaint.title = req.body.title ? req.body.title : complaint.title;
      complaint.description = req.body.description ? req.body.description : complaint.description;
      complaint.img_url = req.body.img_url ? req.body.img_url : complaint.img_url;
      complaint.lat = req.body.lat ? req.body.lat : complaint.lat;
      complaint.lon = req.body.lon ? req.body.lon : complaint.lon;
      complaint.date = req.body.date ? req.body.date : complaint.date;
      complaint.user = req.body.user ? req.body.user : complaint.user;
      complaint.status = req.body.status ? req.body.status : complaint.status;
      complaint.hour = req.body.hour ? req.body.hour : complaint.hour;

      complaint.save(function(err, complaint) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating complaint.',
            error: err
          });
        }

        return res.json(complaint);
      });
    });
  },

  remove: function(req, res) {
    const id = req.params.id;
    complaintModel.findByIdAndRemove(id, function(err, complaint) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the complaint.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
