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
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTickets = void 0;
var common_api_1 = require("@addo/common-api");
var string_utils_1 = require("../utils/string.utils");
var global_1 = require("../global");
exports.printTickets = new common_api_1.ExpressJsMicroservice({ method: 'post', route: '/tickets/print' }, function (http) { return __awaiter(void 0, void 0, void 0, function () {
    var results, _i, _a, t, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                results = [];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                _i = 0, _a = http.body;
                _b.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 5];
                t = _a[_i];
                t.ticket.date = string_utils_1.capitalize(t.ticket.date);
                t.ticket.watermark = t.ticket.watermark.substr(0, t.ticket.rotateWatermark ? 16 : 24);
                t.ticket.location = t.ticket.location.substr(0, 24);
                t.ticket.product_name = t.ticket.product_name.substr(0, 24 - (1 + t.ticket.currency.length + t.ticket.price.toString().length));
                t.ticket.printed = t.ticket.printed.substr(0, 24);
                return [4 /*yield*/, global_1.Global.printer.printTicket(t.ticket, t.clear)];
            case 3:
                result = _b.sent();
                results.push(result);
                _b.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/, Promise.resolve(new common_api_1.Response(results, 200))];
            case 6:
                error_1 = _b.sent();
                error_1.printed = results;
                return [2 /*return*/, Promise.reject(error_1)];
            case 7: return [2 /*return*/];
        }
    });
}); });
