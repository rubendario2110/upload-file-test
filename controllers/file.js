var express = require("express");
var router = express.Router();
let UploadService = require("../services/file");

router.post("/upload", (req, res) => {
  new UploadService()
    .uploadFile()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((responseError) => {
      res.status(500).json(responseError);
    });
});

module.exports = router;
