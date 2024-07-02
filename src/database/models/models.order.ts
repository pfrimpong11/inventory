import { Schema, Types, model, models } from "mongoose";

const OrderSchema = new Schema({
    vendorId: { type: Types.ObjectId, ref: "Vendor"},
    customerId: { type: Types.ObjectId, ref: "Customer" },
    services: [{ type: String, required: true }],
    deliveryGuy: { type: Types.ObjectId, ref: "DeliveryGuy"},
    invoice: { type: String, required: true },
    status: { type: String, required: true },
}, { timestamps: true } )

const Order = models.Order || model("Order", OrderSchema)
export default Order