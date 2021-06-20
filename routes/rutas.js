const express = require("express"); //importar express
const router = express.Router();
const ctrlDatos = require('../controlador');


router.get('/api', ctrlDatos.findDatos);
router.get('/guardar/:uid/:token/:datos', ctrlDatos.GuardarDatosFireBase);
router.get('/recuperar/:uid/:token', ctrlDatos.RecuperarDatosFireBase);
router.get('/recuperarp', ctrlDatos.RecuperarProductosFireBase);

module.exports = router;