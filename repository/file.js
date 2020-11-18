const sequelize = require("../models/connection");
var initModels = require("../models/init-models").initModels;
var models = initModels(sequelize);
let file = models.postcodes;
class UploadRepository {
  create(json) {
    return new Promise((resolve, reject) => {
      file
        .bulkCreate(json)
        .then(() => {
          resolve({});
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
module.exports = UploadRepository;
