"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRANSLATE = exports.MACHINE_ID = void 0;
var common_api_1 = require("@addo/common-api");
var connect_busboy_1 = __importDefault(require("connect-busboy"));
var node_machine_id_1 = require("node-machine-id");
var global_1 = require("./global");
var getStatus_1 = require("./routes/getStatus");
var print_ticket_1 = require("./routes/print-ticket");
var print_ticket_test_1 = require("./routes/print-ticket-test");
var print_tickets_1 = require("./routes/print-tickets");
var update_firmware_1 = require("./routes/update-firmware");
var axios_1 = __importDefault(require("axios"));
var validateAndPrintTicket_1 = require("./routes/validateAndPrintTicket");
var it_json_1 = __importDefault(require("./i18n/it.json"));
exports.MACHINE_ID = node_machine_id_1.machineIdSync(true);
exports.TRANSLATE = { it: it_json_1.default };
var server = new common_api_1.ExpressServer(getStatus_1.getStatus, print_ticket_1.printTicket, print_ticket_test_1.printTicketTest, print_tickets_1.printTickets, update_firmware_1.updateFirmware, validateAndPrintTicket_1.validateAndPrintTickets);
server.app.use(connect_busboy_1.default());
server.start(2458);
global_1.Global.onPrinterStatusChanged.subscribe(function (res) {
    var totem = {
        status: res,
        machine_id: exports.MACHINE_ID,
        last_check: new Date(),
        history: null
    };
    var instant = JSON.parse(JSON.stringify(totem));
    delete instant.history;
    totem.history = instant;
    axios_1.default.put(global_1.Global.ENDPOINTS.TOTEMS + "/totem/" + exports.MACHINE_ID + "?fields=status,$addToSet:history", totem)
        .then(function (result) {
        console.log("==============================");
        console.log("OK ", result);
        console.log("==============================");
    }).catch(function (error) {
        console.error(error.message);
    });
});
