"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
var addo_printer_1 = __importDefault(require("@addo/addo-printer"));
var autoreply_mode_1 = require("@addo/addo-printer/lib/core/autoreply-mode");
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.printer = new addo_printer_1.default('/dev/usb/lp2', autoreply_mode_1.AutoreplyMode.OFF);
    Global.onPrinterStatusChanged = Global.printer.onStatusChange();
    Global.ENDPOINTS = {
        TOTEMS: "https://7ifca48yhf.execute-api.eu-west-3.amazonaws.com/dev",
        ORDERS: "https://i8jrtirjm3.execute-api.eu-west-3.amazonaws.com/dev",
    };
    return Global;
}());
exports.Global = Global;
