const { bookingModel } = require("../models")
const { matchedData } = require("express-validator")
const { handleHttpError } = require("../utils/handleError")

const getItems = async (req, res) => {

    try {
        const data = await bookingModel.find();
        res.send({ data });
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEMS', 403);
    }

};
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await bookingModel.findById(id);
        res.send(data);
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM");
    }
};
const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const fechaReserva = new Date(`${body.booking_date}T${body.booking_time}:00.000Z`);
        body.booking_date = fechaReserva.toISOString();
        body.booking_time = fechaReserva.getUTCHours() * 100 + fechaReserva.getMinutes();
        const data = await bookingModel.create(body)
        res.send(data)
    } catch (e) {
        handleHttpError(res, 'ERROR_CREATE_ITEM', 400);
    }

};
const updateItem = async (req, res) => {
 try {
    const {id, ...body} = matchedData(req);
    const fechaReserva = new Date(`${body.booking_date}T${body.booking_time}:00.000Z`);
    body.booking_date = fechaReserva.toISOString();
    body.booking_time = fechaReserva.getUTCHours() * 100 + fechaReserva.getMinutes();
    const data = await bookingModel.findByIdAndUpdate(
        id,
        body
    );
    res.send({data});
 } catch (e) {
    handleHttpError(res,"ERROR_UPDATE_ITEM",400 )
 }
};
const deleteItem = async (req, res) => {
    try {
        req=matchedData(req);
        const {id}=req;
        const data = await bookingModel.delete({_id:id});
        res.send({data});
    } catch (error) {
        handleHttpError(res,"ERROR_DELETE_ITEM",400 )
    }
};
module.exports = { getItems, getItem, createItem, updateItem, deleteItem }