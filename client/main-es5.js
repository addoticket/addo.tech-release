(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <success-effect #success [text]=\"'print_success' | translate\"></success-effect>\n  <error-effect #error [text]=\"'Errors.' + errorMessage | translate\"></error-effect>\n</ion-app>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n\n<div class=\"overlay\" *ngIf=\"isShow\">\n  <div>\n    <div class=\"success-checkmark\">\n      <div class=\"f-modal-icon f-modal-error animate\">\n        <span class=\"f-modal-x-mark\">\n          <span class=\"f-modal-line f-modal-left animateXLeft\"></span>\n          <span class=\"f-modal-line f-modal-right animateXRight\"></span>\n        </span>\n        <div class=\"f-modal-placeholder\"></div>\n        <div class=\"f-modal-fix\"></div>\n      </div>\n    </div>\n    <div class=\"errorMessage fade-in delay-300\" [innerHTML]=\" text | translate\" style=\"text-align:center; font-family: 'Work Sans'\">\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoadingLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"overlay\" *ngIf=\"isShowed\">\n  <div>\n   \n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/printer-animation/printer-animation.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/printer-animation/printer-animation.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPrinterAnimationPrinterAnimationComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 438.79 490.71\" width=\"150\">\n  <defs>\n\n  </defs>\n  <title>002-printer</title>\n\n  <!--TOP PAPER-->\n  <rect class=\"cls-1 paper-1\" x=\"80.63\" y=\"8\" width=\"277.54\" height=\"201.79\" rx=\"10\" ry=\"10\" />\n  <rect class=\"cls-2 paper-1\" x=\"80.63\" y=\"8\" width=\"277.54\" height=\"201.79\" rx=\"10\" ry=\"10\" />\n\n\n  <rect class=\"printer cls-1\" x=\"8\" y=\"209.79\" width=\"422.79\" height=\"191.04\" rx=\"20\" ry=\"20\" />\n  <rect class=\"cls-3\" x=\"8\" y=\"209.79\" width=\"422.79\" height=\"191.04\" rx=\"20\" ry=\"20\" />\n  <path\n    d=\"M98.05,378.51H414a6.41,6.41,0,0,0,6.4-6.41V333.16a6.41,6.41,0,0,0-6.4-6.4H98.05a6.41,6.41,0,0,0-6.41,6.4V372.1A6.41,6.41,0,0,0,98.05,378.51Zm6.4-38.94H407.54V365.7H104.45Z\"\n    transform=\"translate(-36.6 -13.5)\" />\n  <path class=\"led\"\n    d=\"M103.18,292.24a10,10,0,1,0-10,10A10,10,0,0,0,103.18,292.24Zm-10,.82a.82.82,0,1,1,.82-.82A.82.82,0,0,1,93.2,293.06Z\"\n    transform=\"translate(-36.6 -13.5)\" />\n  <line class=\"cls-2\" x1=\"8\" y1=\"245.75\" x2=\"430.79\" y2=\"245.75\" />\n\n  <!--BOTTOM PAPER-->\n  <rect class=\"cls-1 paper-2\" x=\"80.63\" y=\"319.95\" width=\"277.54\" height=\"163.76\" rx=\"10\" ry=\"10\" />\n  <rect class=\"cls-4 paper-2\" x=\"80.63\" y=\"319.95\" width=\"277.54\" height=\"163.76\" rx=\"10\" ry=\"10\" />\n</svg>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/success/success.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/success/success.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsSuccessSuccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Generated template for the SuccessEffectComponent component\n<div [ngClass]=\"classes\" [ngStyle]=\"customStyle\">\n  <div>\n    <svg id=\"successAnimation\" class=\"animated\" xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"70\" viewBox=\"0 0 70 70\">\n      <path id=\"successAnimationResult\" fill=\"#D8D8D8\" d=\"M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z\"\n      />\n      <circle id=\"successAnimationCircle\" cx=\"35\" cy=\"35\" r=\"24\" stroke=\"#979797\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"transparent\"\n      />\n      <polyline id=\"successAnimationCheck\" stroke=\"#979797\" stroke-width=\"2\" points=\"23 34 34 43 47 27\" fill=\"transparent\" />\n    </svg>\n    <div align-center>\n      <b ion-text color=\"white\" style=\"font-size:0.8em\">\n        {{'SuccessComponent.thanks'|translate}}\n      </b>\n    </div>\n    <p align-center>\n      {{successText}}}\n    </p>\n  </div>\n</div> -->\n\n<div class=\"overlay\" *ngIf=\"isShow\">\n  <div>\n    <div class=\"success-checkmark\">\n      <div class=\"check-icon\">\n        <span class=\"icon-line line-tip\"></span>\n        <span class=\"icon-line line-long\"></span>\n        <div class=\"icon-circle\"></div>\n        <div class=\"icon-fix\"></div>\n      </div>\n    </div>\n    <div class=\"fade-in delay-300\" [innerHTML]=\" text | translate\" style=\"text-align:center; font-family: 'Work Sans'\">\n    </div>\n    <!-- <div class=\"ion-text-center animated animatedFadeInUp fadeInUp\">\n      <strong>+ {{options.cashback.rewards}} ADDO COIN</strong>\n    </div> -->\n    <ion-button class=\"fade-in delay-600\" *ngIf=\"successText\" shape=\"round\" size=\"small\" color=\"primary\" (click)=\"callback.emit()\" style=\"font-size: 1em;margin-top: 4em;\">\n      {{successText | translate}}\n    </ion-button>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'confirm-order/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-confirm-order-confirm-order-module */
          "pages-confirm-order-confirm-order-module").then(__webpack_require__.bind(null,
          /*! ./pages/confirm-order/confirm-order.module */
          "./src/app/pages/confirm-order/confirm-order.module.ts")).then(function (m) {
            return m.ConfirmOrderPageModule;
          });
        }
      }, {
        path: 'validate-order-code',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-validate-order-code-validate-order-code-module */
          "pages-validate-order-code-validate-order-code-module").then(__webpack_require__.bind(null,
          /*! ./pages/validate-order-code/validate-order-code.module */
          "./src/app/pages/validate-order-code/validate-order-code.module.ts")).then(function (m) {
            return m.ValidateOrderCodePageModule;
          });
        }
      }, {
        path: 'faq',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-faq-faq-module */
          "pages-faq-faq-module").then(__webpack_require__.bind(null,
          /*! ./pages/faq/faq.module */
          "./src/app/pages/faq/faq.module.ts")).then(function (m) {
            return m.FaqPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/global */
      "./src/app/services/global.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_printer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/printer.service */
      "./src/app/services/printer.service.ts");
      /* harmony import */


      var _services_orders_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/orders.service */
      "./src/app/services/orders.service.ts");
      /* harmony import */


      var ng_connection_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-connection-service */
      "./node_modules/ng-connection-service/__ivy_ngcc__/fesm2015/ng-connection-service.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, translate, auth, router, printerService, ordersService, loadingCtrl, connectionService) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.translate = translate;
          this.auth = auth;
          this.router = router;
          this.printerService = printerService;
          this.ordersService = ordersService;
          this.loadingCtrl = loadingCtrl;
          this.connectionService = connectionService;
          this.scan_text = '';
          document.body.setAttribute('data-theme', 'dark');
          this.translate.use(_services_global__WEBPACK_IMPORTED_MODULE_5__["Global"].DEFAULT_LANG || 'it');
          this.translate.setDefaultLang('it');
          this.auth.networkLogin().subscribe(function (res) {}, function (err) {
            console.log("ERROR AUTH", err);
          });
          this.connectionService.monitor().subscribe(function (isConnected) {
            _services_global__WEBPACK_IMPORTED_MODULE_5__["Global"].CONNECTION_STATUS = isConnected ? 0
            /* ONLINE */
            : 1
            /* OFFLINE */
            ;

            if (isConnected) {
              _this.error_component.hide();
            } else {
              _this.error_component.show(0, "Errors._NO_INTERNET_CONNECTION");
            }

            console.log(_services_global__WEBPACK_IMPORTED_MODULE_5__["Global"].getDeviceStatus(false));
          });

          _services_global__WEBPACK_IMPORTED_MODULE_5__["Global"].validationSuccess.subscribe(function (res) {
            _this.success_component.show();

            setTimeout(function () {
              _this.success_component.hide();
            }, 3000);
          });
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.platform.ready();

                    case 2:
                      this.statusBar.styleDefault();
                      this.splashScreen.hide();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "handleKeyboardEvent",
          value: function handleKeyboardEvent(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var data, id;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (event.key == 'Enter') {
                        try {
                          data = JSON.parse(atob(this.scan_text));
                          console.log(data);
                          id = data.id;

                          if (data.confirm) {
                            this.router.navigateByUrl('/confirm-order/' + id);
                          } else {
                            this.validate(id);
                          }

                          this.scan_text = '';
                        } catch (error) {
                          console.log(error);
                        }
                      }

                      this.scan_text += event.key;
                      setTimeout(function () {
                        _this2.scan_text = '';
                      }, 1000);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "validate",
          value: function validate(code) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var loading, canPrint, err;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(_services_global__WEBPACK_IMPORTED_MODULE_5__["Global"].CONNECTION_STATUS == 1
                      /* OFFLINE */
                      )) {
                        _context3.next = 3;
                        break;
                      }

                      this.error_component.show(0, "Errors._NO_INTERNET_CONNECTION");
                      return _context3.abrupt("return");

                    case 3:
                      _context3.next = 5;
                      return this.loadingCtrl.create({
                        message: "loading..."
                      });

                    case 5:
                      loading = _context3.sent;
                      loading.present();
                      _context3.next = 9;
                      return this.printerService.canPrint();

                    case 9:
                      canPrint = _context3.sent;

                      if (canPrint) {
                        _context3.next = 19;
                        break;
                      }

                      err = {
                        error: {
                          code: "_CANT_PRINT"
                        }
                      };

                      _services_global__WEBPACK_IMPORTED_MODULE_5__["Global"].validationError.emit(err);

                      this.errorMessage = err.error.code;
                      _context3.next = 16;
                      return loading.dismiss();

                    case 16:
                      this.error_component.show();
                      setTimeout(function () {
                        _this3.error_component.hide();
                      }, 3000);
                      return _context3.abrupt("return");

                    case 19:
                      this.ordersService.validateAndPrint(code).subscribe(function (res) {
                        loading.dismiss();

                        _this3.success_component.show();

                        setTimeout(function () {
                          _this3.success_component.hide();
                        }, 3000);
                        console.log(res);
                      }, function (err) {
                        loading.dismiss();
                        console.log("PRINTER ERROR", err);
                      }); // this.ordersService.validateOrderByCode(code)
                      //   .subscribe(async (res: any) => {
                      //     if (res) {
                      //       await loading.dismiss();
                      //       if (!res) return;
                      //       // PRINT 
                      //       this.printerService.printOrder(res)
                      //         .then(res => {
                      //           loading.dismiss();
                      //           this.success_component.show();
                      //           setTimeout(() => {
                      //             this.success_component.hide()
                      //           }, 3000)
                      //           console.log(res);
                      //         }).catch(err => {
                      //           loading.dismiss();
                      //           console.log("PRINTER ERROR", err)
                      //         })
                      //     }
                      //   }, async err => {
                      //     Global.validationError.emit(err);
                      //     this.errorMessage = err.error.code;
                      //     await loading.dismiss();
                      //     this.error_component.show();
                      //     setTimeout(() => {
                      //       this.error_component.hide()
                      //     }, 3000)
                      //   })

                    case 20:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _services_printer_service__WEBPACK_IMPORTED_MODULE_9__["PrinterService"]
        }, {
          type: _services_orders_service__WEBPACK_IMPORTED_MODULE_10__["OrdersService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: ng_connection_service__WEBPACK_IMPORTED_MODULE_11__["ConnectionService"]
        }];
      };

      AppComponent.propDecorators = {
        success_component: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["success", {
            "static": false
          }]
        }],
        error_component: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["error", {
            "static": false
          }]
        }],
        handleKeyboardEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['document:keypress', ['$event']]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _interceptors_token_interceptors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./interceptors/token.interceptors */
      "./src/app/interceptors/token.interceptors.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/locales/it */
      "./node_modules/@angular/common/locales/it.js");
      /* harmony import */


      var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/locales/en */
      "./node_modules/@angular/common/locales/en.js");
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_16__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _services_global__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/global */
      "./src/app/services/global.ts");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_17__["registerLocaleData"])(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_15___default.a, 'it');
      Object(_angular_common__WEBPACK_IMPORTED_MODULE_17__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_16___default.a, 'en');

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot({
          mode: 'ios',
          backButtonText: ''
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_14__["PipesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
          defaultLanguage: _services_global__WEBPACK_IMPORTED_MODULE_18__["Global"].DEFAULT_LANG || 'it',
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
          }
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_token_interceptors__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
          multi: true
        }, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _printer_animation_printer_animation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./printer-animation/printer-animation.component */
      "./src/app/components/printer-animation/printer-animation.component.ts");
      /* harmony import */


      var _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading/loading.component */
      "./src/app/components/loading/loading.component.ts");
      /* harmony import */


      var _success_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./success/success.component */
      "./src/app/components/success/success.component.ts");
      /* harmony import */


      var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./error/error.component */
      "./src/app/components/error/error.component.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var components = [_success_success_component__WEBPACK_IMPORTED_MODULE_6__["SuccessComponent"], _printer_animation_printer_animation_component__WEBPACK_IMPORTED_MODULE_4__["PrinterAnimationComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"]];

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: components,
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(), _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        exports: components
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/components/error/error.component.scss":
    /*!*******************************************************!*\
      !*** ./src/app/components/error/error.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsErrorErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  display: flex;\n  align-items: center;\n}\n.overlay > div {\n  margin: 0 auto;\n}\n.f-modal-icon {\n  border-radius: 50%;\n  border: 4px solid gray;\n  box-sizing: content-box;\n  height: 80px;\n  margin: 20px auto;\n  padding: 0;\n  position: relative;\n  width: 80px;\n}\n.f-modal-icon.f-modal-error {\n  border-color: red;\n}\n.f-modal-icon.f-modal-error:after, .f-modal-icon.f-modal-error:before {\n  background: transparent;\n  content: \"\";\n  height: 120px;\n  position: absolute;\n  transform: rotate(45deg);\n  width: 60px;\n}\n.f-modal-icon.f-modal-error:before {\n  border-radius: 120px 0 0 120px;\n  left: -33px;\n  top: -7px;\n  transform-origin: 60px 60px;\n  transform: rotate(-45deg);\n}\n.f-modal-icon.f-modal-error:after {\n  border-radius: 0 120px 120px 0;\n  left: 30px;\n  top: -11px;\n  transform-origin: 0 60px;\n  transform: rotate(-45deg);\n}\n.f-modal-icon.f-modal-error .f-modal-placeholder {\n  border-radius: 50%;\n  border: 4px solid red;\n  box-sizing: content-box;\n  height: 80px;\n  left: -4px;\n  position: absolute;\n  top: -4px;\n  width: 80px;\n  z-index: 2;\n}\n.f-modal-icon.f-modal-error .f-modal-fix {\n  background-color: transparent;\n  height: 90px;\n  left: 28px;\n  position: absolute;\n  top: 8px;\n  transform: rotate(-45deg);\n  width: 5px;\n  z-index: 1;\n}\n.f-modal-icon.f-modal-error .f-modal-line {\n  background-color: red;\n  border-radius: 2px;\n  display: block;\n  height: 5px;\n  position: absolute;\n  z-index: 2;\n}\n.f-modal-icon.f-modal-error .f-modal-line.f-modal-tip {\n  left: 14px;\n  top: 46px;\n  transform: rotate(45deg);\n  width: 25px;\n}\n.f-modal-icon.f-modal-error .f-modal-line.f-modal-long {\n  right: 8px;\n  top: 38px;\n  transform: rotate(-45deg);\n  width: 47px;\n}\n.f-modal-icon.f-modal-error {\n  border-color: red;\n}\n.f-modal-icon.f-modal-error .f-modal-x-mark {\n  display: block;\n  position: relative;\n  z-index: 2;\n}\n.f-modal-icon.f-modal-error .f-modal-placeholder {\n  border: 4px solid rgba(255, 0, 0, 0.2);\n}\n.f-modal-icon.f-modal-error .f-modal-line {\n  background-color: red;\n  top: 37px;\n  width: 47px;\n}\n.f-modal-icon.f-modal-error .f-modal-line.f-modal-left {\n  left: 17px;\n  transform: rotate(45deg);\n}\n.f-modal-icon.f-modal-error .f-modal-line.f-modal-right {\n  right: 16px;\n  transform: rotate(-45deg);\n}\n.animateSuccessTip {\n  -webkit-animation: animateSuccessTip 0.75s;\n          animation: animateSuccessTip 0.75s;\n}\n.animateSuccessLong {\n  -webkit-animation: animateSuccessLong 0.75s;\n          animation: animateSuccessLong 0.75s;\n}\n.f-modal-icon.f-modal-success.animate:after {\n  -webkit-animation: rotatePlaceholder 4.25s ease-in;\n          animation: rotatePlaceholder 4.25s ease-in;\n}\n.f-modal-icon.f-modal-error.animate:after {\n  -webkit-animation: rotatePlaceholder 4.25s ease-in;\n          animation: rotatePlaceholder 4.25s ease-in;\n}\n.animateErrorIcon {\n  -webkit-animation: animateErrorIcon 0.5s;\n          animation: animateErrorIcon 0.5s;\n}\n.animateXLeft {\n  -webkit-animation: animateXLeft 0.75s;\n          animation: animateXLeft 0.75s;\n}\n.animateXRight {\n  -webkit-animation: animateXRight 0.75s;\n          animation: animateXRight 0.75s;\n}\n.scaleWarning {\n  -webkit-animation: scaleWarning 0.75s infinite alternate;\n          animation: scaleWarning 0.75s infinite alternate;\n}\n.pulseWarningIns {\n  -webkit-animation: pulseWarningIns 0.75s infinite alternate;\n          animation: pulseWarningIns 0.75s infinite alternate;\n}\n@-webkit-keyframes animateSuccessTip {\n  0%, 54% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px;\n  }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px;\n  }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px;\n  }\n}\n@keyframes animateSuccessTip {\n  0%, 54% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px;\n  }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px;\n  }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px;\n  }\n}\n@-webkit-keyframes animateSuccessLong {\n  0%, 65% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px;\n  }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px;\n  }\n}\n@keyframes animateSuccessLong {\n  0%, 65% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px;\n  }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px;\n  }\n}\n@-webkit-keyframes rotatePlaceholder {\n  0%, 5% {\n    transform: rotate(-45deg);\n  }\n  100%, 12% {\n    transform: rotate(-405deg);\n  }\n}\n@keyframes rotatePlaceholder {\n  0%, 5% {\n    transform: rotate(-45deg);\n  }\n  100%, 12% {\n    transform: rotate(-405deg);\n  }\n}\n@-webkit-keyframes animateErrorIcon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@keyframes animateErrorIcon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes animateXLeft {\n  0%, 65% {\n    left: 82px;\n    top: 95px;\n    width: 0;\n  }\n  84% {\n    left: 14px;\n    top: 33px;\n    width: 47px;\n  }\n  100% {\n    left: 17px;\n    top: 37px;\n    width: 47px;\n  }\n}\n@keyframes animateXLeft {\n  0%, 65% {\n    left: 82px;\n    top: 95px;\n    width: 0;\n  }\n  84% {\n    left: 14px;\n    top: 33px;\n    width: 47px;\n  }\n  100% {\n    left: 17px;\n    top: 37px;\n    width: 47px;\n  }\n}\n@-webkit-keyframes animateXRight {\n  0%, 65% {\n    right: 82px;\n    top: 95px;\n    width: 0;\n  }\n  84% {\n    right: 14px;\n    top: 33px;\n    width: 47px;\n  }\n  100% {\n    right: 16px;\n    top: 37px;\n    width: 47px;\n  }\n}\n@keyframes animateXRight {\n  0%, 65% {\n    right: 82px;\n    top: 95px;\n    width: 0;\n  }\n  84% {\n    right: 14px;\n    top: 33px;\n    width: 47px;\n  }\n  100% {\n    right: 16px;\n    top: 37px;\n    width: 47px;\n  }\n}\n@-webkit-keyframes scaleWarning {\n  0% {\n    transform: scale(1);\n  }\n  30% {\n    transform: scale(1.02);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes scaleWarning {\n  0% {\n    transform: scale(1);\n  }\n  30% {\n    transform: scale(1.02);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes pulseWarning {\n  0% {\n    background-color: #fff;\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  30% {\n    background-color: #fff;\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    background-color: #F8BB86;\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n@keyframes pulseWarning {\n  0% {\n    background-color: #fff;\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  30% {\n    background-color: #fff;\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    background-color: #F8BB86;\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes pulseWarningIns {\n  0% {\n    background-color: #F8D486;\n  }\n  100% {\n    background-color: #F8BB86;\n  }\n}\n@keyframes pulseWarningIns {\n  0% {\n    background-color: #F8D486;\n  }\n  100% {\n    background-color: #F8BB86;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0ksY0FBQTtBQUFSO0FBSUE7RUFDQyxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBREQ7QUFJQztFQUNDLGlCQUFBO0FBRkY7QUFJRTtFQUVDLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQUhIO0FBTUU7RUFDQyw4QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQUpIO0FBT0U7RUFDQyw4QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQUxIO0FBUUU7RUFDQyxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBTkg7QUFTRTtFQUNDLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBUEg7QUFVRTtFQUNDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVJIO0FBVUc7RUFDQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQVJKO0FBV0c7RUFDQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQVRKO0FBZUM7RUFDQyxpQkFBQTtBQWJGO0FBZUU7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBYkg7QUFnQkU7RUFDQyxzQ0FBQTtBQWRIO0FBaUJFO0VBQ0MscUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWZIO0FBaUJHO0VBQ0MsVUFBQTtFQUNBLHdCQUFBO0FBZko7QUFrQkc7RUFDQyxXQUFBO0VBQ0EseUJBQUE7QUFoQko7QUF3QkE7RUFDQywwQ0FBQTtVQUFBLGtDQUFBO0FBckJEO0FBd0JBO0VBQ0MsMkNBQUE7VUFBQSxtQ0FBQTtBQXJCRDtBQXdCQTtFQUNDLGtEQUFBO1VBQUEsMENBQUE7QUFyQkQ7QUF3QkE7RUFDQyxrREFBQTtVQUFBLDBDQUFBO0FBckJEO0FBd0JBO0VBQ0Msd0NBQUE7VUFBQSxnQ0FBQTtBQXJCRDtBQXdCQTtFQUNDLHFDQUFBO1VBQUEsNkJBQUE7QUFyQkQ7QUF3QkE7RUFDQyxzQ0FBQTtVQUFBLDhCQUFBO0FBckJEO0FBd0JBO0VBQ0ksd0RBQUE7VUFBQSxnREFBQTtBQXJCSjtBQXdCQTtFQUNJLDJEQUFBO1VBQUEsbURBQUE7QUFyQko7QUF3QkE7RUFDQztJQUNDLFFBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtFQXJCQTtFQXdCRDtJQUNDLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQXRCQTtFQXlCRDtJQUNDLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQXZCQTtFQTBCRDtJQUNDLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQXhCQTtBQUNGO0FBQ0E7RUFDQztJQUNDLFFBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtFQXJCQTtFQXdCRDtJQUNDLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQXRCQTtFQXlCRDtJQUNDLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQXZCQTtFQTBCRDtJQUNDLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQXhCQTtBQUNGO0FBMkJBO0VBQ0M7SUFDQyxRQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7RUF6QkE7RUE0QkQ7SUFDQyxXQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7RUExQkE7RUE2QkQ7SUFDQyxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUEzQkE7QUFDRjtBQVVBO0VBQ0M7SUFDQyxRQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7RUF6QkE7RUE0QkQ7SUFDQyxXQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7RUExQkE7RUE2QkQ7SUFDQyxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUEzQkE7QUFDRjtBQThCQTtFQUNDO0lBQ0MseUJBQUE7RUE1QkE7RUErQkQ7SUFDQywwQkFBQTtFQTdCQTtBQUNGO0FBc0JBO0VBQ0M7SUFDQyx5QkFBQTtFQTVCQTtFQStCRDtJQUNDLDBCQUFBO0VBN0JBO0FBQ0Y7QUFnQ0E7RUFDQztJQUNDLDBCQUFBO0lBQ0EsVUFBQTtFQTlCQTtFQWlDRDtJQUNDLHdCQUFBO0lBQ0EsVUFBQTtFQS9CQTtBQUNGO0FBc0JBO0VBQ0M7SUFDQywwQkFBQTtJQUNBLFVBQUE7RUE5QkE7RUFpQ0Q7SUFDQyx3QkFBQTtJQUNBLFVBQUE7RUEvQkE7QUFDRjtBQWtDQTtFQUNDO0lBRUMsVUFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0VBakNBO0VBb0NEO0lBQ0MsVUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBbENBO0VBcUNEO0lBQ0MsVUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBbkNBO0FBQ0Y7QUFpQkE7RUFDQztJQUVDLFVBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtFQWpDQTtFQW9DRDtJQUNDLFVBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQWxDQTtFQXFDRDtJQUNDLFVBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQW5DQTtBQUNGO0FBc0NBO0VBQ0M7SUFFQyxXQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7RUFyQ0E7RUF3Q0Q7SUFDQyxXQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUF0Q0E7RUF5Q0Q7SUFDQyxXQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUF2Q0E7QUFDRjtBQXFCQTtFQUNDO0lBRUMsV0FBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0VBckNBO0VBd0NEO0lBQ0MsV0FBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBdENBO0VBeUNEO0lBQ0MsV0FBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBdkNBO0FBQ0Y7QUEwQ0E7RUFDQztJQUNDLG1CQUFBO0VBeENBO0VBMkNEO0lBQ0Msc0JBQUE7RUF6Q0E7RUE0Q0Q7SUFDQyxtQkFBQTtFQTFDQTtBQUNGO0FBK0JBO0VBQ0M7SUFDQyxtQkFBQTtFQXhDQTtFQTJDRDtJQUNDLHNCQUFBO0VBekNBO0VBNENEO0lBQ0MsbUJBQUE7RUExQ0E7QUFDRjtBQTZDQTtFQUNDO0lBQ0Msc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUEzQ0E7RUE4Q0Q7SUFDQyxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtFQTVDQTtFQStDRDtJQUNDLHlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VBN0NBO0FBQ0Y7QUE0QkE7RUFDQztJQUNDLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VBM0NBO0VBOENEO0lBQ0Msc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUE1Q0E7RUErQ0Q7SUFDQyx5QkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFQTdDQTtBQUNGO0FBZ0RBO0VBQ0k7SUFDSSx5QkFBQTtFQTlDTjtFQWlERTtJQUNJLHlCQUFBO0VBL0NOO0FBQ0Y7QUF3Q0E7RUFDSTtJQUNJLHlCQUFBO0VBOUNOO0VBaURFO0lBQ0kseUJBQUE7RUEvQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgPmRpdiB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbn1cblxuLmYtbW9kYWwtaWNvbiB7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Ym9yZGVyOiA0cHggc29saWQgZ3JheTtcblx0Ym94LXNpemluZzogY29udGVudC1ib3g7XG5cdGhlaWdodDogODBweDtcblx0bWFyZ2luOiAyMHB4IGF1dG87XG5cdHBhZGRpbmc6IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDgwcHg7XG5cblx0Ly8gU3VjY2VzcyBpY29uXG5cdCYuZi1tb2RhbC1lcnJvciB7XG5cdFx0Ym9yZGVyLWNvbG9yOiByZWQ7XG5cblx0XHQmOmFmdGVyLFxuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRoZWlnaHQ6IDEyMHB4O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHRcdFx0d2lkdGg6IDYwcHg7XG5cdFx0fVxuXG5cdFx0JjpiZWZvcmUge1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTIwcHggMCAwIDEyMHB4O1xuXHRcdFx0bGVmdDogLTMzcHg7XG5cdFx0XHR0b3A6IC03cHg7XG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiA2MHB4IDYwcHg7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuXHRcdH1cblxuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMCAxMjBweCAxMjBweCAwO1xuXHRcdFx0bGVmdDogMzBweDtcblx0XHRcdHRvcDogLTExcHg7XG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiAwIDYwcHg7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuXHRcdH1cblxuXHRcdC5mLW1vZGFsLXBsYWNlaG9sZGVyIHtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdGJvcmRlcjogNHB4IHNvbGlkIHJlZDtcblx0XHRcdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuXHRcdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdFx0bGVmdDogLTRweDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogLTRweDtcblx0XHRcdHdpZHRoOiA4MHB4O1xuXHRcdFx0ei1pbmRleDogMjtcblx0XHR9XG5cblx0XHQuZi1tb2RhbC1maXgge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0XHRoZWlnaHQ6IDkwcHg7XG5cdFx0XHRsZWZ0OiAyOHB4O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiA4cHg7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuXHRcdFx0d2lkdGg6IDVweDtcblx0XHRcdHotaW5kZXg6IDE7XG5cdFx0fVxuXG5cdFx0LmYtbW9kYWwtbGluZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdGhlaWdodDogNXB4O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0ei1pbmRleDogMjtcblxuXHRcdFx0Ji5mLW1vZGFsLXRpcCB7XG5cdFx0XHRcdGxlZnQ6IDE0cHg7XG5cdFx0XHRcdHRvcDogNDZweDtcblx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHRcdFx0XHR3aWR0aDogMjVweDtcblx0XHRcdH1cblxuXHRcdFx0Ji5mLW1vZGFsLWxvbmcge1xuXHRcdFx0XHRyaWdodDogOHB4O1xuXHRcdFx0XHR0b3A6IDM4cHg7XG5cdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG5cdFx0XHRcdHdpZHRoOiA0N3B4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEVycm9yIGljb25cblx0Ji5mLW1vZGFsLWVycm9yIHtcblx0XHRib3JkZXItY29sb3I6IHJlZDtcblxuXHRcdC5mLW1vZGFsLXgtbWFyayB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHotaW5kZXg6IDI7XG5cdFx0fVxuXG5cdFx0LmYtbW9kYWwtcGxhY2Vob2xkZXIge1xuXHRcdFx0Ym9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDAsIDAsIC4yKTtcblx0XHR9XG5cblx0XHQuZi1tb2RhbC1saW5lIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcblx0XHRcdHRvcDogMzdweDtcblx0XHRcdHdpZHRoOiA0N3B4O1xuXG5cdFx0XHQmLmYtbW9kYWwtbGVmdCB7XG5cdFx0XHRcdGxlZnQ6IDE3cHg7XG5cdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0XHRcdH1cblxuXHRcdFx0Ji5mLW1vZGFsLXJpZ2h0IHtcblx0XHRcdFx0cmlnaHQ6IDE2cHg7XG5cdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxufVxuXG5cbi5hbmltYXRlU3VjY2Vzc1RpcCB7XG5cdGFuaW1hdGlvbjogYW5pbWF0ZVN1Y2Nlc3NUaXAgLjc1cztcbn1cblxuLmFuaW1hdGVTdWNjZXNzTG9uZyB7XG5cdGFuaW1hdGlvbjogYW5pbWF0ZVN1Y2Nlc3NMb25nIC43NXM7XG59XG5cbi5mLW1vZGFsLWljb24uZi1tb2RhbC1zdWNjZXNzLmFuaW1hdGU6YWZ0ZXIge1xuXHRhbmltYXRpb246IHJvdGF0ZVBsYWNlaG9sZGVyIDQuMjVzIGVhc2UtaW47XG59XG5cbi5mLW1vZGFsLWljb24uZi1tb2RhbC1lcnJvci5hbmltYXRlOmFmdGVyIHtcblx0YW5pbWF0aW9uOiByb3RhdGVQbGFjZWhvbGRlciA0LjI1cyBlYXNlLWluO1xufVxuXG4uYW5pbWF0ZUVycm9ySWNvbiB7XG5cdGFuaW1hdGlvbjogYW5pbWF0ZUVycm9ySWNvbiAuNXM7XG59XG5cbi5hbmltYXRlWExlZnQge1xuXHRhbmltYXRpb246IGFuaW1hdGVYTGVmdCAuNzVzO1xufVxuXG4uYW5pbWF0ZVhSaWdodCB7XG5cdGFuaW1hdGlvbjogYW5pbWF0ZVhSaWdodCAuNzVzO1xufVxuXG4uc2NhbGVXYXJuaW5nIHtcbiAgICBhbmltYXRpb246IHNjYWxlV2FybmluZyAwLjc1cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5wdWxzZVdhcm5pbmdJbnMge1xuICAgIGFuaW1hdGlvbjogcHVsc2VXYXJuaW5nSW5zIDAuNzVzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlU3VjY2Vzc1RpcCB7XG5cdDAlLDU0JSB7XG5cdFx0d2lkdGg6IDA7XG5cdFx0bGVmdDogMXB4O1xuXHRcdHRvcDogMTlweDtcblx0fVxuXG5cdDcwJSB7XG5cdFx0d2lkdGg6IDUwcHg7XG5cdFx0bGVmdDogLThweDtcblx0XHR0b3A6IDM3cHg7XG5cdH1cblxuXHQ4NCUge1xuXHRcdHdpZHRoOiAxN3B4O1xuXHRcdGxlZnQ6IDIxcHg7XG5cdFx0dG9wOiA0OHB4O1xuXHR9XG5cblx0MTAwJSB7XG5cdFx0d2lkdGg6IDI1cHg7XG5cdFx0bGVmdDogMTRweDtcblx0XHR0b3A6IDQ1cHg7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBhbmltYXRlU3VjY2Vzc0xvbmcge1xuXHQwJSw2NSUge1xuXHRcdHdpZHRoOiAwO1xuXHRcdHJpZ2h0OiA0NnB4O1xuXHRcdHRvcDogNTRweDtcblx0fVxuXG5cdDg0JSB7XG5cdFx0d2lkdGg6IDU1cHg7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0dG9wOiAzNXB4O1xuXHR9XG5cblx0MTAwJSB7XG5cdFx0d2lkdGg6IDQ3cHg7XG5cdFx0cmlnaHQ6IDhweDtcblx0XHR0b3A6IDM4cHg7XG5cdH1cbn1cblxuQGtleWZyYW1lcyByb3RhdGVQbGFjZWhvbGRlciB7XG5cdDAlLDUlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuXHR9XG5cblx0MTAwJSwxMiUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZUVycm9ySWNvbiB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBhbmltYXRlWExlZnQge1xuXHQwJSxcblx0NjUlIHtcblx0XHRsZWZ0OiA4MnB4O1xuXHRcdHRvcDogOTVweDtcblx0XHR3aWR0aDogMDtcblx0fVxuXG5cdDg0JSB7XG5cdFx0bGVmdDogMTRweDtcblx0XHR0b3A6IDMzcHg7XG5cdFx0d2lkdGg6IDQ3cHg7XG5cdH1cblxuXHQxMDAlIHtcblx0XHRsZWZ0OiAxN3B4O1xuXHRcdHRvcDogMzdweDtcblx0XHR3aWR0aDogNDdweDtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVYUmlnaHQge1xuXHQwJSxcblx0NjUlIHtcblx0XHRyaWdodDogODJweDtcblx0XHR0b3A6IDk1cHg7XG5cdFx0d2lkdGg6IDA7XG5cdH1cblxuXHQ4NCUge1xuXHRcdHJpZ2h0OiAxNHB4O1xuXHRcdHRvcDogMzNweDtcblx0XHR3aWR0aDogNDdweDtcblx0fVxuXG5cdDEwMCUge1xuXHRcdHJpZ2h0OiAxNnB4O1xuXHRcdHRvcDogMzdweDtcblx0XHR3aWR0aDogNDdweDtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlV2FybmluZyB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHR9XG5cdFxuXHQzMCUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG5cdH1cblx0XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZVdhcm5pbmcge1xuXHQwJSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHRcdG9wYWNpdHk6IDAuNTtcblx0fVxuXG5cdDMwJSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHRcdG9wYWNpdHk6IDAuNTtcblx0fVxuXG5cdDEwMCUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGOEJCODY7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgyKTtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2VXYXJuaW5nSW5zIHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEQ0ODY7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEJCODY7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/error/error.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/error/error.component.ts ***!
      \*****************************************************/

    /*! exports provided: ErrorComponent */

    /***/
    function srcAppComponentsErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
        return ErrorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ErrorComponent = /*#__PURE__*/function () {
        function ErrorComponent() {
          _classCallCheck(this, ErrorComponent);

          this.options = {
            showOnStart: false,
            delay: 0
          };
          this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.classes = {};
          this.isShow = false;
        }

        _createClass(ErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.options.showOnStart) {
              this.show(this.options.delay);
            }
          }
        }, {
          key: "show",
          value: function show() {
            var _this4 = this;

            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            this.text = text || this.text;
            setTimeout(function () {
              _this4.isShow = true;
            }, time || 0);
          }
        }, {
          key: "hide",
          value: function hide() {
            var _this5 = this;

            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            setTimeout(function () {
              _this5.isShow = false;
              _this5.text = '';
            }, time || 0);
          }
        }]);

        return ErrorComponent;
      }();

      ErrorComponent.ctorParameters = function () {
        return [];
      };

      ErrorComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['options']
        }],
        successText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['successText']
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['text']
        }],
        callback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ["callback"]
        }]
      };
      ErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'error-effect',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./error.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./error.component.scss */
        "./src/app/components/error/error.component.scss"))["default"]]
      })], ErrorComponent);
      /***/
    },

    /***/
    "./src/app/components/loading/loading.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/loading/loading.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLoadingLoadingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".overlay {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.6);\n}\n.overlay > div {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQ0k7RUFDSSxjQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC42KTtcblxuICAgID4gZGl2IHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/loading/loading.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/loading/loading.component.ts ***!
      \*********************************************************/

    /*! exports provided: LoadingComponent */

    /***/
    function srcAppComponentsLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
        return LoadingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LoadingComponent = /*#__PURE__*/function () {
        function LoadingComponent() {
          _classCallCheck(this, LoadingComponent);
        }

        _createClass(LoadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "show",
          value: function show() {
            this.isShowed = true;
          }
        }, {
          key: "hide",
          value: function hide() {
            this.isShowed = false;
          }
        }]);

        return LoadingComponent;
      }();

      LoadingComponent.ctorParameters = function () {
        return [];
      };

      LoadingComponent.propDecorators = {
        components: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ["components"]
        }]
      };
      LoadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'loading',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./loading.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./loading.component.scss */
        "./src/app/components/loading/loading.component.scss"))["default"]]
      })], LoadingComponent);
      /***/
    },

    /***/
    "./src/app/components/printer-animation/printer-animation.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/printer-animation/printer-animation.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPrinterAnimationPrinterAnimationComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".paper-1 {\n  -webkit-animation: print-1 2s infinite;\n          animation: print-1 2s infinite;\n}\n\n.paper-2 {\n  -webkit-animation: print-2 2s infinite;\n          animation: print-2 2s infinite;\n  height: 0%;\n}\n\n.led {\n  -webkit-animation: led 2s infinite;\n          animation: led 2s infinite;\n}\n\n.cls-1 {\n  fill: #fff;\n}\n\n.cls-2,\n.cls-3,\n.cls-4 {\n  fill: none;\n  stroke: #000;\n}\n\n.cls-2,\n.cls-4 {\n  stroke-miterlimit: 10;\n}\n\n.cls-2,\n.cls-3 {\n  stroke-width: 1.2em;\n}\n\n.cls-3 {\n  stroke-linecap: round;\n  stroke-linejoin: bevel;\n}\n\n.cls-4 {\n  stroke-width: 1.1em;\n}\n\n.printer {\n  fill: #ff8400;\n}\n\n@-webkit-keyframes led {\n  0% {\n    fill: red;\n  }\n  50% {\n    fill: yellow;\n  }\n  100% {\n    fill: green;\n  }\n}\n\n@keyframes led {\n  0% {\n    fill: red;\n  }\n  50% {\n    fill: yellow;\n  }\n  100% {\n    fill: green;\n  }\n}\n\n@-webkit-keyframes print-1 {\n  50% {\n    transform: translateY(220px);\n  }\n  100% {\n    transform: translateY(220px);\n    height: 0px;\n  }\n}\n\n@keyframes print-1 {\n  50% {\n    transform: translateY(220px);\n  }\n  100% {\n    transform: translateY(220px);\n    height: 0px;\n  }\n}\n\n@-webkit-keyframes print-2 {\n  30% {\n    height: 0%;\n  }\n  100% {\n    height: 40%;\n  }\n}\n\n@keyframes print-2 {\n  30% {\n    height: 0%;\n  }\n  100% {\n    height: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmludGVyLWFuaW1hdGlvbi9wcmludGVyLWFuaW1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO1VBQUEsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtVQUFBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7OztFQUdJLFVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7O0VBRUkscUJBQUE7QUFDSjs7QUFFQTs7RUFFSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksU0FBQTtFQUNOO0VBRUU7SUFDSSxZQUFBO0VBQU47RUFHRTtJQUNJLFdBQUE7RUFETjtBQUNGOztBQVZBO0VBQ0k7SUFDSSxTQUFBO0VBQ047RUFFRTtJQUNJLFlBQUE7RUFBTjtFQUdFO0lBQ0ksV0FBQTtFQUROO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLDRCQUFBO0VBRk47RUFLRTtJQUNJLDRCQUFBO0lBQ0EsV0FBQTtFQUhOO0FBQ0Y7O0FBTEE7RUFDSTtJQUNJLDRCQUFBO0VBRk47RUFLRTtJQUNJLDRCQUFBO0lBQ0EsV0FBQTtFQUhOO0FBQ0Y7O0FBTUE7RUFDSTtJQUNJLFVBQUE7RUFKTjtFQU9FO0lBQ0ksV0FBQTtFQUxOO0FBQ0Y7O0FBRkE7RUFDSTtJQUNJLFVBQUE7RUFKTjtFQU9FO0lBQ0ksV0FBQTtFQUxOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByaW50ZXItYW5pbWF0aW9uL3ByaW50ZXItYW5pbWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcGVyLTEge1xuICAgIGFuaW1hdGlvbjogcHJpbnQtMSAycyBpbmZpbml0ZTtcbn1cblxuLnBhcGVyLTIge1xuICAgIGFuaW1hdGlvbjogcHJpbnQtMiAycyBpbmZpbml0ZTtcbiAgICBoZWlnaHQ6IDAlO1xufVxuXG4ubGVkIHtcbiAgICBhbmltYXRpb246IGxlZCAycyBpbmZpbml0ZTtcbn1cblxuLmNscy0xIHtcbiAgICBmaWxsOiAjZmZmO1xufVxuXG4uY2xzLTIsXG4uY2xzLTMsXG4uY2xzLTQge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAjMDAwO1xufVxuXG4uY2xzLTIsXG4uY2xzLTQge1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbn1cblxuLmNscy0yLFxuLmNscy0zIHtcbiAgICBzdHJva2Utd2lkdGg6IDEuMmVtO1xufVxuXG4uY2xzLTMge1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICBzdHJva2UtbGluZWpvaW46IGJldmVsO1xufVxuXG4uY2xzLTQge1xuICAgIHN0cm9rZS13aWR0aDogMS4xZW07XG59XG5cbi5wcmludGVyIHtcbiAgICBmaWxsOiAjZmY4NDAwO1xufVxuXG5Aa2V5ZnJhbWVzIGxlZCB7XG4gICAgMCUge1xuICAgICAgICBmaWxsOiByZWQ7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgZmlsbDogeWVsbG93O1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBmaWxsOiBncmVlbjtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcHJpbnQtMSB7XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIyMHB4KTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIyMHB4KTtcbiAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHByaW50LTIge1xuICAgIDMwJSB7XG4gICAgICAgIGhlaWdodDogMCU7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIGhlaWdodDogNDAlO1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/printer-animation/printer-animation.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/printer-animation/printer-animation.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: PrinterAnimationComponent */

    /***/
    function srcAppComponentsPrinterAnimationPrinterAnimationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrinterAnimationComponent", function () {
        return PrinterAnimationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PrinterAnimationComponent = /*#__PURE__*/function () {
        function PrinterAnimationComponent() {
          _classCallCheck(this, PrinterAnimationComponent);
        }

        _createClass(PrinterAnimationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrinterAnimationComponent;
      }();

      PrinterAnimationComponent.ctorParameters = function () {
        return [];
      };

      PrinterAnimationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'printer-animation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./printer-animation.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/printer-animation/printer-animation.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./printer-animation.component.scss */
        "./src/app/components/printer-animation/printer-animation.component.scss"))["default"]]
      })], PrinterAnimationComponent);
      /***/
    },

    /***/
    "./src/app/components/success/success.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/success/success.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsSuccessSuccessComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/**\n * SUCCESS ANIMATION\n */\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  display: flex;\n  align-items: center;\n}\n.overlay > div {\n  margin: 0 auto;\n}\n.success-checkmark {\n  width: 80px;\n  height: 115px;\n  margin: 0 auto;\n}\n.success-checkmark .check-icon {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  border-radius: 50%;\n  box-sizing: content-box;\n  border: 4px solid #4CAF50;\n}\n.success-checkmark .check-icon::before {\n  top: 3px;\n  left: -2px;\n  width: 30px;\n  transform-origin: 100% 50%;\n  border-radius: 100px 0 0 100px;\n}\n.success-checkmark .check-icon::after {\n  top: 0;\n  left: 30px;\n  width: 60px;\n  transform-origin: 0 50%;\n  border-radius: 0 100px 100px 0;\n  -webkit-animation: rotate-circle 4.25s ease-in;\n          animation: rotate-circle 4.25s ease-in;\n}\n.success-checkmark .check-icon::before,\n.success-checkmark .check-icon::after {\n  content: \"\";\n  height: 100px;\n  position: absolute;\n  background: #000;\n  transform: rotate(-45deg);\n}\n.success-checkmark .check-icon .icon-line {\n  height: 5px;\n  background-color: #4CAF50;\n  display: block;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n}\n.success-checkmark .check-icon .icon-line.line-tip {\n  top: 46px;\n  left: 14px;\n  width: 25px;\n  transform: rotate(45deg);\n  -webkit-animation: icon-line-tip 0.75s;\n          animation: icon-line-tip 0.75s;\n}\n.success-checkmark .check-icon .icon-line.line-long {\n  top: 38px;\n  right: 8px;\n  width: 47px;\n  transform: rotate(-45deg);\n  -webkit-animation: icon-line-long 0.75s;\n          animation: icon-line-long 0.75s;\n}\n.success-checkmark .check-icon .icon-circle {\n  top: -4px;\n  left: -4px;\n  z-index: 10;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  position: absolute;\n  box-sizing: content-box;\n  border: 4px solid rgba(76, 175, 80, 0.5);\n}\n.success-checkmark .check-icon .icon-fix {\n  top: 8px;\n  width: 5px;\n  left: 26px;\n  z-index: 1;\n  height: 85px;\n  position: absolute;\n  transform: rotate(-45deg);\n  background-color: #000;\n}\n@-webkit-keyframes rotate-circle {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@keyframes rotate-circle {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@-webkit-keyframes icon-line-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px;\n  }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px;\n  }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px;\n  }\n}\n@keyframes icon-line-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px;\n  }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px;\n  }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px;\n  }\n}\n@-webkit-keyframes icon-line-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px;\n  }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px;\n  }\n}\n@keyframes icon-line-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px;\n  }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px;\n  }\n}\n.fade-in {\n  margin-top: 25px;\n  font-size: 21px;\n  text-align: center;\n  -webkit-animation: fadein 2s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 2s;\n}\n.delay-300 {\n  -webkit-animation: fadein 0.5s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 0.5s;\n}\n.delay-600 {\n  -webkit-animation: fadein 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 0.8s;\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/* Internet Explorer */\n/* Opera < 12.1 */\n/* Animation FadeInUp */\n@keyframes fadeInUp {\n  from {\n    transform: translate3d(0, 40px, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeInUp {\n  from {\n    transform: translate3d(0, 40px, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n}\n.animatedFadeInUp {\n  opacity: 0;\n}\n.fadeInUp {\n  opacity: 0;\n  animation-name: fadeInUp;\n  -webkit-animation-name: fadeInUp;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWNjZXNzL3N1Y2Nlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUFJQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0ksY0FBQTtBQUFSO0FBSUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFESjtBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQURKO0FBSUE7RUFDSSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0FBREo7QUFJQTtFQUNJLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FBREo7QUFJQTs7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFESjtBQUlBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FBREo7QUFJQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQURKO0FBSUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0FBREo7QUFJQTtFQUNJLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBREo7QUFJQTtFQUNJO0lBQ0kseUJBQUE7RUFETjtFQUlFO0lBQ0kseUJBQUE7RUFGTjtFQUtFO0lBQ0ksMEJBQUE7RUFITjtFQU1FO0lBQ0ksMEJBQUE7RUFKTjtBQUNGO0FBWEE7RUFDSTtJQUNJLHlCQUFBO0VBRE47RUFJRTtJQUNJLHlCQUFBO0VBRk47RUFLRTtJQUNJLDBCQUFBO0VBSE47RUFNRTtJQUNJLDBCQUFBO0VBSk47QUFDRjtBQU9BO0VBQ0k7SUFDSSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7RUFMTjtFQVFFO0lBQ0ksUUFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0VBTk47RUFTRTtJQUNJLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQVBOO0VBVUU7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFSTjtFQVdFO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VBVE47QUFDRjtBQXBCQTtFQUNJO0lBQ0ksUUFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0VBTE47RUFRRTtJQUNJLFFBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtFQU5OO0VBU0U7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFQTjtFQVVFO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VBUk47RUFXRTtJQUNJLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQVROO0FBQ0Y7QUFZQTtFQUNJO0lBQ0ksUUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0VBVk47RUFhRTtJQUNJLFFBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtFQVhOO0VBY0U7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFaTjtFQWVFO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VBYk47QUFDRjtBQVZBO0VBQ0k7SUFDSSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7RUFWTjtFQWFFO0lBQ0ksUUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0VBWE47RUFjRTtJQUNJLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQVpOO0VBZUU7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFiTjtBQUNGO0FBZ0JBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSw0QkFBQTtFQUNBLG9DQUFBO0VBRUEsaUJBQUE7RUFFQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0Esb0JBQUE7QUFmSjtBQXFCQTtFQUNJLDhCQUFBO0VBQ0Esb0NBQUE7RUFFQSxpQkFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxzQkFBQTtBQWxCSjtBQXFCQTtFQUNJLDhCQUFBO0VBQ0Esb0NBQUE7RUFFQSxpQkFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxzQkFBQTtBQWxCSjtBQXFCQTtFQUNJO0lBQ0ksVUFBQTtFQWxCTjtFQXFCRTtJQUNJLFVBQUE7RUFuQk47QUFDRjtBQXNCQSxpQkFBQTtBQVdBLG9DQUFBO0FBQ0E7RUFDSTtJQUNJLFVBQUE7RUF0Qk47RUF5QkU7SUFDSSxVQUFBO0VBdkJOO0FBQ0Y7QUEwQkEsc0JBQUE7QUFXQSxpQkFBQTtBQVdBLHVCQUFBO0FBRUE7RUFDSTtJQUNJLGtDQUFBO0VBN0JOO0VBZ0NFO0lBQ0ksK0JBQUE7SUFDQSxVQUFBO0VBOUJOO0FBQ0Y7QUFpQ0E7RUFDSTtJQUNJLGtDQUFBO0VBL0JOO0VBa0NFO0lBQ0ksK0JBQUE7SUFDQSxVQUFBO0VBaENOO0FBQ0Y7QUFtQ0E7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQWpDSjtBQW9DQTtFQUNJLFVBQUE7QUFqQ0o7QUFvQ0E7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtBQWpDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VjY2Vzcy9zdWNjZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTVUNDRVNTIEFOSU1BVElPTlxuICovXG5cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgPmRpdiB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbn1cblxuLnN1Y2Nlc3MtY2hlY2ttYXJrIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc3VjY2Vzcy1jaGVja21hcmsgLmNoZWNrLWljb24ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICM0Q0FGNTA7XG59XG5cbi5zdWNjZXNzLWNoZWNrbWFyayAuY2hlY2staWNvbjo6YmVmb3JlIHtcbiAgICB0b3A6IDNweDtcbiAgICBsZWZ0OiAtMnB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4IDAgMCAxMDBweDtcbn1cblxuLnN1Y2Nlc3MtY2hlY2ttYXJrIC5jaGVjay1pY29uOjphZnRlciB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxMDBweCAxMDBweCAwO1xuICAgIGFuaW1hdGlvbjogcm90YXRlLWNpcmNsZSA0LjI1cyBlYXNlLWluO1xufVxuXG4uc3VjY2Vzcy1jaGVja21hcmsgLmNoZWNrLWljb246OmJlZm9yZSxcbi5zdWNjZXNzLWNoZWNrbWFyayAuY2hlY2staWNvbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLnN1Y2Nlc3MtY2hlY2ttYXJrIC5jaGVjay1pY29uIC5pY29uLWxpbmUge1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLnN1Y2Nlc3MtY2hlY2ttYXJrIC5jaGVjay1pY29uIC5pY29uLWxpbmUubGluZS10aXAge1xuICAgIHRvcDogNDZweDtcbiAgICBsZWZ0OiAxNHB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICBhbmltYXRpb246IGljb24tbGluZS10aXAgMC43NXM7XG59XG5cbi5zdWNjZXNzLWNoZWNrbWFyayAuY2hlY2staWNvbiAuaWNvbi1saW5lLmxpbmUtbG9uZyB7XG4gICAgdG9wOiAzOHB4O1xuICAgIHJpZ2h0OiA4cHg7XG4gICAgd2lkdGg6IDQ3cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICBhbmltYXRpb246IGljb24tbGluZS1sb25nIDAuNzVzO1xufVxuXG4uc3VjY2Vzcy1jaGVja21hcmsgLmNoZWNrLWljb24gLmljb24tY2lyY2xlIHtcbiAgICB0b3A6IC00cHg7XG4gICAgbGVmdDogLTRweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDc2LCAxNzUsIDgwLCAwLjUpO1xufVxuXG4uc3VjY2Vzcy1jaGVja21hcmsgLmNoZWNrLWljb24gLmljb24tZml4IHtcbiAgICB0b3A6IDhweDtcbiAgICB3aWR0aDogNXB4O1xuICAgIGxlZnQ6IDI2cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBoZWlnaHQ6IDg1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUtY2lyY2xlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgfVxuXG4gICAgNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cblxuICAgIDEyJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgaWNvbi1saW5lLXRpcCB7XG4gICAgMCUge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgbGVmdDogMXB4O1xuICAgICAgICB0b3A6IDE5cHg7XG4gICAgfVxuXG4gICAgNTQlIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGxlZnQ6IDFweDtcbiAgICAgICAgdG9wOiAxOXB4O1xuICAgIH1cblxuICAgIDcwJSB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBsZWZ0OiAtOHB4O1xuICAgICAgICB0b3A6IDM3cHg7XG4gICAgfVxuXG4gICAgODQlIHtcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGxlZnQ6IDIxcHg7XG4gICAgICAgIHRvcDogNDhweDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGxlZnQ6IDE0cHg7XG4gICAgICAgIHRvcDogNDVweDtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgaWNvbi1saW5lLWxvbmcge1xuICAgIDAlIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIHJpZ2h0OiA0NnB4O1xuICAgICAgICB0b3A6IDU0cHg7XG4gICAgfVxuXG4gICAgNjUlIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIHJpZ2h0OiA0NnB4O1xuICAgICAgICB0b3A6IDU0cHg7XG4gICAgfVxuXG4gICAgODQlIHtcbiAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHRvcDogMzVweDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgd2lkdGg6IDQ3cHg7XG4gICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIHRvcDogMzhweDtcbiAgICB9XG59XG5cbi5mYWRlLWluIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDJzO1xuICAgIC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDJzO1xuICAgIC8qIEZpcmVmb3ggPCAxNiAqL1xuICAgIC1tcy1hbmltYXRpb246IGZhZGVpbiAycztcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDJzO1xuICAgIC8qIE9wZXJhIDwgMTIuMSAqL1xuICAgIGFuaW1hdGlvbjogZmFkZWluIDJzO1xufVxuXG4kZGVsYXlfMzAwOiAwLjVzO1xuJGRlbGF5XzYwMDogMC44cztcblxuLmRlbGF5LTMwMCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAkZGVsYXlfMzAwO1xuICAgIC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluICRkZWxheV8zMDA7XG4gICAgLyogRmlyZWZveCA8IDE2ICovXG4gICAgLW1zLWFuaW1hdGlvbjogZmFkZWluICRkZWxheV8zMDA7XG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAkZGVsYXlfMzAwO1xuICAgIC8qIE9wZXJhIDwgMTIuMSAqL1xuICAgIGFuaW1hdGlvbjogZmFkZWluICRkZWxheV8zMDA7XG59XG5cbi5kZWxheS02MDAge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gJGRlbGF5XzYwMDtcbiAgICAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAkZGVsYXlfNjAwO1xuICAgIC8qIEZpcmVmb3ggPCAxNiAqL1xuICAgIC1tcy1hbmltYXRpb246IGZhZGVpbiAkZGVsYXlfNjAwO1xuICAgIC8qIEludGVybmV0IEV4cGxvcmVyICovXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gJGRlbGF5XzYwMDtcbiAgICAvKiBPcGVyYSA8IDEyLjEgKi9cbiAgICBhbmltYXRpb246IGZhZGVpbiAkZGVsYXlfNjAwO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLyogRmlyZWZveCA8IDE2ICovXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4vKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4vKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xuQC1tcy1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4vKiBPcGVyYSA8IDEyLjEgKi9cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4vKiBBbmltYXRpb24gRmFkZUluVXAgKi9cblxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCw0MHB4LDApXG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDQwcHgsMClcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgfVxufVxuXG4uYW5pbWF0ZWQge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoXG59XG5cbi5hbmltYXRlZEZhZGVJblVwIHtcbiAgICBvcGFjaXR5OiAwXG59XG5cbi5mYWRlSW5VcCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluVXA7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXA7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/success/success.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/success/success.component.ts ***!
      \*********************************************************/

    /*! exports provided: SuccessComponent */

    /***/
    function srcAppComponentsSuccessSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessComponent", function () {
        return SuccessComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SuccessComponent = /*#__PURE__*/function () {
        function SuccessComponent() {
          _classCallCheck(this, SuccessComponent);

          this.options = {
            showOnStart: false,
            delay: 0
          };
          this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.classes = {};
          this.isShow = false;
        }

        _createClass(SuccessComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.options.showOnStart) {
              this.show(this.options.delay);
            }
          }
        }, {
          key: "show",
          value: function show() {
            var _this6 = this;

            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            setTimeout(function () {
              _this6.isShow = true;

              if (_this6.options.cashback) {
                confetti.start();
                setTimeout(function () {
                  confetti.stop();
                }, _this6.options.cashback.confetti.duration || 500);
              }
            }, time || 0);
          }
        }, {
          key: "hide",
          value: function hide() {
            var _this7 = this;

            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            setTimeout(function () {
              _this7.isShow = false;
              confetti.stop();
            }, time || 0);
          }
        }]);

        return SuccessComponent;
      }();

      SuccessComponent.ctorParameters = function () {
        return [];
      };

      SuccessComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['options']
        }],
        successText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['successText']
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['text']
        }],
        callback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ["callback"]
        }]
      };
      SuccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'success-effect',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./success.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/success/success.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./success.component.scss */
        "./src/app/components/success/success.component.scss"))["default"]]
      })], SuccessComponent);
      /***/
    },

    /***/
    "./src/app/interceptors/token.interceptors.ts":
    /*!****************************************************!*\
      !*** ./src/app/interceptors/token.interceptors.ts ***!
      \****************************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function srcAppInterceptorsTokenInterceptorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(auth) {
          _classCallCheck(this, TokenInterceptor);

          this.auth = auth;
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var token = localStorage.getItem("token");
            var headers = {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
              'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
            };
            if (token) headers['Authorization'] = "".concat(token);
            request = request.clone({
              setHeaders: headers
            });
            return next.handle(request);
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TokenInterceptor);
      /***/
    },

    /***/
    "./src/app/pipes/currency-symbol.pipe.ts":
    /*!***********************************************!*\
      !*** ./src/app/pipes/currency-symbol.pipe.ts ***!
      \***********************************************/

    /*! exports provided: CurrencySymbolPipe, CURRENCY */

    /***/
    function srcAppPipesCurrencySymbolPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrencySymbolPipe", function () {
        return CurrencySymbolPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CURRENCY", function () {
        return CURRENCY;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CurrencySymbolPipe = /*#__PURE__*/function () {
        function CurrencySymbolPipe() {
          _classCallCheck(this, CurrencySymbolPipe);
        }

        _createClass(CurrencySymbolPipe, [{
          key: "transform",
          value: function transform(value) {
            var extended = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            value = (value || 'none').toUpperCase();
            var currency = CURRENCY[value] || {};
            return extended ? currency.code : currency.symbol;
          }
        }]);

        return CurrencySymbolPipe;
      }();

      CurrencySymbolPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'currencySymbol'
      })], CurrencySymbolPipe);
      var CURRENCY = {
        "none": {
          "symbol": "¤",
          "name": "Unknown",
          "symbol_native": "¤",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "UNW",
          "name_plural": "Unknowns"
        },
        "USD": {
          "symbol": "$",
          "name": "US Dollar",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "USD",
          "name_plural": "US dollars"
        },
        "CAD": {
          "symbol": "CA$",
          "name": "Canadian Dollar",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "CAD",
          "name_plural": "Canadian dollars"
        },
        "EUR": {
          "symbol": "€",
          "name": "Euro",
          "symbol_native": "€",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "EUR",
          "name_plural": "euros"
        },
        "AED": {
          "symbol": "AED",
          "name": "United Arab Emirates Dirham",
          "symbol_native": "د.إ.‏",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "AED",
          "name_plural": "UAE dirhams"
        },
        "AFN": {
          "symbol": "Af",
          "name": "Afghan Afghani",
          "symbol_native": "؋",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "AFN",
          "name_plural": "Afghan Afghanis"
        },
        "ALL": {
          "symbol": "ALL",
          "name": "Albanian Lek",
          "symbol_native": "Lek",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "ALL",
          "name_plural": "Albanian lekë"
        },
        "AMD": {
          "symbol": "AMD",
          "name": "Armenian Dram",
          "symbol_native": "դր.",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "AMD",
          "name_plural": "Armenian drams"
        },
        "ARS": {
          "symbol": "AR$",
          "name": "Argentine Peso",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "ARS",
          "name_plural": "Argentine pesos"
        },
        "AUD": {
          "symbol": "AU$",
          "name": "Australian Dollar",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "AUD",
          "name_plural": "Australian dollars"
        },
        "AZN": {
          "symbol": "man.",
          "name": "Azerbaijani Manat",
          "symbol_native": "ман.",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "AZN",
          "name_plural": "Azerbaijani manats"
        },
        "BAM": {
          "symbol": "KM",
          "name": "Bosnia-Herzegovina Convertible Mark",
          "symbol_native": "KM",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "BAM",
          "name_plural": "Bosnia-Herzegovina convertible marks"
        },
        "BDT": {
          "symbol": "Tk",
          "name": "Bangladeshi Taka",
          "symbol_native": "৳",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "BDT",
          "name_plural": "Bangladeshi takas"
        },
        "BGN": {
          "symbol": "BGN",
          "name": "Bulgarian Lev",
          "symbol_native": "лв.",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "BGN",
          "name_plural": "Bulgarian leva"
        },
        "BHD": {
          "symbol": "BD",
          "name": "Bahraini Dinar",
          "symbol_native": "د.ب.‏",
          "decimal_digits": 3,
          "rounding": 0,
          "code": "BHD",
          "name_plural": "Bahraini dinars"
        },
        "BIF": {
          "symbol": "FBu",
          "name": "Burundian Franc",
          "symbol_native": "FBu",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "BIF",
          "name_plural": "Burundian francs"
        },
        "BND": {
          "symbol": "BN$",
          "name": "Brunei Dollar",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "BND",
          "name_plural": "Brunei dollars"
        },
        "BOB": {
          "symbol": "Bs",
          "name": "Bolivian Boliviano",
          "symbol_native": "Bs",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "BOB",
          "name_plural": "Bolivian bolivianos"
        },
        "BRL": {
          "symbol": "R$",
          "name": "Brazilian Real",
          "symbol_native": "R$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "BRL",
          "name_plural": "Brazilian reals"
        },
        "BWP": {
          "symbol": "BWP",
          "name": "Botswanan Pula",
          "symbol_native": "P",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "BWP",
          "name_plural": "Botswanan pulas"
        },
        "BYN": {
          "symbol": "Br",
          "name": "Belarusian Ruble",
          "symbol_native": "руб.",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "BYN",
          "name_plural": "Belarusian rubles"
        },
        "BZD": {
          "symbol": "BZ$",
          "name": "Belize Dollar",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "BZD",
          "name_plural": "Belize dollars"
        },
        "CDF": {
          "symbol": "CDF",
          "name": "Congolese Franc",
          "symbol_native": "FrCD",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "CDF",
          "name_plural": "Congolese francs"
        },
        "CHF": {
          "symbol": "CHF",
          "name": "Swiss Franc",
          "symbol_native": "CHF",
          "decimal_digits": 2,
          "rounding": 0.05,
          "code": "CHF",
          "name_plural": "Swiss francs"
        },
        "CLP": {
          "symbol": "CL$",
          "name": "Chilean Peso",
          "symbol_native": "$",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "CLP",
          "name_plural": "Chilean pesos"
        },
        "CNY": {
          "symbol": "CN¥",
          "name": "Chinese Yuan",
          "symbol_native": "CN¥",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "CNY",
          "name_plural": "Chinese yuan"
        },
        "COP": {
          "symbol": "CO$",
          "name": "Colombian Peso",
          "symbol_native": "$",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "COP",
          "name_plural": "Colombian pesos"
        },
        "CRC": {
          "symbol": "₡",
          "name": "Costa Rican Colón",
          "symbol_native": "₡",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "CRC",
          "name_plural": "Costa Rican colóns"
        },
        "CVE": {
          "symbol": "CV$",
          "name": "Cape Verdean Escudo",
          "symbol_native": "CV$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "CVE",
          "name_plural": "Cape Verdean escudos"
        },
        "CZK": {
          "symbol": "Kč",
          "name": "Czech Republic Koruna",
          "symbol_native": "Kč",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "CZK",
          "name_plural": "Czech Republic korunas"
        },
        "DJF": {
          "symbol": "Fdj",
          "name": "Djiboutian Franc",
          "symbol_native": "Fdj",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "DJF",
          "name_plural": "Djiboutian francs"
        },
        "DKK": {
          "symbol": "Dkr",
          "name": "Danish Krone",
          "symbol_native": "kr",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "DKK",
          "name_plural": "Danish kroner"
        },
        "DOP": {
          "symbol": "RD$",
          "name": "Dominican Peso",
          "symbol_native": "RD$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "DOP",
          "name_plural": "Dominican pesos"
        },
        "DZD": {
          "symbol": "DA",
          "name": "Algerian Dinar",
          "symbol_native": "د.ج.‏",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "DZD",
          "name_plural": "Algerian dinars"
        },
        "EEK": {
          "symbol": "Ekr",
          "name": "Estonian Kroon",
          "symbol_native": "kr",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "EEK",
          "name_plural": "Estonian kroons"
        },
        "EGP": {
          "symbol": "EGP",
          "name": "Egyptian Pound",
          "symbol_native": "ج.م.‏",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "EGP",
          "name_plural": "Egyptian pounds"
        },
        "ERN": {
          "symbol": "Nfk",
          "name": "Eritrean Nakfa",
          "symbol_native": "Nfk",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "ERN",
          "name_plural": "Eritrean nakfas"
        },
        "ETB": {
          "symbol": "Br",
          "name": "Ethiopian Birr",
          "symbol_native": "Br",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "ETB",
          "name_plural": "Ethiopian birrs"
        },
        "GBP": {
          "symbol": "£",
          "name": "British Pound Sterling",
          "symbol_native": "£",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "GBP",
          "name_plural": "British pounds sterling"
        },
        "GEL": {
          "symbol": "GEL",
          "name": "Georgian Lari",
          "symbol_native": "GEL",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "GEL",
          "name_plural": "Georgian laris"
        },
        "GHS": {
          "symbol": "GH₵",
          "name": "Ghanaian Cedi",
          "symbol_native": "GH₵",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "GHS",
          "name_plural": "Ghanaian cedis"
        },
        "GNF": {
          "symbol": "FG",
          "name": "Guinean Franc",
          "symbol_native": "FG",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "GNF",
          "name_plural": "Guinean francs"
        },
        "GTQ": {
          "symbol": "GTQ",
          "name": "Guatemalan Quetzal",
          "symbol_native": "Q",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "GTQ",
          "name_plural": "Guatemalan quetzals"
        },
        "HKD": {
          "symbol": "HK$",
          "name": "Hong Kong Dollar",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "HKD",
          "name_plural": "Hong Kong dollars"
        },
        "HNL": {
          "symbol": "HNL",
          "name": "Honduran Lempira",
          "symbol_native": "L",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "HNL",
          "name_plural": "Honduran lempiras"
        },
        "HRK": {
          "symbol": "kn",
          "name": "Croatian Kuna",
          "symbol_native": "kn",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "HRK",
          "name_plural": "Croatian kunas"
        },
        "HUF": {
          "symbol": "Ft",
          "name": "Hungarian Forint",
          "symbol_native": "Ft",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "HUF",
          "name_plural": "Hungarian forints"
        },
        "IDR": {
          "symbol": "Rp",
          "name": "Indonesian Rupiah",
          "symbol_native": "Rp",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "IDR",
          "name_plural": "Indonesian rupiahs"
        },
        "ILS": {
          "symbol": "₪",
          "name": "Israeli New Sheqel",
          "symbol_native": "₪",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "ILS",
          "name_plural": "Israeli new sheqels"
        },
        "INR": {
          "symbol": "Rs",
          "name": "Indian Rupee",
          "symbol_native": "টকা",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "INR",
          "name_plural": "Indian rupees"
        },
        "IQD": {
          "symbol": "IQD",
          "name": "Iraqi Dinar",
          "symbol_native": "د.ع.‏",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "IQD",
          "name_plural": "Iraqi dinars"
        },
        "IRR": {
          "symbol": "IRR",
          "name": "Iranian Rial",
          "symbol_native": "﷼",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "IRR",
          "name_plural": "Iranian rials"
        },
        "ISK": {
          "symbol": "Ikr",
          "name": "Icelandic Króna",
          "symbol_native": "kr",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "ISK",
          "name_plural": "Icelandic krónur"
        },
        "JMD": {
          "symbol": "J$",
          "name": "Jamaican Dollar",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "JMD",
          "name_plural": "Jamaican dollars"
        },
        "JOD": {
          "symbol": "JD",
          "name": "Jordanian Dinar",
          "symbol_native": "د.أ.‏",
          "decimal_digits": 3,
          "rounding": 0,
          "code": "JOD",
          "name_plural": "Jordanian dinars"
        },
        "JPY": {
          "symbol": "¥",
          "name": "Japanese Yen",
          "symbol_native": "￥",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "JPY",
          "name_plural": "Japanese yen"
        },
        "KES": {
          "symbol": "Ksh",
          "name": "Kenyan Shilling",
          "symbol_native": "Ksh",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "KES",
          "name_plural": "Kenyan shillings"
        },
        "KHR": {
          "symbol": "KHR",
          "name": "Cambodian Riel",
          "symbol_native": "៛",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "KHR",
          "name_plural": "Cambodian riels"
        },
        "KMF": {
          "symbol": "CF",
          "name": "Comorian Franc",
          "symbol_native": "FC",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "KMF",
          "name_plural": "Comorian francs"
        },
        "KRW": {
          "symbol": "₩",
          "name": "South Korean Won",
          "symbol_native": "₩",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "KRW",
          "name_plural": "South Korean won"
        },
        "KWD": {
          "symbol": "KD",
          "name": "Kuwaiti Dinar",
          "symbol_native": "د.ك.‏",
          "decimal_digits": 3,
          "rounding": 0,
          "code": "KWD",
          "name_plural": "Kuwaiti dinars"
        },
        "KZT": {
          "symbol": "KZT",
          "name": "Kazakhstani Tenge",
          "symbol_native": "тңг.",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "KZT",
          "name_plural": "Kazakhstani tenges"
        },
        "LBP": {
          "symbol": "LB£",
          "name": "Lebanese Pound",
          "symbol_native": "ل.ل.‏",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "LBP",
          "name_plural": "Lebanese pounds"
        },
        "LKR": {
          "symbol": "SLRs",
          "name": "Sri Lankan Rupee",
          "symbol_native": "SL Re",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "LKR",
          "name_plural": "Sri Lankan rupees"
        },
        "LTL": {
          "symbol": "Lt",
          "name": "Lithuanian Litas",
          "symbol_native": "Lt",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "LTL",
          "name_plural": "Lithuanian litai"
        },
        "LVL": {
          "symbol": "Ls",
          "name": "Latvian Lats",
          "symbol_native": "Ls",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "LVL",
          "name_plural": "Latvian lati"
        },
        "LYD": {
          "symbol": "LD",
          "name": "Libyan Dinar",
          "symbol_native": "د.ل.‏",
          "decimal_digits": 3,
          "rounding": 0,
          "code": "LYD",
          "name_plural": "Libyan dinars"
        },
        "MAD": {
          "symbol": "MAD",
          "name": "Moroccan Dirham",
          "symbol_native": "د.م.‏",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "MAD",
          "name_plural": "Moroccan dirhams"
        },
        "MDL": {
          "symbol": "MDL",
          "name": "Moldovan Leu",
          "symbol_native": "MDL",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "MDL",
          "name_plural": "Moldovan lei"
        },
        "MGA": {
          "symbol": "MGA",
          "name": "Malagasy Ariary",
          "symbol_native": "MGA",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "MGA",
          "name_plural": "Malagasy Ariaries"
        },
        "MKD": {
          "symbol": "MKD",
          "name": "Macedonian Denar",
          "symbol_native": "MKD",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "MKD",
          "name_plural": "Macedonian denari"
        },
        "MMK": {
          "symbol": "MMK",
          "name": "Myanma Kyat",
          "symbol_native": "K",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "MMK",
          "name_plural": "Myanma kyats"
        },
        "MOP": {
          "symbol": "MOP$",
          "name": "Macanese Pataca",
          "symbol_native": "MOP$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "MOP",
          "name_plural": "Macanese patacas"
        },
        "MUR": {
          "symbol": "MURs",
          "name": "Mauritian Rupee",
          "symbol_native": "MURs",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "MUR",
          "name_plural": "Mauritian rupees"
        },
        "MXN": {
          "symbol": "MX$",
          "name": "Mexican Peso",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "MXN",
          "name_plural": "Mexican pesos"
        },
        "MYR": {
          "symbol": "RM",
          "name": "Malaysian Ringgit",
          "symbol_native": "RM",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "MYR",
          "name_plural": "Malaysian ringgits"
        },
        "MZN": {
          "symbol": "MTn",
          "name": "Mozambican Metical",
          "symbol_native": "MTn",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "MZN",
          "name_plural": "Mozambican meticals"
        },
        "NAD": {
          "symbol": "N$",
          "name": "Namibian Dollar",
          "symbol_native": "N$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "NAD",
          "name_plural": "Namibian dollars"
        },
        "NGN": {
          "symbol": "₦",
          "name": "Nigerian Naira",
          "symbol_native": "₦",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "NGN",
          "name_plural": "Nigerian nairas"
        },
        "NIO": {
          "symbol": "C$",
          "name": "Nicaraguan Córdoba",
          "symbol_native": "C$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "NIO",
          "name_plural": "Nicaraguan córdobas"
        },
        "NOK": {
          "symbol": "Nkr",
          "name": "Norwegian Krone",
          "symbol_native": "kr",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "NOK",
          "name_plural": "Norwegian kroner"
        },
        "NPR": {
          "symbol": "NPRs",
          "name": "Nepalese Rupee",
          "symbol_native": "नेरू",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "NPR",
          "name_plural": "Nepalese rupees"
        },
        "NZD": {
          "symbol": "NZ$",
          "name": "New Zealand Dollar",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "NZD",
          "name_plural": "New Zealand dollars"
        },
        "OMR": {
          "symbol": "OMR",
          "name": "Omani Rial",
          "symbol_native": "ر.ع.‏",
          "decimal_digits": 3,
          "rounding": 0,
          "code": "OMR",
          "name_plural": "Omani rials"
        },
        "PAB": {
          "symbol": "B/.",
          "name": "Panamanian Balboa",
          "symbol_native": "B/.",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "PAB",
          "name_plural": "Panamanian balboas"
        },
        "PEN": {
          "symbol": "S/.",
          "name": "Peruvian Nuevo Sol",
          "symbol_native": "S/.",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "PEN",
          "name_plural": "Peruvian nuevos soles"
        },
        "PHP": {
          "symbol": "₱",
          "name": "Philippine Peso",
          "symbol_native": "₱",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "PHP",
          "name_plural": "Philippine pesos"
        },
        "PKR": {
          "symbol": "PKRs",
          "name": "Pakistani Rupee",
          "symbol_native": "₨",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "PKR",
          "name_plural": "Pakistani rupees"
        },
        "PLN": {
          "symbol": "zł",
          "name": "Polish Zloty",
          "symbol_native": "zł",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "PLN",
          "name_plural": "Polish zlotys"
        },
        "PYG": {
          "symbol": "₲",
          "name": "Paraguayan Guarani",
          "symbol_native": "₲",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "PYG",
          "name_plural": "Paraguayan guaranis"
        },
        "QAR": {
          "symbol": "QR",
          "name": "Qatari Rial",
          "symbol_native": "ر.ق.‏",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "QAR",
          "name_plural": "Qatari rials"
        },
        "RON": {
          "symbol": "RON",
          "name": "Romanian Leu",
          "symbol_native": "RON",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "RON",
          "name_plural": "Romanian lei"
        },
        "RSD": {
          "symbol": "din.",
          "name": "Serbian Dinar",
          "symbol_native": "дин.",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "RSD",
          "name_plural": "Serbian dinars"
        },
        "RUB": {
          "symbol": "RUB",
          "name": "Russian Ruble",
          "symbol_native": "₽.",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "RUB",
          "name_plural": "Russian rubles"
        },
        "RWF": {
          "symbol": "RWF",
          "name": "Rwandan Franc",
          "symbol_native": "FR",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "RWF",
          "name_plural": "Rwandan francs"
        },
        "SAR": {
          "symbol": "SR",
          "name": "Saudi Riyal",
          "symbol_native": "ر.س.‏",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "SAR",
          "name_plural": "Saudi riyals"
        },
        "SDG": {
          "symbol": "SDG",
          "name": "Sudanese Pound",
          "symbol_native": "SDG",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "SDG",
          "name_plural": "Sudanese pounds"
        },
        "SEK": {
          "symbol": "Skr",
          "name": "Swedish Krona",
          "symbol_native": "kr",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "SEK",
          "name_plural": "Swedish kronor"
        },
        "SGD": {
          "symbol": "S$",
          "name": "Singapore Dollar",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "SGD",
          "name_plural": "Singapore dollars"
        },
        "SOS": {
          "symbol": "Ssh",
          "name": "Somali Shilling",
          "symbol_native": "Ssh",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "SOS",
          "name_plural": "Somali shillings"
        },
        "SYP": {
          "symbol": "SY£",
          "name": "Syrian Pound",
          "symbol_native": "ل.س.‏",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "SYP",
          "name_plural": "Syrian pounds"
        },
        "THB": {
          "symbol": "฿",
          "name": "Thai Baht",
          "symbol_native": "฿",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "THB",
          "name_plural": "Thai baht"
        },
        "TND": {
          "symbol": "DT",
          "name": "Tunisian Dinar",
          "symbol_native": "د.ت.‏",
          "decimal_digits": 3,
          "rounding": 0,
          "code": "TND",
          "name_plural": "Tunisian dinars"
        },
        "TOP": {
          "symbol": "T$",
          "name": "Tongan Paʻanga",
          "symbol_native": "T$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "TOP",
          "name_plural": "Tongan paʻanga"
        },
        "TRY": {
          "symbol": "TL",
          "name": "Turkish Lira",
          "symbol_native": "TL",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "TRY",
          "name_plural": "Turkish Lira"
        },
        "TTD": {
          "symbol": "TT$",
          "name": "Trinidad and Tobago Dollar",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "TTD",
          "name_plural": "Trinidad and Tobago dollars"
        },
        "TWD": {
          "symbol": "NT$",
          "name": "New Taiwan Dollar",
          "symbol_native": "NT$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "TWD",
          "name_plural": "New Taiwan dollars"
        },
        "TZS": {
          "symbol": "TSh",
          "name": "Tanzanian Shilling",
          "symbol_native": "TSh",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "TZS",
          "name_plural": "Tanzanian shillings"
        },
        "UAH": {
          "symbol": "₴",
          "name": "Ukrainian Hryvnia",
          "symbol_native": "₴",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "UAH",
          "name_plural": "Ukrainian hryvnias"
        },
        "UGX": {
          "symbol": "USh",
          "name": "Ugandan Shilling",
          "symbol_native": "USh",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "UGX",
          "name_plural": "Ugandan shillings"
        },
        "UYU": {
          "symbol": "$U",
          "name": "Uruguayan Peso",
          "symbol_native": "$",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "UYU",
          "name_plural": "Uruguayan pesos"
        },
        "UZS": {
          "symbol": "UZS",
          "name": "Uzbekistan Som",
          "symbol_native": "UZS",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "UZS",
          "name_plural": "Uzbekistan som"
        },
        "VEF": {
          "symbol": "Bs.F.",
          "name": "Venezuelan Bolívar",
          "symbol_native": "Bs.F.",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "VEF",
          "name_plural": "Venezuelan bolívars"
        },
        "VND": {
          "symbol": "₫",
          "name": "Vietnamese Dong",
          "symbol_native": "₫",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "VND",
          "name_plural": "Vietnamese dong"
        },
        "XAF": {
          "symbol": "FCFA",
          "name": "CFA Franc BEAC",
          "symbol_native": "FCFA",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "XAF",
          "name_plural": "CFA francs BEAC"
        },
        "XOF": {
          "symbol": "CFA",
          "name": "CFA Franc BCEAO",
          "symbol_native": "CFA",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "XOF",
          "name_plural": "CFA francs BCEAO"
        },
        "YER": {
          "symbol": "YR",
          "name": "Yemeni Rial",
          "symbol_native": "ر.ي.‏",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "YER",
          "name_plural": "Yemeni rials"
        },
        "ZAR": {
          "symbol": "R",
          "name": "South African Rand",
          "symbol_native": "R",
          "decimal_digits": 2,
          "rounding": 0,
          "code": "ZAR",
          "name_plural": "South African rand"
        },
        "ZMK": {
          "symbol": "ZK",
          "name": "Zambian Kwacha",
          "symbol_native": "ZK",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "ZMK",
          "name_plural": "Zambian kwachas"
        },
        "ZWL": {
          "symbol": "ZWL$",
          "name": "Zimbabwean Dollar",
          "symbol_native": "ZWL$",
          "decimal_digits": 0,
          "rounding": 0,
          "code": "ZWL",
          "name_plural": "Zimbabwean Dollar"
        }
      };
      /***/
    },

    /***/
    "./src/app/pipes/i18n-date.pipe.ts":
    /*!*****************************************!*\
      !*** ./src/app/pipes/i18n-date.pipe.ts ***!
      \*****************************************/

    /*! exports provided: I18nDatePipe */

    /***/
    function srcAppPipesI18nDatePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I18nDatePipe", function () {
        return I18nDatePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var I18nDatePipe = /*#__PURE__*/function () {
        function I18nDatePipe(translateservice) {
          _classCallCheck(this, I18nDatePipe);

          this.translateservice = translateservice;
        }

        _createClass(I18nDatePipe, [{
          key: "transform",
          value: function transform(value, format, timeZome) {
            var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.translateservice.currentLang);
            return datePipe.transform(value, format, timeZome);
          }
        }]);

        return I18nDatePipe;
      }();

      I18nDatePipe.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      };

      I18nDatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
        name: 'i18nDate'
      })], I18nDatePipe);
      /***/
    },

    /***/
    "./src/app/pipes/pipes.module.ts":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _i18n_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./i18n-date.pipe */
      "./src/app/pipes/i18n-date.pipe.ts");
      /* harmony import */


      var _currency_symbol_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./currency-symbol.pipe */
      "./src/app/pipes/currency-symbol.pipe.ts");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_3__["I18nDatePipe"], _currency_symbol_pipe__WEBPACK_IMPORTED_MODULE_4__["CurrencySymbolPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_3__["I18nDatePipe"]]
      })], PipesModule);
      /***/
    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./global */
      "./src/app/services/global.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.logged = false;
        }

        _createClass(AuthService, [{
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('token') || this.token;
          }
        }, {
          key: "setToken",
          value: function setToken(token) {
            if (!token) {
              localStorage.removeItem('token');
            } else {
              localStorage.setItem('token', token);
            }

            this.token = token;
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            var token = this.getToken();
            var result = false;

            try {
              result = _global__WEBPACK_IMPORTED_MODULE_2__["Global"].jwt_helper.decodeToken(token);
            } catch (error) {}

            return result;
          }
        }, {
          key: "setIdentity",
          value: function setIdentity(user) {
            this.identity = user;
          }
        }, {
          key: "logout",
          value: function logout() {
            this.setToken(null);
            this.setIdentity(null);
          }
        }, {
          key: "networkLogin",
          value: function networkLogin() {
            var _this8 = this;

            var body = {
              username: _global__WEBPACK_IMPORTED_MODULE_2__["Global"].CREDENTIALS.username,
              password: _global__WEBPACK_IMPORTED_MODULE_2__["Global"].CREDENTIALS.password,
              provider: 'native',
              access_token: null
            };
            return this.http.post(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].ENDPOINTS.USERS + "/login", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) {
              _this8.setToken(x.token);

              _this8.setIdentity(x.user);

              return x;
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/services/global.ts":
    /*!************************************!*\
      !*** ./src/app/services/global.ts ***!
      \************************************/

    /*! exports provided: Global */

    /***/
    function srcAppServicesGlobalTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Global", function () {
        return Global;
      });
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Global = /*#__PURE__*/function () {
        function Global() {
          _classCallCheck(this, Global);
        }

        _createClass(Global, null, [{
          key: "getDeviceStatus",
          value: function getDeviceStatus() {
            var short_result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var result_short = {
              c: {
                s: Global.CONNECTION_STATUS
              },
              p: {
                s: Global.PRINTER_STATUS
              },
              qr: {
                s: Global.QRCODE_STATUS
              },
              ts: {
                s: Global.TOUCHSCREEN_STATUS
              }
            };
            var result = {
              connection: {
                status: Global.CONNECTION_STATUS
              },
              printer: {
                status: Global.PRINTER_STATUS
              },
              qrcode: {
                status: Global.QRCODE_STATUS
              },
              touchscreen: {
                status: Global.TOUCHSCREEN_STATUS
              }
            };
            return short_result ? result_short : result;
          }
        }]);

        return Global;
      }();

      Global.CREDENTIALS = {
        username: "device",
        password: "123456"
      };
      Global.ENDPOINTS = {
        ORDERS: "https://i8jrtirjm3.execute-api.eu-west-3.amazonaws.com/dev",
        USERS: "https://t2zzcvkhjb.execute-api.eu-west-3.amazonaws.com/dev",
        PRINTER: "http://localhost:2458",
        TOTEMS: "https://7ifca48yhf.execute-api.eu-west-3.amazonaws.com/dev"
      };
      Global.jwt_helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"]();
      Global.validationSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      Global.validationError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      Global.CONNECTION_STATUS = 0
      /* ONLINE */
      ;
      Global.PRINTER_STATUS = 0
      /* ON */
      ;
      Global.TOUCHSCREEN_STATUS = 0
      /* ON */
      ;
      Global.QRCODE_STATUS = 0
      /* ON */
      ;
      Global.DEFAULT_LANG = 'it';
      /***/
    },

    /***/
    "./src/app/services/orders.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/orders.service.ts ***!
      \********************************************/

    /*! exports provided: OrdersService */

    /***/
    function srcAppServicesOrdersServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersService", function () {
        return OrdersService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./global */
      "./src/app/services/global.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var OrdersService = /*#__PURE__*/function () {
        function OrdersService(http) {
          _classCallCheck(this, OrdersService);

          this.http = http;
        }

        _createClass(OrdersService, [{
          key: "findById",
          value: function findById(id) {
            return this.http.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].ENDPOINTS.ORDERS + "/orders/" + id, {
              params: {
                filter: "{}"
              }
            });
          }
        }, {
          key: "validateAndPrint",
          value: function validateAndPrint(idOrCode) {
            return this.http.post("".concat(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].ENDPOINTS.PRINTER, "/orders/").concat(idOrCode, "/validate"), {
              id: idOrCode
            }, {
              headers: {
                lang: _global__WEBPACK_IMPORTED_MODULE_3__["Global"].DEFAULT_LANG
              }
            });
          }
        }, {
          key: "validateOrder",
          value: function validateOrder(order) {
            var _this9 = this;

            return this.http.put(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].ENDPOINTS.ORDERS + "/orders/" + order.id + "?updateFields=validated&includes=event", {
              validated: new Date()
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              //FileManager.newLineAppendTo(Electron.getGlobal('__dirname') + `/${order.fk_event}/orders/validations.txt`, res.id).then(res => { }, )
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (x) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.prev = 0;
                        _context4.next = 6;
                        break;

                      case 3:
                        _context4.prev = 3;
                        _context4.t0 = _context4["catch"](0);
                        return _context4.abrupt("return", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]["throw"](_context4.t0));

                      case 6:
                        return _context4.abrupt("return", order);

                      case 7:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, null, [[0, 3]]);
              }));
            }));
          }
        }, {
          key: "validateOrderByCode",
          value: function validateOrderByCode(code) {
            return this.http.get(_global__WEBPACK_IMPORTED_MODULE_3__["Global"].ENDPOINTS.ORDERS + "/orders/" + code + "/validate?updateFields=validated");
          }
        }]);

        return OrdersService;
      }();

      OrdersService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      OrdersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OrdersService);
      /***/
    },

    /***/
    "./src/app/services/printer.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/printer.service.ts ***!
      \*********************************************/

    /*! exports provided: PrinterService, PrinterErrorStatus */

    /***/
    function srcAppServicesPrinterServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrinterService", function () {
        return PrinterService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrinterErrorStatus", function () {
        return PrinterErrorStatus;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _pipes_currency_symbol_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pipes/currency-symbol.pipe */
      "./src/app/pipes/currency-symbol.pipe.ts");
      /* harmony import */


      var _pipes_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../pipes/i18n-date.pipe */
      "./src/app/pipes/i18n-date.pipe.ts");
      /* harmony import */


      var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./global */
      "./src/app/services/global.ts");

      var PrinterService = /*#__PURE__*/function () {
        function PrinterService(translate, http) {
          _classCallCheck(this, PrinterService);

          this.translate = translate;
          this.http = http;
        }

        _createClass(PrinterService, [{
          key: "printOrder",
          value: function printOrder(order) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var i18nDatePipe, currencySymbolPipe, current, total, _iterator, _step, r, tickets, _iterator2, _step2, _r, i, ticket;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      i18nDatePipe = new _pipes_i18n_date_pipe__WEBPACK_IMPORTED_MODULE_5__["I18nDatePipe"](this.translate);
                      currencySymbolPipe = new _pipes_currency_symbol_pipe__WEBPACK_IMPORTED_MODULE_4__["CurrencySymbolPipe"]();

                      if (!order.movement || !order.movement.currency) {
                        order.movement = {
                          currency: 'eur'
                        };
                      }

                      current = 0;
                      total = 0;
                      _iterator = _createForOfIteratorHelper(order.rows);

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          r = _step.value;
                          total += r.qta;
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                      tickets = [];
                      _iterator2 = _createForOfIteratorHelper(order.rows);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          _r = _step2.value;
                          console.log("print - " + _r.name);

                          for (i = 0; i < _r.qta; i++) {
                            current++;
                            ticket = {
                              date: i18nDatePipe.transform(order.event.from, 'EEE dd MMM'),
                              location: order.event.location,
                              product_name: _r.name,
                              price: _r.price / Math.pow(10, _pipes_currency_symbol_pipe__WEBPACK_IMPORTED_MODULE_4__["CURRENCY"][(order.movement.currency || 'none').toUpperCase()].decimal_digits || 2),
                              currency: currencySymbolPipe.transform(order.movement.currency) || '€',
                              printed: i18nDatePipe.transform(order.created, "'".concat(this.translate.instant("Printer.bought_at"), "' HH:mm")),
                              watermark: order.watermark || "AddoAddoAddoAddo",
                              rotateWatermark: true
                            };
                            tickets.push({
                              ticket: ticket,
                              clear: current == total
                            });
                          }
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      _context5.next = 12;
                      return this.http.post("".concat(_global__WEBPACK_IMPORTED_MODULE_6__["Global"].ENDPOINTS.PRINTER, "/tickets/print"), tickets).toPromise();

                    case 12:
                      return _context5.abrupt("return", _context5.sent);

                    case 13:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "checkPrinterStatus",
          value: function checkPrinterStatus() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.http.get("".concat(_global__WEBPACK_IMPORTED_MODULE_6__["Global"].ENDPOINTS.PRINTER, "/status")).toPromise();

                    case 2:
                      return _context6.abrupt("return", _context6.sent);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "canPrint",
          value: function canPrint() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var check_status;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.checkPrinterStatus();

                    case 2:
                      check_status = _context7.sent;
                      return _context7.abrupt("return", check_status.status.filter(function (cs) {
                        return cs != PrinterErrorStatus.DRAWER_OPENED && cs != PrinterErrorStatus.PAPER_TAKEOUT;
                      }).length == 0);

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return PrinterService;
      }();

      PrinterService.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      PrinterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], PrinterService);
      var PrinterErrorStatus;

      (function (PrinterErrorStatus) {
        PrinterErrorStatus["DRAWER_OPENED"] = "DRAWER_OPENED";
        PrinterErrorStatus["OFFLINE"] = "OFFLINE";
        PrinterErrorStatus["COVER_UP"] = "COVER_UP";
        PrinterErrorStatus["FEED_PRESSED"] = "FEED_PRESSED";
        PrinterErrorStatus["NO_PAPER"] = "NO_PAPER";
        PrinterErrorStatus["ERROR_OCCURIED"] = "ERROR_OCCURIED";
        PrinterErrorStatus["CUTTER_ERROR"] = "CUTTER_ERROR";
        PrinterErrorStatus["UNRECOVERABLE_ERROR"] = "UNRECOVERABLE_ERROR";
        PrinterErrorStatus["DEGREE_OR_VOLTAGE_OVERRANGE"] = "DEGREE_OR_VOLTAGE_OVERRANGE";
        PrinterErrorStatus["PAPER_NEAREND"] = "PAPER_NEAREND";
        PrinterErrorStatus["PAPER_TAKEOUT"] = "PAPER_TAKEOUT";
      })(PrinterErrorStatus || (PrinterErrorStatus = {}));
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/addo/addo/addo.hyper-tech/client/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map