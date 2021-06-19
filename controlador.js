const modelDatos = require('./modelo');


const ctrlDatos = {

 findDatos: async (req, res) => {
 const data = await modelDatos.getData();
 console.log("----->",data); //tiene muchas mas informacion que la que necesito
 console.log("----->",data.data);
 res.json(data.data); //la respuesta del servidor se genera aqui
 },
GuardarDatosFireBase: async (req, res) => {
    const { uid ,token,datos} = req.params;
    const data = await modelDatos.postGuardarDatosFireBase(uid,token,datos);
    res.json(data.data); //la respuesta del servidor se genera aqui
    }
}

 module.exports = ctrlDatos;