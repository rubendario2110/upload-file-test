let UploadRepository = require("../repository/file");
const fs = require("fs");
const csv = require("csv-parse");
const log4js = require("log4js");
const resource = require("../resource/resource.json");
log4js.configure(resource.configLog4js);
const log = log4js.getLogger("app");

class UploadService {
  uploadFile() {
    return new Promise((resolve, reject) => {
      const parseador = csv({
        delimiter: ",",
        cast: true,
        comment: "#",
      });

      parseador.on("readable", () => {
        let fila;
        let array = [];
        while ((fila = parseador.read())) {
          log.debug("Tenemos una fila:", fila);

          let geo = {
            lat: fila[0],
            log: fila[1],
          };
          array.push(geo);
        }
        log.debug("array", array);
        new UploadRepository()
          .create(array)
          .then(() => {
            resolve({ file: true });
          })
          .catch((error) => {
            log.error(error);
            reject({ file: "error database" });
          });
      });

      parseador.on("error", (err) => {
        reject(err.message);
        console.error("Error al leer CSV:", err.message);
      });

      fs.createReadStream("./postcodesgeo.csv")
        .pipe(parseador)
        .on("end", () => {
          resolve("Se ha terminado de leer el archivo");
          parseador.end();
        });
    }).catch((error) => {
      log.error(error);
      reject({ error: error });
    });
  }
}
module.exports = UploadService;
