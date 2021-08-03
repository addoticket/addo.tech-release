"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
var addo_printer_1 = __importDefault(require("@addo/addo-printer"));
var autoreply_mode_1 = require("@addo/addo-printer/lib/core/autoreply-mode");
var fs_1 = __importDefault(require("fs"));
var Global = /** @class */ (function () {
    function Global() {
    }
    Object.defineProperty(Global, "printer", {
        get: function () {
            if (!Global._printer) {
                var printerPort = fs_1.default.readdirSync('/dev/usb/').filter(function (f) { return f.indexOf('lp') > -1; })[0];
                Global._printer = new addo_printer_1.default("/dev/usb/" + printerPort, autoreply_mode_1.AutoreplyMode.OFF);
            }
            return Global._printer;
        },
        enumerable: false,
        configurable: true
    });
    Global.onPrinterStatusChanged = Global.printer.onStatusChange();
    Global.ENDPOINTS = {
        TOTEMS: "https://7ifca48yhf.execute-api.eu-west-3.amazonaws.com/dev",
        ORDERS: "https://i8jrtirjm3.execute-api.eu-west-3.amazonaws.com/dev",
    };
    return Global;
}());
exports.Global = Global;
