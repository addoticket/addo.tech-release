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
exports.updateFirmware = void 0;
var common_api_1 = require("@addo/common-api");
var fs_1 = __importDefault(require("fs"));
var child_process_1 = require("child_process");
var config_json_1 = __importDefault(require("../config.json"));
exports.updateFirmware = new common_api_1.ExpressJsMicroservice({ method: 'post', route: '/update-firmware' }, function (http) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, execCommand("/home/addo/addo-totem/update-scripts/pre-update.sh && cd /home/addo/addo-totem && git reset --hard HEAD && git pull origin master && /home/addo/addo-totem/update-scripts/post-update.sh")];
            case 1:
                result = _a.sent();
                return [2 /*return*/, Promise.resolve(new common_api_1.Response({ status: 'OK', result: result }, 200))];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, Promise.reject(error_1)];
            case 3: return [2 /*return*/];
        }
    });
}); });
function uploadFile(http) {
    return new Promise(function (resolve, reject) {
        try {
            http.original.pipe(http.original.busboy);
            http.original.busboy.on('file', function (fieldname, file, filename) {
                try {
                    var old_versions_path = config_json_1.default.base.path + config_json_1.default.old_versions.path;
                    if (!fs_1.default.existsSync(old_versions_path)) {
                        fs_1.default.mkdirSync(old_versions_path);
                    }
                    console.log("Uploading: " + filename);
                    var zip_path_1 = old_versions_path + '/' + filename;
                    var fstream = fs_1.default.createWriteStream(zip_path_1);
                    file.pipe(fstream);
                    fstream.on('close', function () {
                        resolve(zip_path_1);
                    });
                }
                catch (err) {
                    reject(err);
                }
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function execCommand(command) {
    return new Promise(function (resolve, reject) {
        var child_process = child_process_1.exec(command, function (error, stdout, stderr) {
            if (error) {
                console.log("error: " + error.message);
                reject(error);
                return;
            }
            if (stderr) {
                console.log("stderr: " + stderr);
                reject(stderr);
                return;
            }
            console.log("stdout: " + stdout);
            resolve(stdout);
        });
        child_process.stdout.on('data', function (data) {
            console.log(data.toString());
        });
    });
}
