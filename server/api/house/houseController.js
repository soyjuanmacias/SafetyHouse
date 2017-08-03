const houseModel = require('./houseModel.js');

module.exports = {

  list: function(req, res) {
    houseModel.find(function(err, houses) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting house.',
          error: err
        });
      }
      return res.json(houses);
    });
  },

  show: function(req, res) {
    const id = req.params.id;
    houseModel.findOne({
      _id: id
    }, function(err, house) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting house.',
          error: err
        });
      }
      if (!house) {
        return res.status(404).json({
          message: 'No such house'
        });
      }
      return res.json(house);
    });
  },

  create: function(req, res) {
    const { house, street, number, floors, m2, backAccess, members } = req.body
    const newHouse = new houseModel({ house, street, number, floors, m2, backAccess, members });

    newHouse.save(function(err, house) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating house',
          error: err
        });
      }
      return res.status(201).json(house);
    });
  },

  update: function(req, res) {
    const id = req.params.id;
    houseModel.findOne({
      _id: id
    }, function(err, house) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting house',
          error: err
        });
      }
      if (!house) {
        return res.status(404).json({
          message: 'No such house'
        });
      }

      house.street = req.body.street ? req.body.street : house.street;
      house.number = req.body.number ? req.body.number : house.number;
      house.floors = req.body.floors ? req.body.floors : house.floors;
      house.m2 = req.body.m2 ? req.body.m2 : house.m2;
      house.backAccess = req.body.backAccess ? req.body.backAccess : house.backAccess;
      house.members = req.body.members ? req.body.members : house.members;

      house.save(function(err, house) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating house.',
            error: err
          });
        }

        return res.json(house);
      });
    });
  },

  remove: function(req, res) {
    const id = req.params.id;
    houseModel.findByIdAndRemove(id, function(err, house) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the house.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
