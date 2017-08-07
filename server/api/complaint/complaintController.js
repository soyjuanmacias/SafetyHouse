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
    const {
      title,
      description,
      img_url,
      lat,
      lon,
      date,
      user,
      status,
      hour,
    } = req.body
    const complaint = new complaintModel({
      title,
      description,
      img_url,
      lat,
      lon,
      date,
      user,
      status,
      hour,
    });

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
    console.log('Imprimo en Update Complaint =>');
    console.log(req.body);
    console.log(req.params);
    const id = req.params.id;
    const { body } = req;

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

      // Código por Marta / Evitar poner Complaints en 10 líneas
      // for (const [key, value] of Object.entries(complaint)) {
      //   console.log(key + ' ' + value);
      //   complaint[key] = body[key] ? body[key] : complaint[key];
      // }

      // Código por Kiko Beats®
      // const props = Object.assign({}, complaint.toJSON(), body)
      //
      // complaintModel.save({_id: props.id, })

      complaint.title = body.title ? body.title : complaint.title;
      complaint.description = body.description ? body.description : complaint.description;
      complaint.img_url = body.img_url ? body.img_url : complaint.img_url;
      complaint.lat = body.lat ? body.lat : complaint.lat;
      complaint.lon = body.lon ? body.lon : complaint.lon;
      complaint.date = body.date ? body.date : complaint.date;
      complaint.user = body.user ? body.user : complaint.user;
      complaint.status = body.status ? body.status : complaint.status;
      complaint.hour = body.hour ? body.hour : complaint.hour;

      // console.log('Imprimo props => ');
      // console.log(props);
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
