

var express = require('express');
var router = express.Router();

const controllerIndex = require("../controllers/Index");
const controllerLogin = require("../controllers/Login")
const controllerHome = require("../controllers/Home")
const controllerCadastro = require("../controllers/Cadastro");
const controllerPlanos = require("../controllers/Planos");
const controllerPagamento = require("../controllers/Pagamento");
const controllerLoginAdmin = require('../controllers/LoginAdmin');
const controllerAdmin = require("../controllers/Admin");
const controllerSearch = require("../controllers/search");

/* GET home page. */

router.get("/", controllerIndex.index )

router.get("/login", controllerLogin.index )

router.get("/home", controllerHome.index )

router.get("/cadastro", controllerCadastro.index )

router.get("/planos", controllerPlanos.index )

router.get("/pagamento", controllerPagamento.index )

router.get("/search", controllerSearch.index )

router.get ("/admin/login", controllerLoginAdmin.index )

router.get ("/admin/index", controllerAdmin.index )

module.exports = router;