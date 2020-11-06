"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAndPrintTickets = void 0;
var common_api_1 = require("@addo/common-api");
var moment_1 = __importDefault(require("moment"));
var string_utils_1 = require("../utils/string.utils");
var global_1 = require("../global");
var axios_1 = __importDefault(require("axios"));
var currency_symbol_pipe_1 = require("../utils/currency-symbol.pipe");
var __1 = require("..");
exports.validateAndPrintTickets = new common_api_1.ExpressJsMicroservice({ method: 'post', route: '/orders/:id/validate' }, function (http) { return __awaiter(void 0, void 0, void 0, function () {
    var results, update, url, result, order, currencySymbolPipe, _i, _a, r, i, ticket, result_1, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                moment_1.default.locale(http.headers.lang);
                results = [];
                update = {};
                _b.label = 1;
            case 1:
                _b.trys.push([1, 10, , 11]);
                url = global_1.Global.ENDPOINTS.ORDERS + "/orders/" + http.params.id + "/validate?fields=-__v";
                return [4 /*yield*/, axios_1.default.get(url)]; //, { headers: { Authorization: http.headers['authorization'] } });
            case 2:
                result = _b.sent() //, { headers: { Authorization: http.headers['authorization'] } });
                ;
                order = void 0;
                if (result.data) {
                    order = result.data;
                }
                currencySymbolPipe = new currency_symbol_pipe_1.CurrencySymbolPipe();
                _i = 0, _a = order.rows;
                _b.label = 3;
            case 3:
                if (!(_i < _a.length)) return [3 /*break*/, 8];
                r = _a[_i];
                i = 0;
                _b.label = 4;
            case 4:
                if (!(i < (r.qta - (r.printed_qta || 0)))) return [3 /*break*/, 7];
                ticket = {
                    date: moment_1.default(order.event.from).format('ddd DD MMM'),
                    location: order.event.location,
                    product_name: r.name,
                    price: r.price / Math.pow(10, currency_symbol_pipe_1.CURRENCY[(order.movement.currency || 'none').toUpperCase()].decimal_digits || 2),
                    currency: currencySymbolPipe.transform(order.movement.currency) || '€',
                    printed: __1.TRANSLATE[http.headers.lang].Printer.bought_at + " " + moment_1.default(order.created).format("HH:mm"),
                    watermark: order.watermark || "AddoAddoAddoAddo",
                    rotateWatermark: true
                };
                ticket.date = string_utils_1.capitalize(ticket.date);
                ticket.watermark = ticket.watermark.substr(0, ticket.rotateWatermark ? 16 : 24);
                ticket.location = ticket.location.substr(0, 24);
                ticket.product_name = ticket.product_name.substr(0, 24 - (1 + ticket.currency.length + ticket.price.toString().length));
                ticket.printed = ticket.printed.substr(0, 24);
                return [4 /*yield*/, global_1.Global.printer.printTicket(ticket, true)];
            case 5:
                result_1 = _b.sent();
                results.push(result_1);
                if (result_1.status.indexOf('0') == -1) {
                    if (!update[r.name]) {
                        update[r.name] = 0;
                    }
                    update[r.name]++;
                }
                _b.label = 6;
            case 6:
                i++;
                return [3 /*break*/, 4];
            case 7:
                _i++;
                return [3 /*break*/, 3];
            case 8: return [4 /*yield*/, updatePrintedQta(http.params.id, update)];
            case 9:
                order = _b.sent();
                return [2 /*return*/, Promise.resolve(new common_api_1.Response({ results: results, update: update, order: order }, 200))];
            case 10:
                error_1 = _b.sent();
                error_1.printed = results;
                return [2 /*return*/, Promise.reject(error_1)];
            case 11: return [2 /*return*/];
        }
    });
}); });
function updatePrintedQta(id, update) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.put(global_1.Global.ENDPOINTS.ORDERS + "/orders/" + id + "/printed", update)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    });
}
