const express = require("express");
const { getItems, getItem, createItem,updateItem,deleteItem } = require("../controllers/booking");
const router = express.Router();
const {validatorCreateItem,validatorGetItem} = require("../validators/booking")

/**
 * Lista de items
 */
router.get("/",getItems);


/**
 * Crear registro
 */
router.post("/",validatorCreateItem,createItem);

/**
 * Obtener un item
 */
router.get("/:id",validatorGetItem,getItem);
/**
 * Actualizar un registro
 */
router.put("/:id",validatorGetItem,validatorCreateItem,updateItem);
/**
 * Eliminar un registro
 */
router.delete("/:id",validatorGetItem,deleteItem);
module.exports = router