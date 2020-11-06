"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
/**
 * Capitalizes first letters of words in string.
 * @param {string} str String to be modified
 * @param {boolean=false} lower Whether all other letters should be lowercased
 * @return {string}
 * @usage
 *   capitalize('fix this string');     // -> 'Fix This String'
 *   capitalize('javaSCrIPT');          // -> 'JavaSCrIPT'
 *   capitalize('javaSCrIPT', true);    // -> 'Javascript'
 */
function capitalize(str, lower) {
    if (lower === void 0) { lower = false; }
    return (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, function (match) { return match.toUpperCase(); });
}
exports.capitalize = capitalize;
