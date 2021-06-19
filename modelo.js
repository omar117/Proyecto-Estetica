const axios = require("axios");

const modelDatos = {
  getData: async () => {
    return await axios
      .get("https://gaia.inegi.org.mx/wscatgeo/mgee")
      .then((data) => data)
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
  postGuardarDatosFireBase: async (uid,token,datos) => {
    return await axios
      .post("https://proyectoestetica-226d1-default-rtdb.firebaseio.com/tareas/"+uid+".json?auth="+token,datos)
      .then((data) => data)
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
};

module.exports = modelDatos;